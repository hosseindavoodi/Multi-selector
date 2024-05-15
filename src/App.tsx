import DropDownComponent from "./Components/SelectorComponent";
import "./App.scss";

const defaultOptions = [
  { option: "Item1", optionIsSelected: false },
  { option: "Item2", optionIsSelected: false },
  { option: "Item3", optionIsSelected: false },
  { option: "Item4", optionIsSelected: false },
];

function App() {
  return (
    <>
      <DropDownComponent defaultOptions={defaultOptions} />
    </>
  );
}

export default App;
