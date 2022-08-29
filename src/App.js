import "./App.css";
import Button from "./components/Button";
import Circle from "./components/Circle";

import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="app">
      <div className="cirleContainer">
        <Circle count={count} />
      </div>
      <div className="buttonContainer">
        <Button>Decrease 5</Button>
        <Button>Decrease 1</Button>
        <Button>Reset</Button>
        <Button>Increase 1</Button>
        <Button>Increase 5</Button>
      </div>
    </div>
  );
};

export default App;
