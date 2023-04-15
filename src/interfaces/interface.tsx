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
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
}
