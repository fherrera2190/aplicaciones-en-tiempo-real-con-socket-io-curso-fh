import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  addBand: (name: string) => void;
}

export const BandAdd = ({ addBand }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setInputValue(target.value.trim());
  };

  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBand(inputValue);
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
