import React, { useState } from "react";
import "./App.css";
import { User } from "./types/User";
import { useForm } from "./useForm";

function App() {
  const userObject: User = {
    id: 1,
    name: "kubicodes",
  };

  const [values, handleChange] = useForm(userObject);

  return (
    <div>
      {/* <h1>Hello World</h1>
      <button
        // works also with callback
        // onClick={() => {
        //   setUser((prevState) => {
        //     return { ...prevState, name: "New Name" };
        //   });
        // }}

        // onClick={() => setUser({ ...user, name: "New Name" })}
      >
        Click me
      </button>
      <div>{user.name}</div> */}

      <input name="username" value={values.name} onChange={handleChange} />
    </div>
  );
}

export default App;
