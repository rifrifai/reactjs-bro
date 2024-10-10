import { useState } from "react";

export default function MyComponent4() {
  const [brands, setBrands] = useState(["Honda", "Yamaha", "Kawasaki"]);

  function handleAddBrand() {
    const newBrand = document.getElementById("inputBrand").value;

    document.getElementById("inputBrand").value = "";
    setBrands((prevBrands) => [...prevBrands, newBrand]);
  }

  function handleRemoveBrand(index) {
    setBrands(brands.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>List of Brands in planet Earth</h2>
      <ul>
        {brands.map((brand, index) => (
          <li key={index} onClick={() => handleRemoveBrand(index)}>
            {brand}
          </li>
        ))}
      </ul>
      <input type="text" id="inputBrand" placeholder="Enter your brand" />
      <button onClick={handleAddBrand}>Add brand</button>
    </>
  );
}
