import { useEffect, useRef, useSyncExternalStore } from 'react';

const FORM_FIELD = Symbol.for('mantine-form-field');

export interface FormField<Value = any> {
  /** Path of the field in form values */
  path: string;

  /** Subscribes to field value changes, returns unsubscribe function */
  subscribe: (listener: () => void) => () => void;

  /** Returns current field value */
  getSnapshot: () => Value;

  /** Subscribes to field value writes that come from the form, not from the input, returns unsubscribe function */
  subscribeExternalWrite: (listener: (value: Value) => void) => () => void;
}

export interface UseFormFieldOptions<Value = any> {
  /** If set, the component is subscribed to the field value and must render the returned `value` instead of the `value` prop, `true` by default */
  subscribe?: boolean;

  /** Called with the field value when the form writes it with `form.setFieldValue`, `form.setValues`, `form.reset`, `form.resetField`, `form.initialize` or list handlers. Not called for changes reported by the component itself. Must not call `onChange`. */
  onExternalWrite?: (value: Value) => void;
}

export interface UseFormFieldReturnValue<Value = any> {
  /** `true` if the handler was returned by `form.getInputProps` or `field.getInputProps`, handlers returned by `useField` for `type: 'radio'` are not bound */
  bound: boolean;

  /** `true` if the component is subscribed to the field value and must render `value` */
  subscribed: boolean;

  /** Path of the field in form values, `null` if the component is not bound */
  path: string | null;

  /** Current field value, `undefined` if the component is not subscribed */
  value: Value | undefined;
}

const noopSubscribe = () => () => {};
const noopSnapshot = () => undefined;

export function getFormField<Value = any>(handler: unknown): FormField<Value> | null {
  if (typeof handler !== 'function') {
    return null;
  }

  return (handler as any)[FORM_FIELD] || null;
}

export function useFormFieldValue<Value = any>(
  handler: unknown,
  subscribe = true
): UseFormFieldReturnValue<Value> {
  const field = getFormField<Value>(handler);
  const subscribed = !!field && subscribe;

  const value = useSyncExternalStore<Value | undefined>(
    subscribed ? field.subscribe : noopSubscribe,
    subscribed ? field.getSnapshot : noopSnapshot,
    subscribed ? field.getSnapshot : noopSnapshot
  );

  return { bound: !!field, subscribed, path: field ? field.path : null, value };
}

export function useFormField<Value = any>(
  onChange: unknown,
  { subscribe = true, onExternalWrite }: UseFormFieldOptions<Value> = {}
): UseFormFieldReturnValue<Value> {
  const result = useFormFieldValue<Value>(onChange, subscribe);
  const field = getFormField<Value>(onChange);
  const onExternalWriteRef = useRef(onExternalWrite);
  const hasExternalWrite = typeof onExternalWrite === 'function';

  useEffect(() => {
    onExternalWriteRef.current = onExternalWrite;
  });

  useEffect(() => {
    if (!field || !hasExternalWrite) {
      return undefined;
    }

    return field.subscribeExternalWrite((external) => onExternalWriteRef.current?.(external));
  }, [field, hasExternalWrite]);

  return result;
}

export namespace useFormField {
  export type Options<Value = any> = UseFormFieldOptions<Value>;
  export type ReturnValue<Value = any> = UseFormFieldReturnValue<Value>;
}
