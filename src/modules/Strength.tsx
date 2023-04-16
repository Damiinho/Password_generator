import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Strength = () => {
  const { strength, inputPassword } = useContext(AppContext);

  let strengthName = "";
  let lowClass = "";
  let mediumClass = "";
  let averageClass = "";
  let highClass = "";
  const setCategory = () => {
    if (inputPassword !== "select option") {
      if (strength === 1) {
        strengthName = "Low";
        lowClass = "red";
        mediumClass = "";
        averageClass = "";
        highClass = "";
      } else if (strength === 2) {
        strengthName = "Low";
        lowClass = "red";
        mediumClass = "red";
        averageClass = "";
        highClass = "";
      } else if (strength === 3) {
        strengthName = "Average";
        lowClass = "yellow";
        mediumClass = "yellow";
        averageClass = "yellow";
        highClass = "";
      } else if (strength === 4) {
        strengthName = "High";
        lowClass = "green";
        mediumClass = "green";
        averageClass = "green";
        highClass = "green";
      } else {
        strengthName = "";
      }
    } else {
      strengthName = "";
      lowClass = "";
      mediumClass = "";
      averageClass = "";
      highClass = "";
    }
  };
  setCategory();

  return (
    <div className="password-generator__strength">
      <div className="password-generator__strength__title">Strength</div>
      <div className="password-generator__strength__description">
        {inputPassword === "select option"
          ? null
          : `${strengthName} password strength`}
      </div>
      <div className="password-generator__strength__bar">
        <div
          className={`password-generator__strength__bar-level low ${lowClass}`}
        ></div>
        <div
          className={`password-generator__strength__bar-level medium ${mediumClass}`}
        ></div>
        <div
          className={`password-generator__strength__bar-level average ${averageClass}`}
        ></div>
        <div
          className={`password-generator__strength__bar-level high ${highClass}`}
        ></div>
      </div>
    </div>
  );
};

export default Strength;
