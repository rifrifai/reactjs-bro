import { useEffect, useState } from "react";

export default function UseEffect2() {
  const [width, setWidth] = useState(window.innerWidth);
  const [heigth, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("eventListener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("eventListener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size ${width} * ${heigth}`;
  }, [heigth]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window width: {width}</p>
      <p>Window height: {heigth}</p>
    </>
  );
}
