import React from "react";

interface SeacrhbarPropType {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Seachbar: React.FC<SeacrhbarPropType> = ({ onChange }) => {
  return (
    <div>
      <input
        id="search"
        placeholder="Seacrh Products here.."
        onChange={onChange}
      />
    </div>
  );
};

export default Seachbar;
