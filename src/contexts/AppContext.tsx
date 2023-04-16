import { ReactNode, createContext, useEffect, useState } from "react";
import { AppContextInterface } from "../interfaces/interface";

export const AppContext = createContext<AppContextInterface>({
  length: 6,
  setLength: () => {},
  uppercase: true,
  setUppercase: () => {},
  lowercase: false,
  setLowercase: () => {},
  numbers: true,
  setNumbers: () => {},
  symbols: true,
  setSymbols: () => {},
  inputPassword: "select option",
  setInputPassword: () => {},
  generatePassword: (
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean
  ) => console.log(length),
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [length, setLength] = useState<number>(6);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);
  const [inputPassword, setInputPassword] = useState<string>("select option");
  const generatePassword = (
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean
  ) => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+";

    let result = "";
    if (chars) {
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    } else {
      result = "select option";
    }
    setInputPassword(result);
  };

  useEffect(() => {
    generatePassword(length, uppercase, lowercase, numbers, symbols);
  }, [length, uppercase, lowercase, numbers, symbols]);

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
