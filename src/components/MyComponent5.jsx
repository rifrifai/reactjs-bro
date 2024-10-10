import { useState } from "react";

export default function MyComponent5() {
  const [phones, setPhones] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  function handleAddPhone() {
    const newPhone = { year, make, model };
    setPhones((prevPhone) => [...prevPhone, newPhone]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }
  function handleRemovePhone(index) {
    setPhones((prevPhone) => prevPhone.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>List of phone Objects</h2>
      <ol>
        {phones.map((phone, index) => (
          <li key={index} onClick={() => handleRemovePhone(index)}>
            {phone.year} {phone.make} {phone.model}
          </li>
        ))}
      </ol>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        placeholder="Enter brand phone"
      />
      <br />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Enter model phone"
      />
      <button onClick={handleAddPhone}>Add Phone</button>
    </>
  );
}
