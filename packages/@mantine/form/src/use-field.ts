import { useCallback, useMemo, useRef, useState } from 'react';
import { getInputOnChange } from './get-input-on-change';
import { GetInputPropsType } from './types';
import { shouldValidateOnChange } from './validate';

type UseFieldErrorResolver = (error: unknown) => React.ReactNode;

export interface UseFieldInput<T> {
  mode?: 'controlled' | 'uncontrolled';
  initialValue: T;
  initialTouched?: boolean;
  initialError?: React.ReactNode;
  onValueChange?: (value: T) => void;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  clearErrorOnChange?: boolean;
  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;
  type?: GetInputPropsType;
  resolveValidationError?: UseFieldErrorResolver;
}

interface SetValueOptions {
  updateState?: boolean;
  updateKey?: boolean;
}

export interface UseFieldReturnType<T> {
  key: number;
  getValue: () => T;
  setValue: (value: T, options?: SetValueOptions) => void;
  reset: () => void;
  getInputProps: (options?: {
    type?: GetInputPropsType;
    withError?: boolean;
    withFocus?: boolean;
  }) => Record<string, any>;
  isValidating: boolean;
  validate: () => Promise<React.ReactNode | void>;
  error: React.ReactNode;
  setError: (error: React.ReactNode) => void;
  isTouched: () => boolean;
  isDirty: () => boolean;
}

export function useField<T>({
  mode = 'controlled',
  clearErrorOnChange = true,
  initialValue,
  initialError = null,
  initialTouched = false,
  onValueChange,
  validateOnChange = false,
  validateOnBlur = false,
  validate,
  resolveValidationError,
  type = 'input',
}: UseFieldInput<T>) {
  const [valueState, setValueState] = useState(initialValue);
  const valueRef = useRef(valueState);
  const [key, setKey] = useState(0);
  const [error, setError] = useState<React.ReactNode>(initialError || null);
  const touched = useRef(initialTouched || false);
  const [isValidating, setIsValidating] = useState(false);
  const errorResolver: UseFieldErrorResolver = useMemo(
    () => resolveValidationError || ((err) => err as React.ReactNode),
    [resolveValidationError]
  );

  const setValue = useCallback(
    (
      value: T,
      {
        updateKey = mode === 'uncontrolled',
        updateState = mode === 'controlled',
      }: SetValueOptions = {}
    ) => {
      if (valueRef.current === value) {
        return;
      }

      valueRef.current = value;

      onValueChange?.(value);

      if (clearErrorOnChange && error !== null) {
        setError(null);
      }

      if (updateState) {
        setValueState(value);
      }

      if (updateKey) {
        setKey((currentKey) => currentKey + 1);
      }

      if (validateOnChange) {
        _validate();
      }
    },
    [error, clearErrorOnChange]
  );

  const reset = useCallback(() => {
    setValue(initialValue);
    setError(null);
  }, [initialValue]);

  const getValue = useCallback(() => valueRef.current, []);

  const isTouched = useCallback(() => touched.current, []);

  const isDirty = useCallback(() => valueRef.current !== initialValue, [initialValue]);

  const _validate = useCallback(async () => {
    const validationResult = validate?.(valueRef.current);

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

  const getInputProps = ({ withError = true, withFocus = true } = {}) => {
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

      payload.onBlur = () => {
        if (shouldValidateOnChange('', !!validateOnBlur)) {
          _validate();
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
    validate: _validate,

    error,
    setError,

    isTouched,
    isDirty,
  };
}
