import { useCallback, useMemo, useRef, useState } from 'react';
import { getInputOnChange } from './get-input-on-change';
import { GetInputPropsType } from './types';
import { shouldValidateOnChange } from './validate';

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
  const mode = options.mode || 'controlled';
  const [valueState, setValueState] = useState(options.initialValue);
  const valueRef = useRef(valueState);
  const [key, setKey] = useState(0);
  const [error, setError] = useState<React.ReactNode>(options.initialError || null);
  const touched = useRef(options.initialTouched || false);
  const [isValidating, setIsValidating] = useState(false);
  const errorResolver: UseFieldErrorResolver = useMemo(
    () => options.resolveValidationError || ((err) => err as React.ReactNode),
    [options.resolveValidationError]
  );

  const setValue = useCallback(
    (
      value: T,
      {
        updateKey = mode === 'uncontrolled',
        updateState = mode === 'controlled',
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

  const getInputProps = ({ type = 'input', withError = true, withFocus = true } = {}) => {
    const onChange = getInputOnChange<T>((val) => setValue(val as any));

    const payload: Record<string, any> = { onChange };

    if (withError) {
      payload.error = error;
    }

    if (type === 'checkbox') {
      payload[mode === 'controlled' ? 'checked' : 'defaultChecked'] = valueRef.current;
    } else {
      payload[mode === 'controlled' ? 'value' : 'defaultValue'] = valueRef.current;
    }

    if (withFocus) {
      payload.onFocus = () => {
        touched.current = true;
      };
      payload.onBlur = async () => {
        if (shouldValidateOnChange('', !!options.validateOnBlur)) {
          const validationResults = await validate();
          setError(validationResults || null);
        }
      };
    }

    return payload;
  };

  return {
    key,
    getValue,
    setValue,
    reset,
    getInputProps,

    isValidating,
    validate,

    error,
    setError,

    isTouched,
    isDirty,
  };
}
