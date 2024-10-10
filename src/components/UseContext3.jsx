import UseContext4 from "./UseContext4";
import { useContext } from "react";
import { UserContext } from "./UseContext";

export default function UseContext3() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="box">
        <h3>UseContext C</h3>
        <h4>{`It's me ${user}`}</h4>
        <UseContext4 />
      </div>
    </>
  );
}
