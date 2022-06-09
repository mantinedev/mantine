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

type Rule<Value, Values> = (value: Value, values: Values) => React.ReactNode;

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

// type TestValues = {
//   a: number;
//   b: { c: string }[];
//   d: {
//     e: {
//       f: string[];
//     };
//   };
//   g: { h: { j: { k: number }[] }[] }[];
// };

// export const rules: FormRulesRecord<TestValues> = {
//   a: (value, values) => null,
//   b: {
//     c: (value, values) => null,
//   },
//   // b: (value, values) => null,
//   d: {
//     e: (value, values) => null,
//   },

//   g: {
//     h: {
//       j: {
//         k: (value) => null,
//       },
//     },
//   },
//   // g: {
//   //   h: (value) => null,
//   // },
// };
