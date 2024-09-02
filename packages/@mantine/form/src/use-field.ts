import { useCallback, useMemo, useRef, useState } from 'react';
import { getInputOnChange } from './get-input-on-change';
import { FormMode, GetInputPropsType } from './types';
import { shouldValidateOnChange } from './validate';

type UseFieldErrorResolver = (error: unknown) => React.ReactNode;

export interface UseFieldInput<
  T,
  FieldType extends GetInputPropsType = 'input',
  Mode extends FormMode = 'controlled',
> {
  /** Field mode, controlled by default */
  mode?: Mode;

  /** Initial field value */
  initialValue: T;

  /** Initial touched value */
  initialTouched?: boolean;

  /** Initial field error message */
  initialError?: React.ReactNode;

  /** Called with updated value when the field value changes */
  onValueChange?: (value: T) => void;

  /** Determines whether the field should be validated when value changes, false by default */
  validateOnChange?: boolean;

  /** Determines whether the field should be validated when it loses focus, false by default */
  validateOnBlur?: boolean;

  /** Determines whether the field should clear error message when value changes, true by default */
  clearErrorOnChange?: boolean;

  /** A function to validate field value, can be sync or async */
  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;

  /** Field type, input by default */
  type?: FieldType;

  /** A function to resolve validation error from the result returned from validate function, should return react node */
  resolveValidationError?: UseFieldErrorResolver;
}

interface SetValueOptions {
  updateState?: boolean;
  updateKey?: boolean;
}

interface GetInputPropsOptions {
  withError?: boolean;
  withFocus?: boolean;
}

interface GetInputPropsSharedReturn {
  error?: React.ReactNode;
  onFocus?: () => void;
  onBlur: () => void;
  onChange: (value: any) => void;
}

type GetInputPropsTypeValue<
  T,
  FieldType extends GetInputPropsType,
  Mode extends FormMode,
> = FieldType extends 'checkbox'
  ? Mode extends 'controlled'
    ? { checked: boolean }
    : { defaultChecked: boolean }
  : Mode extends 'controlled'
    ? { value: T }
    : { defaultValue: T };

type GetInputPropsReturnType<
  T,
  FieldType extends GetInputPropsType,
  Mode extends FormMode,
> = GetInputPropsSharedReturn & GetInputPropsTypeValue<T, FieldType, Mode>;

export interface UseFieldReturnType<
  T,
  FieldType extends GetInputPropsType = 'input',
  Mode extends FormMode = 'controlled',
> {
  /** Returns props to pass to the input element */
  getInputProps: (options?: GetInputPropsOptions) => GetInputPropsReturnType<T, FieldType, Mode>;

  /** Returns current input value */
  getValue: () => T;

  /** Sets input value to the given value */
  setValue: (value: T) => void;

  /** Resets field value to initial state, sets touched state to false, sets error to null */
  reset: () => void;

  /** Validates current input value when called */
  validate: () => Promise<React.ReactNode | void>;

  /** Set to true when async validate function is called, stays true until the returned promise resolves */
  isValidating: boolean;

  /** Current error message */
  error: React.ReactNode;

  /** Sets error message to the given react node */
  setError: (error: React.ReactNode) => void;

  /** Returns true if the input has been focused at least once */
  isTouched: () => boolean;

  /** Returns true if input value is different from the initial value */
  isDirty: () => boolean;

  /** Resets touched state to false */
  resetTouched: () => void;

  /** Key that should be added to the input when mode is uncontrolled */
  key: number;
}

export function useField<
  T,
  Mode extends FormMode = 'controlled',
  FieldType extends GetInputPropsType = 'input',
>({
  mode = 'controlled' as Mode,
  clearErrorOnChange = true,
  initialValue,
  initialError = null,
  initialTouched = false,
  onValueChange,
  validateOnChange = false,
  validateOnBlur = false,
  validate,
  resolveValidationError,
  type = 'input' as FieldType,
}: UseFieldInput<T, FieldType, Mode>): UseFieldReturnType<T, FieldType, Mode> {
  const [valueState, setValueState] = useState(initialValue);
  const valueRef = useRef(valueState);
  const [key, setKey] = useState(0);
  const [error, setError] = useState<React.ReactNode>(initialError || null);
  const touchedRef = useRef(initialTouched || false);
  const [, setTouchedState] = useState(touchedRef.current);
  const [isValidating, setIsValidating] = useState(false);
  const errorResolver: UseFieldErrorResolver = useMemo(
    () => resolveValidationError || ((err) => err as React.ReactNode),
    [resolveValidationError]
  );

  const setTouched = useCallback((val: boolean, { updateState = mode === 'controlled' } = {}) => {
    touchedRef.current = val;
    updateState && setTouchedState(val);
  }, []);

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
    setTouched(false);
  }, [initialValue]);

  const getValue = useCallback(() => valueRef.current, []);

  const isTouched = useCallback(() => touchedRef.current, []);

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
    const onChange = getInputOnChange<T>((val) => setValue(val as any, { updateKey: false }));

    const payload: any = { onChange };

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
        setTouched(true);
      };

      payload.onBlur = () => {
        if (shouldValidateOnChange('', !!validateOnBlur)) {
          _validate();
        }
      };
    }

    return payload;
  };

  const resetTouched = useCallback(() => setTouched(false), []);

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
    resetTouched,
  };
}
