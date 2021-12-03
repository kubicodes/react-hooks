import { useEffect, useState, useRef } from "react";

export const useFetch = (url: string) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  const fetchData = async (): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };
  //unmounted
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: state.data, loading: true });

    fetchData().then((data) => {
      setTimeout(() => {
        // we check if the current component is mounted so we didn´t receive the error of 
        //being not able to set the state of an unmounted component
        if (isCurrent.current) {
          setState({ data, loading: false });
        }
      }, 2000);
    });
  }, [url, setState]);

  return state;
};
