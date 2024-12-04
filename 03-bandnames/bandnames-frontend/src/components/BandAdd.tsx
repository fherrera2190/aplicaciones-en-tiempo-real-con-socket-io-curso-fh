import { ChangeEvent, FormEvent, useContext, useState } from "react";
import SocketContext from "../context/SocketContex";


export const BandAdd = () => {
  const { socket } = useContext(SocketContext);

  const [inputValue, setInputValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setInputValue(target.value.trim());
  };

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("add-band", { name: inputValue });
    setInputValue("");
  };

  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          name=""
          className="form-control"
          placeholder="New name and"
          value={inputValue}
          onChange={onChange}
        />
      </form>
    </>
  );
};
