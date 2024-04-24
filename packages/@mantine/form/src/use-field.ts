import { useCallback, useMemo, useRef, useState } from 'react';
import { GetInputPropsType } from './types';

type UseFieldErrorResolver = (error: unknown) => React.ReactNode;

interface UseFieldInput<T> {
  mode?: 'controlled' | 'uncontrolled';
  initialValue: T;
  initialTouched?: boolean;
  initialDirty?: boolean;
  initialError?: React.ReactNode;
  onValueChange?: (value: T) => void;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;
  type?: GetInputPropsType;
  resolveValidationError?: UseFieldErrorResolver;
}

interface SetValueOptions {
  updateState?: boolean;
  updateKey?: boolean;
}

export function useField<T>(options: UseFieldInput<T>) {
  const [valueState, setValueState] = useState(options.initialValue);
  const valueRef = useRef(valueState);
  const [key, setKey] = useState(0);
  const [error, setError] = useState(options.initialError);
  const touched = useRef(options.initialTouched);
  const [isValidating, setIsValidating] = useState(false);
  const errorResolver: UseFieldErrorResolver = useMemo(
    () => options.resolveValidationError || ((err) => err as React.ReactNode),
    [options.resolveValidationError]
  );

  const setValue = useCallback(
    (
      value: T,
      {
        updateKey = options.mode === 'uncontrolled',
        updateState = options.mode === 'controlled',
      }: SetValueOptions = {}
    ) => {
      valueRef.current = value;

      if (updateState) {
        setValueState(value);
      }

      if (updateKey) {
        setKey((currentKey) => currentKey + 1);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setValue(options.initialValue);
    setError(null);
  }, [options.initialValue]);

  const getValue = useCallback(() => valueRef.current, []);

  const isTouched = useCallback(() => touched.current, []);

  const isDirty = useCallback(
    () => valueRef.current !== options.initialValue,
    [options.initialValue]
  );

  const validate = useCallback(async () => {
    const validationResult = options.validate?.(valueRef.current);

    if (validationResult instanceof Promise) {
      setIsValidating(true);
      try {
        const result = await validationResult;
        setIsValidating(false);
        setError(result);
      } catch (err) {
        setIsValidating(false);
        const resolvedError = errorResolver(err);
        setError(resolvedError);
        return resolvedError;
      }
    } else {
      setError(validationResult);
      return validationResult;
    }
  }, []);

  return {
    key,
    getValue,
    setValue,
    reset,

    isValidating,
    validate,

    error,
    setError,

    isTouched,
    isDirty,
  };
}
