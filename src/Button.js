import React from 'react';

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>{props.children}</button>
  )
}

Button.displayName = 'Button';
Button.defaultProps = {
  children: 'Click me!',
};

export {
  Button
}
