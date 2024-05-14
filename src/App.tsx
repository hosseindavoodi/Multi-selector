import DropDownComponent from "./Components/SelectorComponent";
import "./App.scss";

const defaultOptions = [
  { option: "Item1" },
  { option: "Item2" },
  { option: "Item3" },
  { option: "Item4" },
];

function App() {
  return (
    <>
      <DropDownComponent defaultOptions={defaultOptions} />
    </>
  );
}

export default App;
