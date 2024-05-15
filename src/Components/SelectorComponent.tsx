import { useState, useEffect, useRef, KeyboardEvent } from "react";
import clsx from "clsx";

type defaultOptionsProps = {
  option: string;
  optionIsSelected: boolean;
};

interface DropDownComponentProps {
  defaultOptions: Array<defaultOptionsProps>;
}

const DropDownComponent = ({ defaultOptions }: DropDownComponentProps) => {
  const [clickDropDown, setClickDropDown] = useState(false);
  const [selectOptions, setSelectOptions] = useState(defaultOptions);
  const [inputTextValue, setInputTextValue] = useState("");

  const containerRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  const handleUserInter = (index: KeyboardEvent) => {
    if (index.key === "Enter") {
      selectOptions.unshift({
        option: inputTextValue,
        optionIsSelected: false,
      });
      setSelectOptions(selectOptions);
      setInputTextValue("");
    }
  };

  useEffect(() => {
    if (clickDropDown && textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [clickDropDown]);

  useEffect(() => {
    const isClickedOut = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setClickDropDown(false);
      }
    };

    document.addEventListener("mousedown", isClickedOut);
    return () => {
      document.removeEventListener("mousedown", isClickedOut);
    };
  }, [containerRef]);

  const handleClickOption = (param: number) => {
    setClickDropDown(false);

    const editedOptions = selectOptions.map((item, index) => {
      if (index === param) {
        return { ...item, optionIsSelected: true };
      } else {
        return { ...item, optionIsSelected: false };
      }
    });
    setSelectOptions(editedOptions);
  };

  return (
    <div className="container" ref={containerRef}>
      {clickDropDown ? (
        <div>
          <input
            type="text"
            ref={textInputRef}
            value={inputTextValue}
            onKeyDown={handleUserInter}
            className="input-field"
            onChange={(e) => setInputTextValue(e.target.value)}
          />
          <div className="selector-content">
            {selectOptions.map((item, index) => (
              <div
                onClick={() => handleClickOption(index)}
                className={clsx(
                  "selector-option",
                  item.optionIsSelected && "option-is-selected"
                )}
                key={index}
              >
                {item.option}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="select-element" onClick={() => setClickDropDown(true)}>
          {selectOptions.find((item) => item.optionIsSelected)?.option ||
            "Select option"}
          <img alt="arrow" src="arrow.svg" width={16} />
        </div>
      )}
    </div>
  );
};

export default DropDownComponent;
