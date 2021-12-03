import React, { useRef, useState } from "react";
import Hello from "./Hello";
function App() {
  const [showHello, setShowHello] = useState(true);
  const hello = useRef(() => console.log("hello"));

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <button
        onClick={() => {
          hello.current();
        }}
      >
        Hello
      </button>
    </div>
  );
}

export default App;
