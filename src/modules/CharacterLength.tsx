const CharacterLength = () => {
  return (
    <div className="password-generator__character-length-box">
      <div className="password-generator__character-length-box__title">
        Character Lengh
      </div>
      <div className="password-generator__character-length-box__number">1</div>
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
  );
};

export default CharacterLength;
