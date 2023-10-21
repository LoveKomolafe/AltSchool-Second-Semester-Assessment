// The Counter component is a simple counter app that uses the useCounter hook to manage the state of the counter.
import { useCounter } from "../Hooks/useCounter";
import { Link } from "react-router-dom";

export default function CounterApp() {
  // Importing the useCounter hooks
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  return (
    <div className="counter">
      <h1>Counter App</h1>  
      <h2>{count}</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <br />
      <br />
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
        <br />
        <br />
      <Link to="/">Back to Previous Page</Link>
    </div>
  );
}