import React, { useState } from "react";
import { useFetch } from "./useFetch";

const Hello: React.FC<{}> = () => {
  const apiUrl = `https://jsonplaceholder.typicode.com/users/1`;

  const { data, loading } = useFetch(apiUrl);

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <div>count: {count}</div>
      {loading ? <div>loading.... </div> : <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default Hello;
