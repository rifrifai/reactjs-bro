import { useState } from "react";

export default function MyComponent3() {
  const [motor, setMotor] = useState({
    year: 2024,
    model: "Vario 150",
    make: "Honda",
  });

  // updater function
  function handleYearChange(e) {
    setMotor((prevMotor) => ({ ...prevMotor, year: e.target.value }));
  }
  function handleModelChange(e) {
    setMotor((m) => ({ ...m, model: e.target.value }));
  }
  function handleMakeChange(event) {
    setMotor((m) => ({ ...m, make: event.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite motocycle is a {motor.year} {motor.model} {motor.make}
      </p>
      <input type="number" value={motor.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={motor.model} onChange={handleModelChange} />
      <br />
      <input type="text" value={motor.make} onChange={handleMakeChange} />
      <br />
    </div>
  );
}
