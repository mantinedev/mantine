export type GetInputPropsType = 'input' | 'checkbox';

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

export type FormRule<Value, Values> = NonNullable<Value> extends Array<infer ListValue>
  ?
      | Partial<{
          [Key in keyof ListValue]: ListValue[Key] extends Array<infer NestedListItem>
            ? FormRulesRecord<NestedListItem, Values> | Rule<ListValue[Key], Values>
            : FormRulesRecord<ListValue[Key], Values> | Rule<ListValue[Key], Values>;
        }>
      | Rule<Value, Values>
  : NonNullable<Value> extends Record<string, any>
    ? FormRulesRecord<Value, Values> | Rule<Value, Values>
    : Rule<Value, Values>;

export type FormRulesRecord<Values, InitValues = Values> = Partial<{
  [Key in keyof Values]: FormRule<Values[Key], InitValues>;
}>;

export type FormValidateInput<Values> = FormRulesRecord<Values> | ((values: Values) => FormErrors);

export type LooseKeys<Values> = keyof Values | (string & {});

export type SetValues<Values> = React.Dispatch<React.SetStateAction<Partial<Values>>>;
export type SetInitialValues<Values> = (values: Values) => void;
export type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;
export type SetFormStatus = React.Dispatch<React.SetStateAction<FormStatus>>;

export type OnSubmit<Values, TransformValues extends _TransformValues<Values>> = (
  handleSubmit: (
    values: ReturnType<TransformValues>,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => void,
  handleValidationFailure?: (
    errors: FormErrors,
    values: Values,
    event: React.FormEvent<HTMLFormElement> | undefined
  ) => void
) => (event?: React.FormEvent<HTMLFormElement>) => void;

export type GetTransformedValues<Values, TransformValues extends _TransformValues<Values>> = (
  values?: Values
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
  checked?: any;
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
  value: Field extends keyof Values ? Values[Field] : unknown
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

export type ReorderListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  payload: ReorderPayload
) => void;

export type InsertListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  item: unknown,
  index?: number
) => void;

export type RemoveListItem<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  index: number
) => void;

export type GetFieldStatus<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type ResetStatus = () => void;

export type ResetDirty<Values> = (values?: Values) => void;
export type IsValid<Values> = <Field extends LooseKeys<Values>>(path?: Field) => boolean;
export type Initialize<Values> = (values: Values) => void;

export type _TransformValues<Values> = (values: Values) => unknown;

export interface UseFormInput<
  Values,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values,
> {
  name?: string;
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
}

export interface UseFormReturnType<
  Values,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values,
> {
  values: Values;
  initialized: boolean;
  errors: FormErrors;
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
}

export type UseForm<
  Values = Record<string, unknown>,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values,
> = (input?: UseFormInput<Values, TransformValues>) => UseFormReturnType<Values, TransformValues>;

export type TransformedValues<Form extends UseFormReturnType<any>> = Parameters<
  Parameters<Form['onSubmit']>[0]
>[0];
