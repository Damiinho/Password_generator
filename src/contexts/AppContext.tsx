import { createContext } from "react";
import { AppContextInterface } from "../interfaces/interface";

export const AppContext = createContext<AppContextInterface>({
  counter: 0,
  setCounter: () => {},
  length: 0,
  setLength: () => {},
});
