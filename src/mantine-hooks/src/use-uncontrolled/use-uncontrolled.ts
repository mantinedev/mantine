import { useEffect, useRef, useState } from 'react';

type UncontrolledMode = 'initial' | 'controlled' | 'uncontrolled';

export interface UncontrolledOptions<T> {
  value: T;
  defaultValue: T;
  finalValue: T;
  onChange(value: T): void;
  onValueUpdate?(value: T): void;
  rule: (value: T) => boolean;
}

export function useUncontrolled<T>({
  value,
  defaultValue,
  finalValue,
  rule,
  onChange,
  onValueUpdate,
}: UncontrolledOptions<T>) {
  // determine, whether new props indicate controlled state
  const shouldBeControlled = rule(value);

  // initialize state
  const modeRef = useRef<UncontrolledMode>('initial');
  const initialValue = rule(defaultValue) ? defaultValue : finalValue;
  const [uncontrolledValue, setUncontrolledValue] = useState(initialValue);

  // compute effective value
  let effectiveValue = shouldBeControlled ? value : uncontrolledValue;

  if (!shouldBeControlled && modeRef.current === 'controlled') {
    // We are transitioning from controlled to uncontrolled
    // this transition is special as it happens when clearing out
    // the input using "invalid" value (typically null or undefined).
    //
    // Since the value is invalid, doing nothing would mean just
    // transitioning to uncontrolled state and using whatever value
    // it currently holds which is likely not the bavior
    // user expects, so lets change the state to finalValue.
    //
    // The value will be propagated to internal state by useEffect below.

    effectiveValue = finalValue;
  }
  modeRef.current = shouldBeControlled ? 'controlled' : 'uncontrolled';
  const mode = modeRef.current;

  const handleChange = (nextValue: T) => {
    typeof onChange === 'function' && onChange(nextValue);

    // Controlled input only triggers onChange event and expects
    // the controller to propagate new value back.
    if (mode === 'uncontrolled') {
      setUncontrolledValue(nextValue);
    }
  };

  useEffect(() => {
    if (mode === 'uncontrolled') {
      setUncontrolledValue(effectiveValue);
    }
    typeof onValueUpdate === 'function' && onValueUpdate(effectiveValue);
  }, [mode, effectiveValue]);

  return [effectiveValue, handleChange, modeRef.current] as const;
}
