import { useState } from "react";

export default function ColorPicker() {
  const [warna, setWarna] = useState("#ffffff");

  function handleColorChange(event) {
    setWarna(event.target.value);
  }

  return (
    <div className="picker-color-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: warna }}>
        <p>Warna yang kamu pilih {warna}</p>
      </div>
      <label>Pilih Warna: </label>
      <input type="color" value={warna} onChange={handleColorChange} />
    </div>
  );
}
