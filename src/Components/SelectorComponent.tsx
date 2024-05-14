import { useState } from "react";

const defaultOptions = [
  { label: "Item1" },
  { label: "Item2" },
  { label: "Item3" },
  { label: "Item4" },
];

const DropDownComponent = () => {
  const [clickDropDown, setClickDropDown] = useState(false);

  return (
    <div className="container">
      {clickDropDown ? (
        <>
          <input type="text" className="input-field" />
          <div className="selector-content">
            {defaultOptions.map((item, i) => (
              <div className="selector-option" key={i}>
                {item.label}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          className="select-element"
          onClick={() => setClickDropDown(true)}
        ></div>
      )}
    </div>
  );
};

export default DropDownComponent;
