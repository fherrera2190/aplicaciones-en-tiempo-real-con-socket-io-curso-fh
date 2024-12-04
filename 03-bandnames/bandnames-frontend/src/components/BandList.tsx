import { ChangeEvent, useEffect, useState } from "react";
import { Band } from "../interfaces";

interface Props {
  data: Band[];
  voteBand: (id: string) => void;
  deleteBand: (id: string) => void;
  changeName: (id: string, newName: string) => void;
}

export const BandList = ({ data, voteBand, deleteBand,changeName }: Props) => {
  const [bands, setBands] = useState(data);

  

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    data = data.map((band) => {
      if (band.id === id) {
        band.name = e.target.value;
      }
      return band;
    });

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

  const onLostFocus = (id: string, nombre: string) => {
    changeName(id, nombre);
  };
  
  useEffect(() => {
    setBands(data);
  }, [data]);

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
