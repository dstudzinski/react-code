import React, {useState} from 'react';
import {usePrevious} from "./hooks/usePrevious";

function Counter() {
  const [counter, setCounter] = useState(0);
  const previousValue = usePrevious(counter);

  // hooki obowiązuje ta sama zasada co setState - gdy bazują na aktualnej wartości musi być użyty zapis z funkcją
  const handleClick = () => {
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
  };

  return (
    <React.Fragment>
      <div>Counter: {counter}, previous counter: {previousValue}</div>
      <button onClick={handleClick}>Increment</button>
    </React.Fragment>
  )
}

export default Counter;
