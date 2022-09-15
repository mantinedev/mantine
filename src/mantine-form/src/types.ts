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

type FormRule<Value, Values> = Value extends Array<infer ListValue>
  ?
      | Partial<{
          [Key in keyof ListValue]: ListValue[Key] extends Array<infer NestedListItem>
            ? FormRulesRecord<NestedListItem> | Rule<ListValue[Key], Values>
            : FormRulesRecord<ListValue[Key]> | Rule<ListValue[Key], Values>;
        }>
      | Rule<Value, Values>
  : Value extends Record<string, unknown>
  ? FormRulesRecord<Value> | Rule<Value, Values>
  : Rule<Value, Values>;

export type FormRulesRecord<Values> = Partial<{
  [Key in keyof Values]: FormRule<Values[Key], Values>;
}>;

export type FormValidateInput<Values> = FormRulesRecord<Values> | ((values: Values) => FormErrors);

export type LooseKeys<Values> = keyof Values | (string & {});

export type SetValues<Values> = React.Dispatch<React.SetStateAction<Values>>;
export type SetErrors = React.Dispatch<React.SetStateAction<FormErrors>>;
export type SetFormStatus = React.Dispatch<React.SetStateAction<FormStatus>>;

export type OnSubmit<Values> = (
  handleSubmit: (values: Values, event: React.FormEvent<HTMLFormElement>) => void,
  handleValidationFailure?: (
    errors: FormErrors,
    values: Values,
    event: React.FormEvent<HTMLFormElement>
  ) => void
) => (event: React.FormEvent<HTMLFormElement>) => void;

export type OnReset = (event: React.FormEvent<HTMLFormElement>) => void;

export type GetInputProps<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  options?: { type?: GetInputPropsType; withError?: boolean; withFocus?: boolean }
) => any;

export type SetFieldValue<Values> = <Field extends LooseKeys<Values>>(
  path: Field,
  value: Field extends keyof Values ? Values[Field] : unknown
) => void;

export type ClearFieldError = (path: unknown) => void;
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

export interface UseFormInput<Values> {
  initialValues?: Values;
  initialErrors?: FormErrors;
  initialTouched?: FormStatus;
  initialDirty?: FormStatus;
  validate?: FormValidateInput<Values>;
  clearInputErrorOnChange?: boolean;
  validateInputOnChange?: boolean | LooseKeys<Values>[];
  validateInputOnBlur?: boolean | LooseKeys<Values>[];
}

export interface UseFormReturnType<Values> {
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
  onSubmit: OnSubmit<Values>;
  onReset: OnReset;
  isDirty: GetFieldStatus<Values>;
  isTouched: GetFieldStatus<Values>;
  setTouched: SetFormStatus;
  setDirty: SetFormStatus;
  resetTouched: ResetStatus;
  resetDirty: ResetDirty<Values>;
  isValid: IsValid<Values>;
}

export type UseForm<Values = Record<string, unknown>> = (
  input?: UseFormInput<Values>
) => UseFormReturnType<Values>;
