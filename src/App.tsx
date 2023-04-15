import React from "react";
import CopyPNG from "./img/copy.png";
import RefreshPNG from "./img/refresh.png";
import "./App.scss";
import Title from "./modules/Title";
import CharacterLength from "./modules/CharacterLength";
import Includes from "./modules/Includes";
import Strenght from "./modules/Strenght";
import Input from "./modules/Input";
import Copy from "./modules/Copy";

function App() {
  return (
    <div className="password-generator">
      <Title name="Password generator" />
      <CharacterLength />
      <Includes />
      <Strenght />
      <Input img={RefreshPNG} />
      <Copy img={CopyPNG} />
    </div>
  );
}

export default App;
