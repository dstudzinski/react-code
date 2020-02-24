import React from 'react';

function Counter(props) {
  return (
    <div>
      Counter: {props.counter}<br/>
      <button onClick={props.onClick}>Add</button>
    </div>
  )
}

export {
  Counter
}