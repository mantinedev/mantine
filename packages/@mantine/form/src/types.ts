import type { FormPathValue, LooseKeys } from './paths.types';
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

type Rule<Value, Values> = (value: Value, values: Values, path: string) => React.ReactNode;

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

export type FormValidateInput<Values> = FormRulesRecord<Values> | ((values: Values) => FormErrors);

export type SetValues<out Values> = <TValues extends Values>(
  value: Partial<TValues> | ((prevState: Partial<TValues>) => Partial<TValues>)
) => void;
export type SetInitialValues<out Values> = <TValues extends Values>(values: TValues) => void;
export type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;
export type SetFormStatus = React.Dispatch<React.SetStateAction<FormStatus>>;

export type OnSubmit<Values, TransformValues extends _TransformValues<Values>> = (
  handleSubmit: (
    values: ReturnType<TransformValues>,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => void | Promise<any>,
  handleValidationFailure?: (
    errors: FormErrors,
    values: Values,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => void
) => (event?: React.FormEvent<HTMLFormElement>) => void;

export type GetTransformedValues<out Values, TransformValues extends _TransformValues<Values>> = <
  TValues extends Values,
>(
  values?: TValues
) => ReturnType<TransformValues>;

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

export type SetFieldValue<out Values> = <TValues extends Values, Field extends LooseKeys<TValues>>(
  path: Field,
  value:
    | FormPathValue<TValues, Field>
    | ((prevValue: FormPathValue<TValues, Field>) => FormPathValue<TValues, Field>),
  options?: { forceUpdate: boolean }
) => void;

export type ClearFieldError = (path: unknown) => void;
export type ClearFieldDirty = (path: unknown) => void;
export type ClearErrors = () => void;
export type Reset = () => void;
export type Validate = () => FormValidationResult;
export type ValidateField<Values> = <Field extends LooseKeys<Values>>(
  path: Field
) => FormFieldValidationResult;

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

export type ReorderListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  payload: ReorderPayload
) => void;

export type InsertListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  item: unknown,
  index?: number
) => void;

export type ReplaceListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  index: number,
  item: unknown
) => void;

export type RemoveListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  index: number
) => void;

export type GetFieldStatus<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type ResetStatus = () => void;
export type GetStatus = () => FormStatus;

export type ResetDirty<out Values> = <TValues extends Values>(values?: TValues) => void;
export type IsValid<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type Initialize<out Values> = <TValues extends Values>(values: TValues) => void;

export type _TransformValues<Values> = (values: Values) => unknown;

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

export interface UseFormInput<
  Values,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values,
> {
  name?: string;
  mode?: FormMode;
  initialValues?: Values;
  initialErrors?: FormErrors;
  initialTouched?: FormStatus;
  initialDirty?: FormStatus;
  transformValues?: TransformValues;
  validate?: FormValidateInput<Values>;
  clearInputErrorOnChange?: boolean;
  validateInputOnChange?: boolean | LooseKeys<Values>[];
  validateInputOnBlur?: boolean | LooseKeys<Values>[];
  onValuesChange?: (values: Values, previous: Values) => void;
  enhanceGetInputProps?: (payload: {
    inputProps: GetInputPropsReturnType;
    field: LooseKeys<Values>;
    options: GetInputPropsOptions;
    form: UseFormReturnType<Values, TransformValues>;
  }) => Record<string, any> | undefined | void;
  onSubmitPreventDefault?: 'always' | 'never' | 'validation-failed';
  touchTrigger?: 'focus' | 'change';
  cascadeUpdates?: boolean;
}

interface _UseFormReturnType<
  out Values,
  out TransformedValues = Values,
  TransformValues extends _TransformValues<Values> = <
    TValues extends Values,
    TTransformedValues extends TransformedValues,
  >(
    values: TValues
  ) => TTransformedValues,
> {
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
  validate: Validate;
  validateField: ValidateField<Values>;
  reorderListItem: ReorderListItem<Values>;
  removeListItem: RemoveListItem<Values>;
  replaceListItem: ReplaceListItem<Values>;
  insertListItem: InsertListItem<Values>;
  getInputProps: GetInputProps<Values>;
  onSubmit: OnSubmit<Values, TransformValues>;
  onReset: OnReset;
  isDirty: GetFieldStatus<Values>;
  isTouched: GetFieldStatus<Values>;
  setTouched: SetFormStatus;
  setDirty: SetFormStatus;
  resetTouched: ResetStatus;
  resetDirty: ResetDirty<Values>;
  isValid: IsValid<Values>;
  getTransformedValues: GetTransformedValues<Values, TransformValues>;
  getValues: () => Values;
  getInitialValues: () => Values;
  getTouched: GetStatus;
  getDirty: GetStatus;
  watch: Watch<Values>;
  key: Key<Values>;
  getInputNode: GetInputNode<Values>;
  resetField: (path: PropertyKey) => void;
}

export type UseFormReturnType<
  Values,
  TransformValues extends _TransformValues<Values> = <TValues extends Values, TTransformedValues>(
    values: TValues
  ) => TTransformedValues,
  TransformedValues = Values,
> = _UseFormReturnType<Values, TransformedValues, TransformValues>;

export type UseForm<
  Values = Record<string, unknown>,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values,
> = (input?: UseFormInput<Values, TransformValues>) => UseFormReturnType<Values, TransformValues>;

export type TransformedValues<Form extends UseFormReturnType<any>> = Parameters<
  Parameters<Form['onSubmit']>[0]
>[0];
