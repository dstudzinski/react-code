import React, {useEffect, useRef} from 'react';

function Lifecycle() {
  const callNo = useRef(1);

  const effectDependency = callNo.current > 2 ? 2 : callNo.current;

  console.log('Lifecycle render', callNo.current);

  useEffect(() => {
    const currentCall = callNo.current;

    if (currentCall === 1) {
      console.log('first call', currentCall);
    } else {
      console.log('update', currentCall)
    }

    callNo.current++;

    return () => {
      console.log('cleanup', currentCall);
    }
  }, [effectDependency]);

  return (
    <span>Lifecycle</span>
  );
}

export default Lifecycle;
