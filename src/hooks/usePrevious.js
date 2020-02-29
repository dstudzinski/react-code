import {useEffect, useRef} from "react";

export function usePrevious(value) {
  const ref = useRef();
  console.log('usePrevious start', ref.current, value);
  useEffect(() => {
    console.log('use effect in usePrevious', value);
    ref.current = value;
  });
  console.log('usePrevious end', ref.current, value);
  return ref.current;
}