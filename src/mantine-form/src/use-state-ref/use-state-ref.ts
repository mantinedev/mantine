import React, { useRef, useState } from 'react';

export function useStateRef<T>(
  value: T
): [T, React.Dispatch<React.SetStateAction<T>>, React.MutableRefObject<T>] {
  const [state, setState] = useState(value);
  const ref = useRef(state);
  ref.current = state;

  return [state, setState, ref];
}
