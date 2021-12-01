import React, { useState } from "react";
import "./App.css";

function App() {
  interface User {
    id: number;
    name: string;
  }

  const userObject: User = {
    id: 1,
    name: "kubicodes",
  };

  const [user, setUser] = useState<User>(userObject);

  return (
    <div>
      <h1>Hello World</h1>
      <button
        // works also with callback
        // onClick={() => {
        //   setUser((prevState) => {
        //     return { ...prevState, name: "New Name" };
        //   });
        // }}

        onClick={() => setUser({ ...user, name: "New Name" })}
      >
        Click me
      </button>
      <div>{user.name}</div>
    </div>
  );
}

export default App;
