// useState() = Re-renders the component when the state value changes.

import { useEffect, useRef, useState } from "react";

// useRef() = 'use Reference' does not cause re-renders when its value changes. When you want a component to 'remember' some information, but you don't want that information to trigger new renders.

// 1. Accessing/ Interacting with the DOM
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

export default function UseRef() {
  const [number, setNumber] = useState(0);
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("component rendered");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "aqua";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "aqua";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "aqua";
  }

  return (
    <>
      <button
        style={{
          backgroundColor: "bisque",
          color: "brown",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
        }}
        onClick={handleClick}
      >
        Click me!
      </button>
      <input
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
        }}
        ref={inputRef}
      />
      <br />
      <button
        style={{
          backgroundColor: "bisque",
          color: "brown",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
        }}
        onClick={handleClick2}
      >
        Click me!
      </button>
      <input
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
        }}
        ref={inputRef2}
      />
      <br />
      <button
        style={{
          backgroundColor: "bisque",
          color: "brown",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
        }}
        onClick={handleClick3}
      >
        Click me!
      </button>
      <input
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
        }}
        ref={inputRef3}
      />
    </>
  );
}
