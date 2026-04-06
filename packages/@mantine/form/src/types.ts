import type { FormArrayElement, FormPathValue, LooseKeys } from './paths.types';
import type { formRootRule } from './validate/validate-values';

export type GetInputPropsType = 'input' | 'checkbox' | 'radio';
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

export type SetValues<out Values> = <TValues extends Values>(
  value: Partial<TValues> | ((prevState: Partial<TValues>) => Partial<TValues>)
) => void;
export type SetInitialValues<out Values> = <TValues extends Values>(values: TValues) => void;
export type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;
export type SetFormStatus = React.Dispatch<React.SetStateAction<FormStatus>>;

export type OnSubmit<Values, TransformedValues = Values> = (
  handleSubmit: (
    values: TransformedValues,
    event: React.SyntheticEvent<HTMLFormElement> | undefined
  ) => void | Promise<any>,
  handleValidationFailure?: (
    errors: FormErrors,
    values: Values,
    event: React.SyntheticEvent<HTMLFormElement> | undefined
  ) => void
) => (event?: React.SyntheticEvent<HTMLFormElement>) => void;

export type GetTransformedValues<out Values, TransformedValues = Values> = <TValues extends Values>(
  values?: TValues
) => TransformedValues;

export type OnReset = (event: React.SyntheticEvent<HTMLFormElement>) => void;

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

export type SetFieldValue<out Values> = <TValues extends Values, Field extends LooseKeys<TValues>>(
  path: Field,
  value:
    | FormPathValue<TValues, Field>
    | ((prevValue: FormPathValue<TValues, Field>) => FormPathValue<TValues, Field>),
  options?: { forceUpdate: boolean }
) => void;

export type ClearFieldError<Values = unknown> = <Field extends LooseKeys<Values>>(
  path: Field
) => void;
export type ClearFieldDirty<Values = unknown> = <Field extends LooseKeys<Values>>(
  path: Field
) => void;
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

export type SetCalculatedFieldDirty<out Values> = <
  TValues extends Values,
  Field extends LooseKeys<Values>,
>(
  path: Field,
  value: FormPathValue<TValues, Field>
) => void;

export type ReorderListItem<out Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  payload: ReorderPayload
) => void;

export type InsertListItem<out Values> = <
  Field extends LooseKeys<Values>,
  Element extends FormArrayElement<Values, Field>,
>(
  path: Field,
  item: Element,
  index?: number
) => void;

export type ReplaceListItem<out Values> = <
  Field extends LooseKeys<Values>,
  Element extends FormArrayElement<Values, Field>,
>(
  path: Field,
  index: number,
  item: Element
) => void;

export type RemoveListItem<out Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  index: number
) => void;

export type GetFieldStatus<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type ResetStatus = () => void;
export type GetStatus = () => FormStatus;

export type ResetDirty<out Values> = <TValues extends Values>(values?: TValues) => void;
export type IsValid<Values, Rules = any> = <Field extends LooseKeys<Values>>(
  path?: Field
) => [HasAsyncRules<Rules>] extends [true]
  ? Promise<boolean>
  : [HasAsyncRules<Rules>] extends [false]
    ? boolean
    : boolean | Promise<boolean>;
export type IsValidating<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type Initialize<out Values> = <TValues extends Values>(values: TValues) => void;

export type FormFieldSubscriber<out Values, out Field extends LooseKeys<Values>> = <
  TValues extends Values,
>(input: {
  previousValue: FormPathValue<TValues, Field>;
  value: FormPathValue<TValues, Field>;
  touched: boolean;
  dirty: boolean;
}) => void;

export type Watch<out Values, out Field extends LooseKeys<Values> = LooseKeys<Values>> = <
  TValues extends Values,
  TField extends Field,
>(
  path: TField,
  subscriber: FormFieldSubscriber<TValues, TField>
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

interface _UseFormReturnType<out Values, out TransformedValues = Values, Rules = any> {
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
  clearFieldError: ClearFieldError<Values>;
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
  resetField: <Field extends LooseKeys<Values>>(path: Field) => void;
}

export type UseFormReturnType<Values, TransformedValues = Values, Rules = any> = _UseFormReturnType<
  Values,
  TransformedValues,
  Rules
>;

export type UseForm<Values = Record<string, unknown>, TransformedValues = Values, Rules = any> = (
  input?: UseFormInput<Values, TransformedValues>
) => UseFormReturnType<Values, TransformedValues, Rules>;

export type TransformedValues<Form extends UseFormReturnType<any, any, any>> = Parameters<
  Parameters<Form['onSubmit']>[0]
>[0];
