import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={() => setName("Yeamploww")}>Set Name!</button>

        <p>Age: {age}</p>
        <button onClick={() => setAge(age + 1)}>Increment Age!</button>

        <p>Is Employed: {isEmployed ? "Yes" : "Nope"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
      </div>
    </>
  );
}
export default MyComponent;
