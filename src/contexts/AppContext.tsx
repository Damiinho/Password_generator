import { ReactNode, createContext, useState } from "react";
import { AppContextInterface } from "../interfaces/interface";

export const AppContext = createContext<AppContextInterface>({
  length: 16,
  setLength: () => {},
  uppercase: false,
  setUppercase: () => {},
  lowercase: false,
  setLowercase: () => {},
  numbers: false,
  setNumbers: () => {},
  symbols: false,
  setSymbols: () => {},
  inputPassword: "",
  setInputPassword: () => {},
  generatePassword: (count: number) => console.log(count),
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [length, setLength] = useState<number>(16);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);
  const [inputPassword, setInputPassword] = useState<string>("");
  const generatePassword = (count: number) => {
    const passwordLength = count !== undefined ? count : length;
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result: string = "";
    for (let i = 0; i < passwordLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setInputPassword(result);
  };

  const providerValue = {
    length,
    setLength,
    uppercase,
    setUppercase,
    lowercase,
    setLowercase,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
    inputPassword,
    setInputPassword,
    generatePassword,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
