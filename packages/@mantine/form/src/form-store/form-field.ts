export const FORM_FIELD = Symbol.for('mantine-form-field');

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

export function setFormField<Handler extends (...args: any[]) => any>(
  handler: Handler,
  field: FormField
): Handler {
  (handler as any)[FORM_FIELD] = field;
  return handler;
}

export function getFormField<Value = any>(handler: unknown): FormField<Value> | null {
  if (typeof handler !== 'function') {
    return null;
  }

  return (handler as any)[FORM_FIELD] || null;
}

interface FormFieldListeners<Value> {
  field: FormField<Value>;
  hasValueListeners: () => boolean;
  notifyValue: () => void;
  notifyExternalWrite: () => void;
}

export function createFormField<Value = any>(
  path: string,
  getSnapshot: () => Value
): FormFieldListeners<Value> {
  const valueListeners = new Set<() => void>();
  const writeListeners = new Set<(value: Value) => void>();

  return {
    field: {
      path,
      getSnapshot,
      subscribe: (listener) => {
        valueListeners.add(listener);
        return () => valueListeners.delete(listener);
      },
      subscribeExternalWrite: (listener) => {
        writeListeners.add(listener);
        return () => writeListeners.delete(listener);
      },
    },
    hasValueListeners: () => valueListeners.size > 0,
    notifyValue: () => valueListeners.forEach((listener) => listener()),
    notifyExternalWrite: () => {
      const value = getSnapshot();
      writeListeners.forEach((listener) => listener(value));
    },
  };
}
