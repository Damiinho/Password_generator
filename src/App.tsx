import React from "react";
import CopyPNG from "./img/copy.png";
import RefreshPNG from "./img/refresh.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="password-generator">
        <div className="password-generator__title">Password Generator</div>
        <div className="password-generator__character-length-box">
          <div className="password-generator__character-length-box__title">
            Character Lengh
          </div>
          <div className="password-generator__character-length-box__number">
            1
          </div>
          <div className="password-generator__character-length-box__slider">
            <input
              type="range"
              id="length"
              name="length"
              min="4"
              max="16"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="password-generator__includes">
          <label>
            <input type="checkbox"></input>
            <p>Include Uppercase Letter</p>
          </label>
          <label>
            <input type="checkbox"></input>
            <p>Include Lowercase Letter</p>
          </label>
          <label>
            <input type="checkbox"></input>
            <p>Include Numers</p>
          </label>
          <label>
            <input type="checkbox"></input>
            <p>Include Symbols</p>
          </label>
        </div>
        <div className="password-generator__strenght">
          <div className="password-generator__strenght__title">Strenght</div>
          <div className="password-generator__strenght__description">
            Low strength password
          </div>
          <div className="password-generator__strenght__bar">
            <div className="password-generator__strenght__bar-level low active"></div>
            <div className="password-generator__strenght__bar-level medium"></div>
            <div className="password-generator__strenght__bar-level average"></div>
            <div className="password-generator__strenght__bar-level high"></div>
          </div>
        </div>
        <div className="password-generator__input">
          <label>
            <input className="" type="text"></input>
            <img src={RefreshPNG} className="refresh" alt="Refresh"></img>
          </label>
        </div>
        <div className="password-generator__copy-password">
          <button className="">
            <img src={CopyPNG} className="copy" alt="copy"></img>
            <p>Copy password</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
