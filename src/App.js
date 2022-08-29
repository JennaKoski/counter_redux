import "./App.css";
import Button from "./components/Button";
import Circle from "./components/Circle";

import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import {
  increment,
  incrementByAmount,
  reset,
  decrement,
  decrementByAmount,
} from "./features/counter/CounterSlice";

const App = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <div className="cirleContainer">
        <Circle count={count} />
      </div>
      <div className="buttonContainer">
        <Button onClick={() => dispatch(decrementByAmount(5))}>
          Decrease 5
        </Button>
        <Button onClick={() => dispatch(decrement())}>Decrease 1</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        <Button onClick={() => dispatch(increment())}>Increase 1</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>
          Increase 5
        </Button>
      </div>
    </div>
  );
};

export default App;
