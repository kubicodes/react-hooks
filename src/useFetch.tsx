import React, { useEffect, useState } from "react";

export const useFetch = (apiUrl: string) => {
  const [state, setState] = useState({
    data: { name: "", username: "", email: "" },
    loading: true,
  });

  const fetchApi = async (): Promise<void> => {
    const response = await fetch(apiUrl);
    const apiData = await response.json();

    setState({
      data: {
        name: apiData.name,
        username: apiData.username,
        email: apiData.email,
      },
      loading: false,
    });
  };

  useEffect(() => {
    fetchApi().catch((error) => console.error(error));
  }, [apiUrl, setState]);

  useEffect(() => {
    return () => {
      setState({ data: { ...state.data }, loading: true });
    };
  }, [apiUrl, setState]);

  return state;
};
