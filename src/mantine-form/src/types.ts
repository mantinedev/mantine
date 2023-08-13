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

type FormRule<Value, Values> = NonNullable<Value> extends Array<infer ListValue>
  ?
      | Partial<{
          [Key in keyof ListValue]: ListValue[Key] extends Array<infer NestedListItem>
            ? FormRulesRecord<NestedListItem> | Rule<ListValue[Key], Values>
            : FormRulesRecord<ListValue[Key]> | Rule<ListValue[Key], Values>;
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
export type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;
export type SetFormStatus = React.Dispatch<React.SetStateAction<FormStatus>>;

export type OnSubmit<Values, TransformValues extends _TransformValues<Values>> = (
  handleSubmit: (
    values: ReturnType<TransformValues>,
    event: React.FormEvent<HTMLFormElement>
  ) => void,
  handleValidationFailure?: (
    errors: FormErrors,
    values: Values,
    event: React.FormEvent<HTMLFormElement>
  ) => void
) => (event?: React.FormEvent<HTMLFormElement>) => void;

export type GetTransformedValues<Values, TransformValues extends _TransformValues<Values>> = (
  values?: Values
) => ReturnType<TransformValues>;

export type OnReset = (event: React.FormEvent<HTMLFormElement>) => void;

export type GetInputProps<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  options?: { type?: GetInputPropsType; withError?: boolean; withFocus?: boolean }
) => { value: any; onChange: any; checked?: any; error?: any; onFocus?: any; onBlur?: any };

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

export type _TransformValues<Values> = (values: Values) => unknown;

export interface UseFormInput<
  Values,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values
> {
  initialValues?: Values;
  initialErrors?: FormErrors;
  initialTouched?: FormStatus;
  initialDirty?: FormStatus;
  transformValues?: TransformValues;
  validate?: FormValidateInput<Values>;
  clearInputErrorOnChange?: boolean;
  validateInputOnChange?: boolean | LooseKeys<Values>[];
  validateInputOnBlur?: boolean | LooseKeys<Values>[];
}

export interface UseFormReturnType<
  Values,
  TransformValues extends _TransformValues<Values> = (values: Values) => Values
> {
  values: Values;
  errors: FormErrors;
  setValues: SetValues<Values>;
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
  TransformValues extends _TransformValues<Values> = (values: Values) => Values
> = (input?: UseFormInput<Values, TransformValues>) => UseFormReturnType<Values, TransformValues>;

export type TransformedValues<Form extends UseFormReturnType<any>> = Parameters<
  Parameters<Form['onSubmit']>[0]
>[0];
