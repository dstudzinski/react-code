import React, {useState} from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  // hooki obowiązuje ta sama zasada co setState - gdy bazują na aktualnej wartości musi być użyty zapis z funkcją
  const handleClick = () => {
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
  };

  return (
    <React.Fragment>
      <div>Counter: {counter}</div>
      <button onClick={handleClick}>Increment</button>
    </React.Fragment>
  )
}

export default Counter;
