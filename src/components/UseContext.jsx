/* useContext() = React Hook that allows you to share values across components without passing props down through each level of the component tree */

/* PROVIDER COMPONENT 
1. import {createContext} from 'react'
2. export const nameContext = createContext();
3.  <nameContext.Provider value={value}>
      <Child />
    </nameContext.Provider>
*/

/* CONSUMER COMPONENTS 
1. import {useContext} from 'react'
2. import {nameContext} from './nameContext.jsx';
3. const value = useContext(nameContext)*/

import { createContext } from "react";
import UseContext2 from "./UseContext2";

export const UserContext = createContext();

export default function UseContext() {
  const user = "John";

  return (
    <>
      <div className="box">
        <h3>UseContext A</h3>
        <h4>{`Hello ${user}`}</h4>
        <UserContext.Provider value={user}>
          <UseContext2 />
        </UserContext.Provider>
      </div>
    </>
  );
}
