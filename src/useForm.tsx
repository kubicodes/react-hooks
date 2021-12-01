import { useState } from "react";
import { User } from "./types/User";

export const useForm = (initalValues: User) => {
  const [values, setValues] = useState<User>(initalValues);

  //return a custom hook to read and set values
  return [
    values,
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [event.target.name]: event.target.value }),
  ];
};
