import { useContext } from "react";
import { UserContext } from "./UseContext";

export default function UseContext4() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="box">
        <h3>UseContext D</h3>
        <h4>{`Bye ${user}`}</h4>
      </div>
    </>
  );
}
