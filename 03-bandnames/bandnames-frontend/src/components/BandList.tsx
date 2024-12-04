import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Band } from "../interfaces";
import SocketContext from "../context/SocketContex";

export const BandList = () => {
  const { socket } = useContext(SocketContext);
  const [bands, setBands] = useState<Band[]>([]);

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setBands((value) => {
      const newBand = value.map((band) => {
        if (band.id === id) {
          band.name = e.target.value;
        }
        return band;
      });

      return newBand;
    });
  };

  const voteBand = (id: string) => {
    socket.emit("vote-band", id);
  };

  const deleteBand = (id: string) => {
    socket.emit("delete-band", id);
  };

  const onLostFocus = (id: string, newName: string) => {
    if (newName.trim() === "") return;
    socket.emit("change-name", { id, newName: newName.trim() });
  };

  useEffect(() => {
    socket.on("current-bands", (bands) => {
      setBands(bands);
    });

    return () => {
      socket.off("current-bands");
    };
  }, [socket]);

  const createRows = () => {
    return (
      <>
        {bands.map(({ id, name, vote }) => (
          <tr key={id}>
            <td>
              <button onClick={() => voteBand(id)} className="btn btn-primary">
                +1
              </button>
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => handleOnchange(e, id)}
                onBlur={() => onLostFocus(id, name)}
              />
            </td>
            <td>
              <h3>{vote}</h3>
            </td>

            <td>
              <button onClick={() => deleteBand(id)} className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Vote</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};
