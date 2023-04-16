export interface TitleInterface {
  name: string;
}
export interface InputInterface {
  img: string;
}
export interface CopyInterface {
  img: string;
  click?: () => void;
}
export interface AppContextInterface {
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  uppercase: boolean;
  setUppercase: React.Dispatch<React.SetStateAction<boolean>>;
  lowercase: boolean;
  setLowercase: React.Dispatch<React.SetStateAction<boolean>>;
  numbers: boolean;
  setNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  symbols: boolean;
  setSymbols: React.Dispatch<React.SetStateAction<boolean>>;
  inputPassword: string;
  setInputPassword: React.Dispatch<React.SetStateAction<string>>;
  strength: number;
  setStrength: React.Dispatch<React.SetStateAction<number>>;
  generatePassword: (
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean
  ) => void;
}
