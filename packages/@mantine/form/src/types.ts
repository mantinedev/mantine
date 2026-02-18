import type { FormArrayElement, FormPathValue, LooseKeys } from './paths.types';
import type { formRootRule } from './validate/validate-values';

export type GetInputPropsType = 'input' | 'checkbox';
export type FormMode = 'controlled' | 'uncontrolled';

export type FormStatus = Record<string, boolean>;

export interface FormFieldValidationResult {
  hasError: boolean;
  error: React.ReactNode;
}

export interface FormValidationResult {
  hasErrors: boolean;
  errors: FormErrors;
}

export type FormErrors = Record<string, React.ReactNode>;

export interface ReorderPayload {
  from: number;
  to: number;
}

type Rule<Value, Values> = (
  value: Value,
  values: Values,
  path: string,
  signal?: AbortSignal
) => React.ReactNode | Promise<React.ReactNode>;

type SetSubmitting = React.Dispatch<React.SetStateAction<boolean>>;

export type FormRule<Value, Values> =
  NonNullable<Value> extends ReadonlyArray<infer ListValue>
    ?
        | Partial<
            {
              [Key in keyof ListValue]: ListValue[Key] extends ReadonlyArray<infer NestedListItem>
                ? FormRulesRecord<NestedListItem, Values> | Rule<ListValue[Key], Values>
                : FormRulesRecord<ListValue[Key], Values> | Rule<ListValue[Key], Values>;
            } & { [formRootRule]?: Rule<Value, Values> }
          >
        | Rule<Value, Values>
    : NonNullable<Value> extends Record<string, any>
      ? FormRulesRecord<Value, Values> | Rule<Value, Values>
      : Rule<Value, Values>;

export type FormRulesRecord<Values, InitValues = Values> = Partial<{
  [Key in keyof Values]: FormRule<Values[Key], InitValues>;
}> & { [formRootRule]?: Rule<Values, InitValues> };

export type FormValidateInput<Values> =
  | FormRulesRecord<Values>
  | ((values: Values) => FormErrors | Promise<FormErrors>);

export type SetValues<Values> = React.Dispatch<React.SetStateAction<Partial<Values>>>;
export type SetInitialValues<Values> = (values: Values) => void;
export type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;
export type SetFormStatus = React.Dispatch<React.SetStateAction<FormStatus>>;

export type OnSubmit<Values, TransformedValues = Values> = (
  handleSubmit: (
    values: TransformedValues,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => void | Promise<any>,
  handleValidationFailure?: (
    errors: FormErrors,
    values: Values,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => void
) => (event?: React.FormEvent<HTMLFormElement>) => void;

export type GetTransformedValues<Values, TransformedValues = Values> = (
  values?: Values
) => TransformedValues;

export type OnReset = (event: React.FormEvent<HTMLFormElement>) => void;

export interface GetInputPropsOptions {
  type?: GetInputPropsType;
  withError?: boolean;
  withFocus?: boolean;

  [key: string]: any;
}

export interface GetInputPropsReturnType {
  onChange: any;
  value?: any;
  defaultValue?: any;
  checked?: any;
  defaultChecked?: any;
  error?: any;
  onFocus?: any;
  onBlur?: any;
}

export type GetInputProps<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  options?: GetInputPropsOptions
) => GetInputPropsReturnType;

export type SetFieldValue<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  value:
    | FormPathValue<Values, Field>
    | ((prevValue: FormPathValue<Values, Field>) => FormPathValue<Values, Field>),
  options?: { forceUpdate: boolean }
) => void;

export type ClearFieldError = (path: unknown) => void;
export type ClearFieldDirty = (path: unknown) => void;
export type ClearErrors = () => void;
export type Reset = () => void;

type IsAsyncFn<R> = R extends (...args: any[]) => infer Ret
  ? [Extract<Ret, Promise<any>>] extends [never]
    ? false
    : true
  : false;

type HasAsyncInRecord<V> = V extends object
  ? true extends {
      [K in keyof V]: V[K] extends (...args: any[]) => any
        ? IsAsyncFn<V[K]>
        : V[K] extends object
          ? true extends { [J in keyof V[K]]: IsAsyncFn<V[K][J]> }[keyof V[K]]
            ? true
            : false
          : false;
    }[keyof V]
    ? true
    : false
  : false;

export type HasAsyncRules<V> = V extends undefined
  ? false
  : V extends (...args: any[]) => infer R
    ? [Extract<R, Promise<any>>] extends [never]
      ? false
      : true
    : V extends object
      ? HasAsyncInRecord<V>
      : false;

export type Validate<Rules = any> = () => [HasAsyncRules<Rules>] extends [true]
  ? Promise<FormValidationResult>
  : [HasAsyncRules<Rules>] extends [false]
    ? FormValidationResult
    : FormValidationResult | Promise<FormValidationResult>;

export type ValidateField<Values, Rules = any> = <Field extends LooseKeys<Values>>(
  path: Field
) => [HasAsyncRules<Rules>] extends [true]
  ? Promise<FormFieldValidationResult>
  : [HasAsyncRules<Rules>] extends [false]
    ? FormFieldValidationResult
    : FormFieldValidationResult | Promise<FormFieldValidationResult>;

export type SetFieldError<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  error: React.ReactNode
) => void;

export type SetFieldTouched<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  touched: boolean
) => void;

export type SetFieldDirty<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  dirty: boolean,
  forceUpdate?: boolean
) => void;

export type SetCalculatedFieldDirty<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  value: FormPathValue<Values, Field>
) => void;

export type ReorderListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  payload: ReorderPayload
) => void;

export type InsertListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  item: FormArrayElement<Values, Field>,
  index?: number
) => void;

export type ReplaceListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  index: number,
  item: FormArrayElement<Values, Field>
) => void;

export type RemoveListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  index: number
) => void;

export type GetFieldStatus<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type ResetStatus = () => void;
export type GetStatus = () => FormStatus;

export type ResetDirty<Values> = (values?: Values) => void;
export type IsValid<Values, Rules = any> = <Field extends LooseKeys<Values>>(
  path?: Field
) => [HasAsyncRules<Rules>] extends [true]
  ? Promise<boolean>
  : [HasAsyncRules<Rules>] extends [false]
    ? boolean
    : boolean | Promise<boolean>;
export type IsValidating<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type Initialize<Values> = (values: Values) => void;

export type FormFieldSubscriber<Values, Field extends LooseKeys<Values>> = (input: {
  previousValue: FormPathValue<Values, Field>;
  value: FormPathValue<Values, Field>;
  touched: boolean;
  dirty: boolean;
}) => void;

export type Watch<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  subscriber: FormFieldSubscriber<Values, Field>
) => void;

export type Key<Values> = <Field extends LooseKeys<Values>>(path: Field) => string;

export type GetInputNode<Values> = <NodeType extends HTMLElement, Field extends LooseKeys<Values>>(
  path: Field
) => NodeType | null;

export interface UseFormInput<Values, TransformedValues = Values> {
  name?: string;
  mode?: FormMode;
  initialValues?: Values;
  initialErrors?: FormErrors;
  initialTouched?: FormStatus;
  initialDirty?: FormStatus;
  transformValues?: (values: Values) => TransformedValues;
  validate?: FormValidateInput<Values>;
  clearInputErrorOnChange?: boolean;
  validateInputOnChange?: boolean | LooseKeys<Values>[];
  validateInputOnBlur?: boolean | LooseKeys<Values>[];
  onValuesChange?: (values: Values, previous: Values) => void;
  enhanceGetInputProps?: (payload: {
    inputProps: GetInputPropsReturnType;
    field: LooseKeys<Values>;
    options: GetInputPropsOptions;
    form: UseFormReturnType<Values, TransformedValues>;
  }) => Record<string, any> | undefined | void;
  onSubmitPreventDefault?: 'always' | 'never' | 'validation-failed';
  touchTrigger?: 'focus' | 'change';
  cascadeUpdates?: boolean;
  validateDebounce?: number;
  resolveValidationError?: (error: unknown) => React.ReactNode;
}

export interface UseFormReturnType<Values, TransformedValues = Values, Rules = any> {
  values: Values;
  submitting: boolean;
  initialized: boolean;
  errors: FormErrors;
  setSubmitting: SetSubmitting;
  initialize: Initialize<Values>;
  setValues: SetValues<Values>;
  setInitialValues: SetInitialValues<Values>;
  setErrors: SetErrors;
  setFieldValue: SetFieldValue<Values>;
  setFieldError: SetFieldError<Values>;
  clearFieldError: ClearFieldError;
  clearErrors: ClearErrors;
  reset: Reset;
  validate: Validate<Rules>;
  validateField: ValidateField<Values, Rules>;
  reorderListItem: ReorderListItem<Values>;
  removeListItem: RemoveListItem<Values>;
  replaceListItem: ReplaceListItem<Values>;
  insertListItem: InsertListItem<Values>;
  getInputProps: GetInputProps<Values>;
  onSubmit: OnSubmit<Values, TransformedValues>;
  onReset: OnReset;
  isDirty: GetFieldStatus<Values>;
  isTouched: GetFieldStatus<Values>;
  setTouched: SetFormStatus;
  setDirty: SetFormStatus;
  resetTouched: ResetStatus;
  resetDirty: ResetDirty<Values>;
  isValid: IsValid<Values, Rules>;
  validating: boolean;
  isValidating: IsValidating<Values>;
  getTransformedValues: GetTransformedValues<Values, TransformedValues>;
  getValues: () => Values;
  getInitialValues: () => Values;
  getTouched: GetStatus;
  getDirty: GetStatus;
  watch: Watch<Values>;
  key: Key<Values>;
  getInputNode: GetInputNode<Values>;
  resetField: (path: PropertyKey) => void;
}

export type UseForm<Values = Record<string, unknown>, TransformedValues = Values, Rules = any> = (
  input?: UseFormInput<Values, TransformedValues>
) => UseFormReturnType<Values, TransformedValues, Rules>;

export type TransformedValues<Form extends UseFormReturnType<any, any, any>> = Parameters<
  Parameters<Form['onSubmit']>[0]
>[0];
