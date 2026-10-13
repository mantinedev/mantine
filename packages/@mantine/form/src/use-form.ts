import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { useFormActions } from './actions';
import { createFormStore, FormStore } from './form-store/form-store';
import { getStatus } from './get-status';
import { clearChildKeys } from './lists';
import { getPath } from './paths';
import {
  FormErrors,
  FormFieldSubscriber,
  FormRulesRecord,
  GetField,
  GetInputNode,
  GetInputProps,
  GetInputPropsType,
  UseFormInput,
  UseFormReturnType,
  UseFormStatus,
  UseWatchValue,
  Watch,
} from './types';
import type { UseFieldReturnType } from './use-field';

function createWatchHooks(store: FormStore) {
  const watch: Watch<any> = (path, callback) => {
    useEffect(() => store.subscribeWatch(String(path), callback), [path, callback]);
  };

  const useWatchValue: UseWatchValue<any> = (path) => {
    const subscribe = useCallback(
      (listener: () => void) => {
        const subscriber: FormFieldSubscriber<any, any> = () => listener();
        return store.subscribeWatch(String(path), subscriber);
      },
      [path]
    );

    const getSnapshot = useCallback(() => getPath(path, store.getValues()), [path]);

    return useSyncExternalStore(subscribe, getSnapshot, getSnapshot) as any;
  };

  const useDirty: UseFormStatus<any> = (path) => {
    const getSnapshot = useCallback(() => store.isDirty(path), [path]);
    return useSyncExternalStore(store.subscribeStatus, getSnapshot, getSnapshot);
  };

  const useTouched: UseFormStatus<any> = (path) => {
    const getSnapshot = useCallback(() => store.isTouched(path), [path]);
    return useSyncExternalStore(store.subscribeStatus, getSnapshot, getSnapshot);
  };

  return { watch, useWatchValue, useDirty, useTouched };
}

function createFieldHandle(
  store: FormStore,
  path: string,
  type: GetInputPropsType,
  getForm: () => unknown
) {
  const resetTouched = () =>
    store.setTouched((current) => {
      if (!getStatus(current, path)) {
        return current;
      }

      const { [path]: _, ...rest } = clearChildKeys(path, current);
      return rest;
    });

  const handle: UseFieldReturnType<any> = {
    getInputProps: (options) => store.getInputProps(path, { type, ...options }, getForm()) as any,
    getValue: () => getPath(path, store.getValues()),
    setValue: (value) => store.setFieldValue(path, value),
    reset: () => {
      store.resetField(path);
      resetTouched();
    },
    validate: async () => (await store.validateField(path)).error,
    isValidating: store.isValidating(path),
    error: store.getErrors()[path] ?? null,
    setError: (error) => store.setFieldError(path, error),
    isTouched: () => store.isTouched(path),
    isDirty: () => store.isDirty(path),
    resetTouched,
  };

  return handle;
}

export function useForm<
  Values extends Record<string, any>,
  TransformedValues = Values,
  R extends FormErrors | Promise<FormErrors> = FormErrors,
>(
  input: UseFormInput<Values, TransformedValues> & { validate: (values: Values) => R }
): UseFormReturnType<Values, TransformedValues, (values: Values) => R>;

export function useForm<
  Values extends Record<string, any>,
  TransformedValues = Values,
  Rules extends FormRulesRecord<Values> = FormRulesRecord<Values>,
>(
  input: UseFormInput<Values, TransformedValues> & { validate: Rules }
): UseFormReturnType<Values, TransformedValues, Rules>;

export function useForm<
  Values extends Record<string, any> = Record<string, any>,
  TransformedValues = Values,
>(
  input?: UseFormInput<Values, TransformedValues>
): UseFormReturnType<Values, TransformedValues, undefined>;

export function useForm<
  Values extends Record<PropertyKey, any> = Record<string, any>,
  TransformedValues = Values,
>(
  input: UseFormInput<Values, TransformedValues> = {}
): UseFormReturnType<Values, TransformedValues> {
  const [{ store, watch, useWatchValue, useDirty, useTouched }] = useState(() => {
    const formStore = createFormStore(input);
    return { store: formStore, ...createWatchHooks(formStore) };
  });

  store.setOptions(input);
  useSyncExternalStore(store.subscribe, store.getVersion, store.getVersion);
  useEffect(() => store.destroy, [store]);

  const values = store.getValues();
  const initialValues = store.getInitialValues();
  const touched = store.getTouched();
  const dirty = store.getDirty();
  const validatingFields = store.getValidatingFields();
  const formValidating = store.isFormValidating();
  const { validate: rules, resolveValidationError } = input;

  const getValues = useCallback(() => store.getValues(), [store, values]);
  const getInitialValues = useCallback(() => store.getInitialValues(), [store, initialValues]);
  const getTouched = useCallback(() => store.getTouched(), [store, touched]);
  const getDirty = useCallback(() => store.getDirty(), [store, dirty]);
  const isTouched = useCallback((path?: unknown) => store.isTouched(path), [store, touched]);

  const isDirty = useCallback(
    (path?: unknown) => store.isDirty(path),
    [store, dirty, values, initialValues]
  );

  const isValid = useCallback(
    (path?: unknown) => store.isValid(path),
    [store, rules, resolveValidationError, values]
  );

  const isValidating = useCallback(
    (path?: unknown) => store.isValidating(path),
    [store, validatingFields, formValidating]
  );

  const getInputProps: GetInputProps<Values> = (path, options) =>
    store.getInputProps(path, options, form);

  const getInputNode: GetInputNode<Values> = (path) => store.getInputNode(path) as any;

  const errors = store.getErrors();
  const submitting = store.isSubmitting();
  const initialized = store.isInitialized();
  const fieldHandles = useMemo(
    () => new Map<string, UseFieldReturnType<any>>(),
    [
      store,
      values,
      initialValues,
      touched,
      dirty,
      errors,
      validatingFields,
      formValidating,
      submitting,
      initialized,
      rules,
    ]
  );

  const getField: GetField<Values> = useCallback(
    (path, { type = 'input' as GetInputPropsType } = {}) => {
      const key = `${type}:${String(path)}`;
      let handle = fieldHandles.get(key);

      if (!handle) {
        handle = createFieldHandle(store, String(path), type, () => form);
        fieldHandles.set(key, handle);
      }

      return handle as any;
    },
    [fieldHandles]
  );

  const form: any = {
    watch,
    useWatchValue,
    useDirty,
    useTouched,

    initialized,
    values,
    getValues,
    getInitialValues,
    setInitialValues: store.setInitialValues,
    resetField: store.resetField,
    initialize: store.initialize,
    setValues: store.setValues,
    setFieldValue: store.setFieldValue,

    submitting,
    setSubmitting: store.setSubmitting,

    validating: store.isValidating(),
    isValidating,

    errors,
    setErrors: store.setErrors,
    setFieldError: store.setFieldError,
    clearFieldError: store.clearFieldError,
    clearErrors: store.clearErrors,

    resetDirty: store.resetDirty,
    setTouched: store.setTouched,
    setDirty: store.setDirty,
    isTouched,
    resetTouched: store.resetTouched,
    isDirty,
    getTouched,
    getDirty,

    reorderListItem: store.reorderListItem,
    insertListItem: store.insertListItem,
    removeListItem: store.removeListItem,
    replaceListItem: store.replaceListItem,

    reset: store.reset,
    validate: store.validate,
    validateField: store.validateField,
    getInputProps,
    onSubmit: store.onSubmit,
    onReset: store.onReset,
    isValid,
    getTransformedValues: store.getTransformedValues,
    getInputNode,
    getField,
  };

  useFormActions(input.name, form);

  return form;
}
