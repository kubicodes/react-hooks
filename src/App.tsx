import React, { useEffect, useState } from "react";
import "./App.css";
import Hello from "./Hello";
import { useFetch } from "./useFetch";

const App = () => {
  const [showHelloWorld, setShowHelloWorld] = useState<boolean>(true);
  const [userIdToDisplay, setUserIdToDisplay] = useState<number>(1);

  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userIdToDisplay}`;

  const { data, loading } = useFetch(apiUrl);

  return (
    <div>
      <button onClick={() => setShowHelloWorld(!showHelloWorld)}>
        Toggle Hello World
      </button>
      {showHelloWorld ? <Hello /> : null}

      <br />
      <p>User ID To Display</p>
      <input
        type={"number"}
        min={1}
        max={10}
        value={userIdToDisplay}
        onChange={(e) => setUserIdToDisplay(parseInt(e.target.value))}
      ></input>

      <h4>User with ID {userIdToDisplay}</h4>
      {loading ? <div>loading ....</div> : <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default App;
