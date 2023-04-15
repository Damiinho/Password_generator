import { useState } from "react";
import CopyPNG from "./img/copy.png";
import RefreshPNG from "./img/refresh.png";
import "./App.scss";
import Title from "./modules/Title";
import CharacterLength from "./modules/CharacterLength";
import Includes from "./modules/Includes";
import Strenght from "./modules/Strenght";
import Input from "./modules/Input";
import Copy from "./modules/Copy";
import { AppContext } from "./contexts/AppContext";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [length, setLength] = useState<number>(0);

  const providerValue = { counter, setCounter, length, setLength };

  return (
    <AppContext.Provider value={providerValue}>
      <div className="password-generator">
        <Title name="Password generator" />
        <CharacterLength />
        <Includes />
        <Strenght />
        <Input img={RefreshPNG} />
        <Copy img={CopyPNG} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
