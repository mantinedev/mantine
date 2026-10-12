import isEqual from 'fast-deep-equal';
import { getInputOnChange } from '../get-input-on-change';
import { getInputValueProps } from '../get-input-value-props';
import { getStatus } from '../get-status';
import { changeErrorIndices, clearChildKeys, reorderErrors } from '../lists';
import {
  getDataPath,
  getPath,
  insertPath,
  isChildPath,
  isSameOrChildPath,
  removePath,
  reorderPath,
  replacePath,
  setPath,
} from '../paths';
import {
  FormErrors,
  FormFieldSubscriber,
  FormFieldValidationResult,
  FormStatus,
  FormValidationResult,
  GetInputPropsOptions,
  ReorderPayload,
  UseFormInput,
} from '../types';
import {
  defaultResolveValidationError,
  filterErrors,
  getRuleForPath,
  shouldValidateOnChange,
  validateFieldValue,
  validateValues,
} from '../validate';
import { createFormField, setFormField } from './form-field';

const identity = (values: unknown) => values;

function isRelatedPath(a: string, b: string) {
  return isSameOrChildPath(a, b) || isSameOrChildPath(b, a);
}

function resolveOptions(input: UseFormInput<any, any>) {
  return {
    name: input.name,
    mode: input.mode ?? 'uncontrolled',
    clearInputErrorOnChange: input.clearInputErrorOnChange ?? true,
    validateInputOnChange: input.validateInputOnChange ?? false,
    validateInputOnBlur: input.validateInputOnBlur ?? false,
    onValuesChange: input.onValuesChange,
    transformValues: input.transformValues ?? identity,
    enhanceGetInputProps: input.enhanceGetInputProps,
    rules: input.validate,
    onSubmitPreventDefault: input.onSubmitPreventDefault ?? 'always',
    touchTrigger: input.touchTrigger ?? 'change',
    cascadeUpdates: input.cascadeUpdates ?? false,
    validateDebounce: input.validateDebounce ?? 0,
    resolveValidationError: input.resolveValidationError ?? defaultResolveValidationError,
  };
}

interface FieldBinding {
  onChange: (value: any) => void;
  rendered: boolean;
  hasValueListeners: () => boolean;
  notifyValue: () => void;
  notifyExternalWrite: () => void;
}

interface FieldEntry {
  input: FieldBinding;
  radios: Map<unknown, FieldBinding>;
  onFocus: () => void;
  onBlur: () => void;
}

type WriteSource = 'input' | 'form';

export function createFormStore(input: UseFormInput<any, any>) {
  let options = resolveOptions(input);
  let values: any = input.initialValues || {};
  let valuesSnapshot: any = values;
  let initialized = false;
  let errors: FormErrors = filterErrors(input.initialErrors || {});
  let touched: FormStatus = input.initialTouched || {};
  let dirty: FormStatus = input.initialDirty || {};
  let validatingFields: Record<string, boolean> = {};
  let formValidating = false;
  let submitting = false;
  let abortControllers: Record<string, AbortController> = {};
  let validateGeneration = 0;
  let version = 0;

  const timers: Record<string, ReturnType<typeof setTimeout>> = {};
  const listeners = new Set<() => void>();
  const statusListeners = new Set<() => void>();
  const watchers: Record<string, FormFieldSubscriber<any, any>[]> = {};
  const fields = new Map<string, FieldEntry>();

  const isControlled = () => options.mode === 'controlled';

  const render = () => {
    version += 1;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const notifyStatus = () => statusListeners.forEach((listener) => listener());

  const subscribeStatus = (listener: () => void) => {
    statusListeners.add(listener);
    return () => {
      statusListeners.delete(listener);
    };
  };

  const setOptions = (nextInput: UseFormInput<any, any>) => {
    options = resolveOptions(nextInput);
  };

  const destroy = () => {
    Object.values(timers).forEach(clearTimeout);
  };

  const forEachRelatedBinding = (
    path: string | null,
    callback: (binding: FieldBinding) => void
  ) => {
    fields.forEach((entry, fieldPath) => {
      if (path === null || isRelatedPath(fieldPath, path)) {
        callback(entry.input);
        entry.radios.forEach(callback);
      }
    });
  };

  const notifyFields = (path: string | null, source: WriteSource) => {
    forEachRelatedBinding(path, (binding) => {
      binding.notifyValue();
      source === 'form' && binding.notifyExternalWrite();
    });
  };

  const hasUnsubscribedField = (path: string) => {
    let result = false;
    forEachRelatedBinding(path, (binding) => {
      result = result || (binding.rendered && !binding.hasValueListeners());
    });
    return result;
  };

  const setErrors = (payload: FormErrors | ((current: FormErrors) => FormErrors)) => {
    errors = filterErrors(typeof payload === 'function' ? payload(errors) : payload);
    render();
  };

  const clearErrors = () => setErrors({});

  const clearFieldError = (path: unknown) => {
    if (errors[path as string] === undefined) {
      return;
    }

    setErrors((current) => {
      const result = { ...current };
      delete result[path as string];
      return result;
    });
  };

  const clearFieldErrorTree = (path: unknown | unknown[]) => {
    const roots = (Array.isArray(path) ? path : [path]).map(String);
    const keys = Object.keys(errors).filter((item) =>
      roots.some((root) => isSameOrChildPath(item, root))
    );

    if (keys.length === 0) {
      return;
    }

    setErrors((current) => {
      const result = { ...current };
      keys.forEach((item) => delete result[item]);
      return result;
    });
  };

  const setFieldError = (path: unknown, error: React.ReactNode) => {
    if (error == null || error === false) {
      clearFieldError(path);
    } else if (errors[path as string] !== error) {
      setErrors((current) => ({ ...current, [path as string]: error }));
    }
  };

  const setTouched = (payload: FormStatus | ((current: FormStatus) => FormStatus)) => {
    const resolved = typeof payload === 'function' ? payload(touched) : payload;
    const changed = resolved !== touched;
    touched = resolved;
    changed && isControlled() && render();
    changed && notifyStatus();
  };

  const setDirty = (payload: FormStatus | ((current: FormStatus) => FormStatus)) => {
    const resolved = typeof payload === 'function' ? payload(dirty) : payload;
    const changed = resolved !== dirty;
    dirty = resolved;
    changed && isControlled() && render();
    changed && notifyStatus();
  };

  const resetTouched = () => setTouched({});

  const resetDirty = (payload?: any) => {
    valuesSnapshot = payload ? { ...values, ...payload } : values;
    setDirty({});
  };

  const setFieldTouched = (path: unknown, value: boolean) => {
    setTouched((current) =>
      getStatus(current, path) === value ? current : { ...current, [path as string]: value }
    );
  };

  const setCalculatedFieldDirty = (path: unknown, value: unknown) => {
    const cleared = clearChildKeys(path as PropertyKey, dirty);
    cleared[path as string] = !isEqual(getPath(path, valuesSnapshot), value);
    setDirty(cleared);
  };

  const clearFieldDirty = (path: unknown) => {
    setDirty((current) => {
      if (typeof path !== 'string') {
        return current;
      }

      const result = clearChildKeys(path, current);
      delete result[path];
      return isEqual(result, current) ? current : result;
    });
  };

  const isTouched = (path?: unknown) => getStatus(touched, path);

  const isDirty = (path?: unknown) => {
    if (path) {
      const overriddenValue = getPath(path, dirty);
      if (typeof overriddenValue === 'boolean') {
        return overriddenValue;
      }

      return !isEqual(getPath(path, values), getPath(path, valuesSnapshot));
    }

    if (Object.keys(dirty).length > 0) {
      return getStatus(dirty);
    }

    return !isEqual(values, valuesSnapshot);
  };

  const setFieldValidating = (path: string, value: boolean) => {
    if (!!validatingFields[path] !== value) {
      validatingFields = { ...validatingFields, [path]: value };
      render();
    }
  };

  const setFormValidating = (value: boolean) => {
    if (formValidating !== value) {
      formValidating = value;
      render();
    }
  };

  const isValidating = (path?: unknown) => {
    if (path) {
      return !!validatingFields[path as string];
    }

    return formValidating || Object.values(validatingFields).some(Boolean);
  };

  const getAbortSignal = (path: string) => {
    abortControllers[path]?.abort();
    abortControllers[path] = new AbortController();
    return abortControllers[path].signal;
  };

  const clearValidating = () => {
    Object.values(timers).forEach(clearTimeout);
    validatingFields = {};
    formValidating = false;
    Object.values(abortControllers).forEach((controller) => controller.abort());
    abortControllers = {};
    render();
  };

  const subscribeWatch = (path: string, callback: FormFieldSubscriber<any, any>) => {
    watchers[path] = watchers[path] || [];
    watchers[path].push(callback);

    return () => {
      watchers[path] = watchers[path].filter((cb) => cb !== callback);
    };
  };

  const callWatchers = (path: string, previousValues: unknown) => {
    watchers[path]?.forEach((callback) =>
      callback({
        previousValue: getPath(path, previousValues) as any,
        value: getPath(path, values) as any,
        touched: isTouched(path),
        dirty: isDirty(path),
      })
    );
  };

  const notifyFieldWatchers = (path: string, previousValues: unknown) => {
    const watchedPaths = Object.keys(watchers).filter(
      (watchedPath) =>
        isSameOrChildPath(path, watchedPath) ||
        (options.cascadeUpdates && isChildPath(watchedPath, path))
    );

    callWatchers(path, previousValues);
    watchedPaths
      .filter((watchedPath) => watchedPath !== path)
      .forEach((watchedPath) => callWatchers(watchedPath, previousValues));
  };

  const notifyChangedWatchers = (previousValues: unknown) => {
    Object.keys(watchers).forEach((path) => {
      if (getPath(path, values) !== getPath(path, previousValues)) {
        callWatchers(path, previousValues);
      }
    });
  };

  const applyFieldValidationResult = (
    path: string,
    signal: AbortSignal,
    result: FormFieldValidationResult
  ) => {
    if (signal.aborted) {
      return { hasError: false, error: null };
    }

    if (result.hasError) {
      setFieldError(path, result.error);
    } else {
      clearFieldError(path);
    }

    return result;
  };

  const validateField = (path: unknown) => {
    const key = String(path);
    const signal = getAbortSignal(key);
    const result = validateFieldValue(
      path,
      options.rules,
      values,
      options.resolveValidationError,
      signal
    );

    if (result instanceof Promise) {
      setFieldValidating(key, true);
      return result
        .then((resolved) => applyFieldValidationResult(key, signal, resolved))
        .finally(() => {
          if (!signal.aborted) {
            setFieldValidating(key, false);
          }
        });
    }

    return applyFieldValidationResult(key, signal, result);
  };

  const debouncedValidateField = (path: string) => {
    clearTimeout(timers[path]);

    if (options.validateDebounce > 0) {
      abortControllers[path]?.abort();
      setFieldValidating(path, true);
      timers[path] = setTimeout(() => {
        const result = validateField(path);
        !(result instanceof Promise) && setFieldValidating(path, false);
      }, options.validateDebounce);
    } else {
      const result = validateField(path);
      !(result instanceof Promise) && setFieldValidating(path, false);
    }
  };

  const validate = () => {
    validateGeneration += 1;
    const generation = validateGeneration;
    const signal = getAbortSignal('__form__');

    const handleResult = (results: FormValidationResult) => {
      if (generation !== validateGeneration) {
        return { hasErrors: false, errors: {} };
      }

      setErrors(results.errors);
      return results;
    };

    const result = validateValues(options.rules, values, options.resolveValidationError, signal);

    if (result instanceof Promise) {
      setFormValidating(true);
      return result.then(handleResult).finally(() => {
        if (generation === validateGeneration) {
          setFormValidating(false);
        }
      });
    }

    return handleResult(result);
  };

  const isValid = (path?: unknown) => {
    const signal = new AbortController().signal;

    if (path) {
      const result = validateFieldValue(
        path,
        options.rules,
        values,
        options.resolveValidationError,
        signal
      );

      return result instanceof Promise
        ? result.then((resolved) => !resolved.hasError)
        : !result.hasError;
    }

    const result = validateValues(options.rules, values, options.resolveValidationError, signal);
    return result instanceof Promise
      ? result.then((resolved) => !resolved.hasErrors)
      : !result.hasErrors;
  };

  const writeFieldValue = (path: unknown, value: unknown, source: WriteSource) => {
    const key = String(path);
    const shouldValidate = shouldValidateOnChange(path, options.validateInputOnChange);
    const currentValue = getPath(path, values);
    const resolvedValue = value instanceof Function ? value(currentValue) : value;
    const changed = currentValue !== resolvedValue;
    const previousValues = values;

    if (changed) {
      values = setPath(path, resolvedValue, values);
    }

    setCalculatedFieldDirty(path, resolvedValue);
    options.touchTrigger === 'change' && setFieldTouched(path, true);
    !shouldValidate && options.clearInputErrorOnChange && clearFieldErrorTree(path);

    if (changed) {
      if (isControlled() || source === 'form' || hasUnsubscribedField(key)) {
        render();
      }

      options.onValuesChange?.(values, previousValues);
      notifyFieldWatchers(key, previousValues);
      shouldValidate && debouncedValidateField(key);
      notifyFields(key, source);
    } else if (source === 'form') {
      forEachRelatedBinding(key, (binding) => binding.notifyExternalWrite());
    }
  };

  const setFieldValue = (path: unknown, value: unknown, payload?: { forceUpdate: boolean }) =>
    writeFieldValue(path, value, payload?.forceUpdate === false ? 'input' : 'form');

  const handleValuesChange = (previousValues: unknown) => {
    options.clearInputErrorOnChange && clearErrors();
    render();
    notifyChangedWatchers(previousValues);
  };

  const setValues = (payload: any) => {
    const previousValues = values;
    const resolvedValues = typeof payload === 'function' ? payload(previousValues) : payload;

    values = { ...previousValues, ...resolvedValues };

    Object.keys(resolvedValues).forEach((key) => {
      setCalculatedFieldDirty(key, resolvedValues[key]);
    });

    options.onValuesChange?.(values, previousValues);
    options.clearInputErrorOnChange && clearFieldErrorTree(Object.keys(resolvedValues));
    render();
    notifyChangedWatchers(previousValues);
    Object.keys(resolvedValues).forEach((key) => notifyFields(key, 'form'));
  };

  const initialize = (payload: any) => {
    const previousValues = values;
    const shouldInitialize = !initialized;

    if (shouldInitialize) {
      initialized = true;
      values = { ...previousValues, ...payload };
      options.onValuesChange?.(values, previousValues);
      valuesSnapshot = payload;
    }

    handleValuesChange(previousValues);
    shouldInitialize && notifyFields(null, 'form');
    notifyStatus();
  };

  const reset = () => {
    const previousValues = values;
    values = valuesSnapshot;
    options.onValuesChange?.(values, previousValues);
    clearErrors();
    resetDirty();
    resetTouched();
    clearValidating();
    notifyChangedWatchers(previousValues);
    notifyFields(null, 'form');
  };

  const resetField = (path: unknown) => {
    const key = String(path);
    const snapshotValue = getPath(path, valuesSnapshot);
    clearFieldDirty(key);
    clearFieldErrorTree(key);

    if (typeof snapshotValue === 'undefined') {
      return;
    }

    const currentValue = getPath(path, values);

    if (currentValue !== snapshotValue) {
      const previousValues = values;
      values = setPath(path, snapshotValue, values);
      render();
      options.onValuesChange?.(values, previousValues);
      notifyFieldWatchers(key, previousValues);
    }

    notifyFields(key, 'form');
    notifyStatus();
  };

  const setInitialValues = (payload: any) => {
    valuesSnapshot = payload;
    notifyStatus();
  };

  const writeList = (path: unknown, nextValues: unknown) => {
    const key = String(path);
    const hasRootRule =
      typeof options.rules === 'object' && getRuleForPath(key, options.rules) !== null;
    const shouldValidate =
      hasRootRule && shouldValidateOnChange(path, options.validateInputOnChange);
    const previousValues = values;
    values = nextValues;
    !shouldValidate && options.clearInputErrorOnChange && clearFieldError(key);
    render();
    options.onValuesChange?.(values, previousValues);
    notifyChangedWatchers(previousValues);
    shouldValidate && debouncedValidateField(key);
    notifyFields(key, 'form');
    notifyStatus();
  };

  const reorderListItem = (path: unknown, payload: ReorderPayload) => {
    clearFieldDirty(path);
    setErrors((current) => reorderErrors(path, payload, current));
    writeList(path, reorderPath(path, payload, values));
  };

  const removeListItem = (path: unknown, index: number) => {
    clearFieldDirty(path);
    setErrors((current) => changeErrorIndices(path as PropertyKey, index, current, -1));
    writeList(path, removePath(path, index, values));
  };

  const insertListItem = (path: unknown, item: unknown, index?: number) => {
    clearFieldDirty(path);
    setErrors((current) => changeErrorIndices(path as PropertyKey, index, current, 1));
    writeList(path, insertPath(path, item, index, values));
  };

  const replaceListItem = (path: unknown, index: number, item: unknown) => {
    clearFieldDirty(path);
    writeList(path, replacePath(path, item, index, values));
  };

  const setSubmitting = (payload: boolean | ((current: boolean) => boolean)) => {
    const resolved = typeof payload === 'function' ? payload(submitting) : payload;

    if (resolved !== submitting) {
      submitting = resolved;
      render();
    }
  };

  const getTransformedValues = (payload?: unknown) =>
    (options.transformValues as any)(payload || values);

  const onSubmit =
    (
      handleSubmit?: (transformedValues: any, event: any) => unknown,
      handleValidationFailure?: (validationErrors: FormErrors, formValues: any, event: any) => void
    ) =>
    (event?: React.SyntheticEvent<HTMLFormElement>) => {
      if (options.onSubmitPreventDefault === 'always') {
        event?.preventDefault();
      }

      setSubmitting(true);

      const handleValidation = (results: FormValidationResult) => {
        if (results.hasErrors) {
          if (options.onSubmitPreventDefault === 'validation-failed') {
            event?.preventDefault();
          }

          handleValidationFailure?.(results.errors, values, event);
          setSubmitting(false);
        } else {
          const submitResult = handleSubmit?.(getTransformedValues(), event);

          if (submitResult instanceof Promise) {
            submitResult.finally(() => setSubmitting(false));
          } else {
            setSubmitting(false);
          }
        }
      };

      const result = validate();

      if (result instanceof Promise) {
        result.then(handleValidation).catch(() => setSubmitting(false));
      } else {
        handleValidation(result);
      }
    };

  const onReset = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    reset();
  };

  const createFieldBinding = (path: unknown, getSnapshot: () => unknown): FieldBinding => {
    const { field, ...listeners } = createFormField(String(path), getSnapshot);

    return {
      ...listeners,
      rendered: false,
      onChange: setFormField(
        getInputOnChange((value) => writeFieldValue(path, value, 'input')),
        field
      ),
    };
  };

  const getFieldEntry = (path: unknown) => {
    const key = String(path);

    if (!fields.has(key)) {
      fields.set(key, {
        input: createFieldBinding(path, () => getPath(key, values)),
        radios: new Map(),
        onFocus: () => setFieldTouched(path, true),
        onBlur: () => {
          if (shouldValidateOnChange(path, options.validateInputOnBlur)) {
            debouncedValidateField(key);
          }
        },
      });
    }

    return fields.get(key)!;
  };

  const getRadioBinding = (path: unknown, optionValue: unknown) => {
    const entry = getFieldEntry(path);

    if (!entry.radios.has(optionValue)) {
      entry.radios.set(
        optionValue,
        createFieldBinding(path, () => getPath(path, values) === optionValue)
      );
    }

    return entry.radios.get(optionValue)!;
  };

  const getInputProps = (
    path: unknown,
    { type = 'input', withError = true, withFocus, ...otherOptions }: GetInputPropsOptions = {},
    form?: unknown
  ) => {
    const resolvedWithFocus = withFocus ?? type !== 'radio';
    const entry = getFieldEntry(path);
    const binding = type === 'radio' ? getRadioBinding(path, otherOptions.value) : entry.input;
    const value = getPath(path, values);
    binding.rendered = true;

    const payload: any = {
      onChange: binding.onChange,
      'data-path': getDataPath(options.name, path as PropertyKey),
    };

    if (withError) {
      payload.error = errors[path as string];
    }

    Object.assign(payload, getInputValueProps(type, value, otherOptions.value));

    if (resolvedWithFocus) {
      payload.onFocus = entry.onFocus;
      payload.onBlur = entry.onBlur;
    }

    return Object.assign(
      payload,
      options.enhanceGetInputProps?.({
        inputProps: payload,
        field: path as any,
        options: { type, withError, withFocus: resolvedWithFocus, ...otherOptions },
        form: form as any,
      })
    );
  };

  const getInputNode = (path: unknown) =>
    document.querySelector(`[data-path="${getDataPath(options.name, path as PropertyKey)}"]`);

  return {
    subscribe,
    getVersion: () => version,
    subscribeStatus,
    setOptions,
    destroy,
    subscribeWatch,

    getValues: () => values,
    getInitialValues: () => valuesSnapshot,
    getErrors: () => errors,
    getTouched: () => touched,
    getDirty: () => dirty,
    getValidatingFields: () => validatingFields,
    isFormValidating: () => formValidating,
    isSubmitting: () => submitting,
    isInitialized: () => initialized,

    setInitialValues,
    initialize,
    setValues,
    setFieldValue,
    reset,
    resetField,

    setSubmitting,

    isValidating,
    validate,
    validateField,
    isValid,

    setErrors,
    setFieldError,
    clearFieldError,
    clearErrors,

    setTouched,
    setDirty,
    resetTouched,
    resetDirty,
    isTouched,
    isDirty,

    reorderListItem,
    removeListItem,
    insertListItem,
    replaceListItem,

    getInputProps,
    getInputNode,
    getTransformedValues,
    onSubmit,
    onReset,
  };
}

export type FormStore = ReturnType<typeof createFormStore>;
