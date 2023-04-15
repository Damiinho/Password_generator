const Strenght = () => {
  return (
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
  );
};

export default Strenght;
