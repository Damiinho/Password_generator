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
  strength: 0,
  setStrength: () => {},
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
  const [inputPassword, setInputPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);
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
  const generateStrength = (
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean
  ) => {
    if (length < 7) {
      if (!(!uppercase || !lowercase || !numbers || !symbols)) {
        setStrength(2);
      } else setStrength(1);
    } else if (length < 10) {
      if (uppercase && lowercase && numbers && symbols) {
        setStrength(3);
      } else setStrength(2);
    } else if (length < 12) {
      if (uppercase && lowercase && numbers && symbols) {
        setStrength(4);
      } else if (uppercase || lowercase || numbers || symbols) {
        setStrength(3);
      } else setStrength(2);
    } else if (length < 15) {
      if (uppercase || lowercase || numbers || symbols) {
        setStrength(4);
      } else setStrength(3);
    } else setStrength(4);
  };

  useEffect(() => {
    generatePassword(length, uppercase, lowercase, numbers, symbols);
    generateStrength(length, uppercase, lowercase, numbers, symbols);
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
    strength,
    setStrength,
    generatePassword,
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
