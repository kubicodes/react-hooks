import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  });

  return <h1>Hello World</h1>;
};

export default Hello;
