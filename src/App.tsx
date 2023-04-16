import CopyPNG from "./img/copy.png";
import RefreshPNG from "./img/refresh.png";
import "./App.scss";
import Title from "./modules/Title";
import CharacterLength from "./modules/CharacterLength";
import Includes from "./modules/Includes";
import Strength from "./modules/Strength";
import Input from "./modules/Input";
import Copy from "./modules/Copy";
import AppProvider from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="password-generator">
        <Title name="Password generator" />
        <CharacterLength />
        <Includes />
        <Strength />
        <Input img={RefreshPNG} />
        <Copy img={CopyPNG} />
      </div>
    </AppProvider>
  );
}

export default App;
