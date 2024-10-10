// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// 1. This component re-renders
// 2. This component mounts
// 3. The state of a value

// useEffect(function, [dependencies])
// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount (pertama kali dimuat)
// 3. useEffect(() => {}, [value])  // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subcriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts
import { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Clicked ${count} times ${color}`;

    return () => {
      // Clean up function
      console.log("Clean up");
    };
  }, [count, color]);

  return (
    <>
      <p>You clicked {count} times</p>
      <button
        style={{
          backgroundColor: "blue",
          color: "whitesmoke",
          margin: "0.5rem",
        }}
        onClick={() => setCount((c) => c + 1)}
      >
        Add
      </button>
      <button
        style={{ backgroundColor: "red", color: "whitesmoke" }}
        onClick={() => setCount((c) => c - 1)}
      >
        Subtract
      </button>
      <button
        style={{ color: color, margin: "0.5rem" }}
        onClick={() => setColor(color === "green" ? "black" : "green")}
      >
        Change Color
      </button>
    </>
  );
}
