/* eslint-disable no-unused-vars */
function Buttonn() {
  // const eventHandler = (name) => console.log(`${name} clicked me!`);

  // let count = 0;
  // const eventHandler2 = (name) => {
  //   if (count < 5) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   } else {
  //     console.log(`${name} stop clicking me!`);
  //   }
  // };

  // const eventHandler3 = (event) => console.log(event);
  const eventHandler3 = (event) => {
    event.target.textContent = "Stop Clicked!";
    console.log(event);
  };

  return (
    <>
      <button
        className="buttonn"
        onDoubleClick={(event) => eventHandler3(event)}
      >
        Click Me! 👆
      </button>
    </>
  );
}

export default Buttonn;
