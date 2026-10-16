# @mantine/form API Reference

## Table of Contents

- [useForm options](#useform-options)
- [useForm return value](#useform-return-value)
- [useField](#usefield-hook)
- [getField](#getfield)
- [useFormField](#useformfield)
- [createFormContext](#createformcontext)
- [createFormActions](#createformactions)
- [schemaResolver](#schemaresolver)
- [Built-in validators](#built-in-validators)
- [Validation rule format](#validation-rule-format)
- [Key types](#key-types)

---

## useForm options

`Values` is the type of form values, `TransformedValues` is the type returned by `transformValues`
(what the `onSubmit` handler receives). Pass `Values` explicitly when `initialValues` contain
`null` or empty arrays (`useForm<ProfileValues>({ ... })`), otherwise the inferred type is too
narrow. Pass both when the form has `transformValues`: `useForm<ProfileValues, ProfilePayload>`.

```ts
useForm<Values, TransformedValues>({
  mode?,
  initialValues?,
  initialErrors?,
  initialTouched?,
  initialDirty?,
  validate?,
  validateInputOnChange?,
  validateInputOnBlur?,
  validateDebounce?,
  clearInputErrorOnChange?,
  transformValues?,
  onValuesChange?,
  enhanceGetInputProps?,
  onSubmitPreventDefault?,
  touchTrigger?,
  cascadeUpdates?,
  resolveValidationError?,
  name?,
})
```

| Option                    | Type                                                                       | Default           | Description                                                                                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`                    | `'controlled' \| 'uncontrolled'`                                           | `'uncontrolled'`  | Uncontrolled: values outside React state, typing rerenders only the input. Controlled: values in React state, the form component rerenders on every change. Never write `mode: 'uncontrolled'`, it is the default    |
| `initialValues`           | `Values`                                                                   | —                 | Starting values. Every field rendered with an input needs one                                                                                                                                                        |
| `initialErrors`           | `FormErrors`                                                               | `{}`              | Starting error messages                                                                                                                                                                                              |
| `initialTouched`          | `FormStatus`                                                               | `{}`              | Starting touched flags                                                                                                                                                                                               |
| `initialDirty`            | `FormStatus`                                                               | `{}`              | Starting dirty flags                                                                                                                                                                                                 |
| `validate`                | `FormRulesRecord<Values> \| (values) => FormErrors \| Promise<FormErrors>` | —                 | Rules object, function, or `schemaResolver(schema)`                                                                                                                                                                  |
| `validateInputOnChange`   | `boolean \| string[]`                                                      | `false`           | Validate on change (all or listed fields). Use `FORM_INDEX` for list items: `` `jobs.${FORM_INDEX}.title` ``. Listing a list path (`'skills'`) runs its `formRootRule` after list handlers                           |
| `validateInputOnBlur`     | `boolean \| string[]`                                                      | `false`           | Validate on blur (all or listed fields), supports `FORM_INDEX`                                                                                                                                                       |
| `validateDebounce`        | `number`                                                                   | `0`               | Debounce on-change and on-blur validation (ms). During the wait the field error is cleared and `form.isValidating(path)` is `true`. Does not apply to `form.validate()` and submit                                   |
| `clearInputErrorOnChange` | `boolean`                                                                  | `true`            | Clear the error of a field (and its children) when its value changes, including errors set with `setErrors` / `setFieldError`                                                                                        |
| `transformValues`         | `(values: Values) => TransformedValues`                                    | identity          | Build the payload passed to the `onSubmit` handler. Validation runs on the raw values                                                                                                                                |
| `onValuesChange`          | `(values, previous) => void`                                               | —                 | Called on every value change: typing, `setFieldValue`, `setValues`, list handlers, `resetField`, `reset` and `initialize`                                                                                            |
| `enhanceGetInputProps`    | `({ inputProps, field, options, form }) => object \| void`                 | —                 | Merge extra props into every `getInputProps` call, for example `({ form }) => ({ readOnly: !form.initialized })`. The form object is the one from the last render: subscribe with `useWatchValue` to values it reads |
| `onSubmitPreventDefault`  | `'always' \| 'never' \| 'validation-failed'`                               | `'always'`        | When to call `event.preventDefault()`                                                                                                                                                                                |
| `touchTrigger`            | `'focus' \| 'change'`                                                      | `'change'`        | `'change'`: typing and `setFieldValue` mark the field touched (`setValues` and list handlers do not). `'focus'`: only focus does, use it to tell a hand-edited field from a generated one                            |
| `cascadeUpdates`          | `boolean`                                                                  | `false`           | `watch` / `useWatchValue` subscribers of child paths (`shipping.city`) are also called when a parent path (`shipping`) is set                                                                                        |
| `resolveValidationError`  | `(error: unknown) => ReactNode`                                            | message extractor | Turns an error thrown or rejected by an async rule into the displayed error                                                                                                                                          |
| `name`                    | `string`                                                                   | —                 | Required for `createFormActions(name)`. Also prefixes `data-path` attributes: letters, numbers and dashes only                                                                                                       |

---

## useForm return value

### Values

| Member        | Type         | Description                                                                                                                                                                                                                                                 |
| ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`      | `Values`     | Snapshot from the last render of the form component. In uncontrolled mode it is not updated while the user types. Use `getValues()` in handlers and `useWatchValue` in render                                                                               |
| `errors`      | `FormErrors` | Current errors keyed by dot path (`'members.1.email'`). Safe in render in both modes. Contains only fields that have an error: cleared errors are removed                                                                                                   |
| `submitting`  | `boolean`    | `true` from the moment the form is submitted until validation (including async) and the promise returned by the `onSubmit` handler settle                                                                                                                   |
| `validating`  | `boolean`    | `true` while async validation (started by submit, `validate`, `validateField` or on-change / on-blur validation) or a `validateDebounce` wait is running. `isValid()` does not set it. Disable the submit button with it instead of showing a second loader |
| `initialized` | `boolean`    | `true` after `initialize()` has been called                                                                                                                                                                                                                 |

### Reading values and state in render

| Member          | Signature                    | Description                                                                                                                                                                                                                                                                        |
| --------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useWatchValue` | `(path) => value`            | Hook: returns the field value and rerenders the calling component when it changes. Nested and object paths work (`'personal'` rerenders on any change inside `personal`). Call at the top level of a component                                                                     |
| `useDirty`      | `(path?) => boolean`         | Hook: dirty state of a field, a subtree (`` `rows.${index}` ``) or the whole form. Rerenders the calling component only when the result changes                                                                                                                                    |
| `useTouched`    | `(path?) => boolean`         | Hook: touched state, same as `useDirty`                                                                                                                                                                                                                                            |
| `watch`         | `(path, subscriber) => void` | Calls `subscriber({ value, previousValue, touched, dirty })` on changes of the path or its children, does not rerender. Uses `useEffect` inside: call it at the top level of a component like a hook. Use it for side effects: setting other fields, clearing errors, revalidating |

`watch`, `useWatchValue`, `useDirty` and `useTouched` work in any component that has the `form`
object, including children that receive it through props or context.

### Getting & setting values

| Method             | Signature                                                        | Description                                                                                                                                                                                                                                                                                                                                          |
| ------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getValues`        | `() => Values`                                                   | Current values. Do not mutate the returned object                                                                                                                                                                                                                                                                                                    |
| `getInitialValues` | `() => Values`                                                   | Current initial values (the dirty baseline)                                                                                                                                                                                                                                                                                                          |
| `setValues`        | `(values: Partial<Values> \| (prev) => Partial<Values>) => void` | Merge top-level keys into values. Clears errors only of the keys it sets: call `clearErrors()` first to clear all                                                                                                                                                                                                                                    |
| `setFieldValue`    | `(path, value \| updater, options?) => void`                     | Set one field by dot path. Clears its error, rerenders the form component. `{ forceUpdate: false }` writes the value the way typing does: in uncontrolled mode a subscribed input updates without rerendering the form component (an unsubscribed input or controlled mode still rerenders it), and `onExternalWrite` of custom inputs is not called |
| `setInitialValues` | `(values: Values) => void`                                       | Change what `reset` returns to and what values are compared with for dirty state. Dirty flags of fields edited earlier stay: call `resetDirty(values)` as well                                                                                                                                                                                       |
| `initialize`       | `(values: Values) => void`                                       | Set values and initial values at once, mark the form as initialized. Only the first call changes values; later calls keep values and only clear errors. Use it for records loaded from a server                                                                                                                                                                                                    |
| `reset`            | `() => void`                                                     | Restore initial values, clear errors, touched, dirty, debounce timers and running field validation. Calls `onValuesChange`                                                                                                                                                                                                                           |
| `resetField`       | `(path) => void`                                                 | Restore one field or subtree (`` `rows.${index}` ``) to its initial value, clear its errors and dirty state. Does nothing to the value if the path has no initial value                                                                                                                                                                              |

### Errors

| Method            | Signature                                              | Description                                                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `setErrors`       | `(errors: FormErrors \| (prev) => FormErrors) => void` | Replace all errors. Keys are dot paths: `{ 'lines.2.quantity': 'Not enough stock' }`. `null`, `undefined` and `false` values are dropped. A key that is not a field (`root`) is not cleared by `clearInputErrorOnChange` |
| `setFieldError`   | `(path, error: ReactNode) => void`                     | Set one field's error                                                                                                                                                                                                    |
| `clearFieldError` | `(path) => void`                                       | Clear one field's error                                                                                                                                                                                                  |
| `clearErrors`     | `() => void`                                           | Clear all errors                                                                                                                                                                                                         |

### Dirty & touched in handlers

| Method         | Signature                                              | Description                                                                                         |
| -------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `isDirty`      | `(path?) => boolean`                                   | Current dirty state. In render use `useDirty`, the form component does not rerender when it changes |
| `isTouched`    | `(path?) => boolean`                                   | Current touched state. In render use `useTouched`                                                   |
| `getDirty`     | `() => FormStatus`                                     | All dirty flags                                                                                     |
| `getTouched`   | `() => FormStatus`                                     | All touched flags                                                                                   |
| `setDirty`     | `(status: FormStatus \| (prev) => FormStatus) => void` | Overwrite dirty flags                                                                               |
| `setTouched`   | `(status: FormStatus \| (prev) => FormStatus) => void` | Overwrite touched flags                                                                             |
| `resetDirty`   | `(values?) => void`                                    | Clear dirty flags and make `values` (or the current values) the new dirty baseline                  |
| `resetTouched` | `() => void`                                           | Clear all touched flags                                                                             |

### Array fields

| Method            | Signature                      | Description                               |
| ----------------- | ------------------------------ | ----------------------------------------- |
| `insertListItem`  | `(path, item, index?) => void` | Insert item at index (appends if omitted) |
| `removeListItem`  | `(path, index) => void`        | Remove item at index                      |
| `reorderListItem` | `(path, { from, to }) => void` | Move item from one index to another       |
| `replaceListItem` | `(path, index, item) => void`  | Replace item at index                     |

List handlers rerender the form component, move field errors with their rows and clear the error
of the list itself (unless the list path is in `validateInputOnChange`).

### Validation

| Method          | Signature                                             | Description                                                                                                                               |
| --------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `validate`      | `() => FormValidationResult \| Promise<...>`          | Validate all fields, set errors, return the result                                                                                        |
| `validateField` | `(path) => FormFieldValidationResult \| Promise<...>` | Validate one field now (not debounced), set or clear its error, return `{ hasError, error }`. Works for a list path with a `formRootRule` |
| `isValid`       | `(path?) => boolean \| Promise<boolean>`              | Run the rules without setting errors. Safe in render for sync rules when the component subscribes to the values it checks                 |
| `isValidating`  | `(path?) => boolean`                                  | `true` while an async rule or a `validateDebounce` wait runs for the field (or any field)                                                 |
| `setSubmitting` | `(value: boolean) => void`                            | Manually control `submitting`                                                                                                             |

`validate`, `validateField` and `isValid` return plain results when all rules are synchronous and
a `Promise` when a rule is async or `schemaResolver` is used without `{ sync: true }`. TypeScript
infers which one from the rules passed to `useForm`. The form returned by `useFormContext()` is
typed as possibly async unless the rules type is passed as the third generic of `createFormContext`:
`await` the result in that case.

### Submission

| Method                 | Signature                                 | Description                                                                                                                                                                                 |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onSubmit`             | `(handler, onError?) => FormEventHandler` | Returns an event handler; calls `handler(transformedValues, event)` only when valid, otherwise `onError(errors, values, event)`. Can be called without an event: `form.onSubmit(handler)()` |
| `onReset`              | `FormEventHandler`                        | Pass to `<form onReset>` to reset on native reset                                                                                                                                           |
| `getTransformedValues` | `(values?) => TransformedValues`          | Apply `transformValues` to given or current values                                                                                                                                          |

### Input binding

| Method          | Signature                                 | Description                                                                                                                                                                                          |
| --------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getInputProps` | `(path, options?) => object`              | Returns `{ value, onChange, error, onFocus, onBlur, 'data-path' }` (`checked` instead of `value` for `type: 'checkbox'`). Same props in both modes. `onChange` accepts a change event or a raw value |
| `getInputNode`  | `(path) => HTMLElement \| null`           | DOM node that received `data-path` from `getInputProps(path)`, for example to focus it. For `Radio.Group` and other wrappers, focus `node.querySelector('input') ?? node`                            |
| `getField`      | `(path, { type? }) => UseFieldReturnType` | Field object with the same type as `useField`, see [getField](#getfield)                                                                                                                             |

**`getInputProps` options:**

```ts
{
  type?: 'input' | 'checkbox' | 'radio' // 'checkbox' and 'radio' return checked instead of value
  value?: string                        // required for type: 'radio' — the value of this radio option
  withError?: boolean                   // default true — include the error prop
  withFocus?: boolean                   // default true (false for type: 'radio') — include onFocus/onBlur
}
```

---

## useField hook

Standalone single-field hook, no full form needed. Uncontrolled by default like `useForm`.

```ts
const field = useField({
  initialValue,
  validate?,            // (value) => ReactNode | Promise<ReactNode>
  validateOnChange?,    // boolean, default false
  validateOnBlur?,      // boolean, default false
  clearErrorOnChange?,  // boolean, default true
  initialError?,
  initialTouched?,      // boolean, default false
  onValueChange?,
  type?,                // 'input' | 'checkbox' | 'radio', default 'input'
  mode?,                // 'controlled' | 'uncontrolled', default 'uncontrolled'
  resolveValidationError?,
})
```

**Return value** (`UseFieldReturnType<Value, FieldType>`):

```ts
{
  getInputProps(options?) // spread on the input
  getValue()              // current value
  setValue(value)         // set value, updates the input
  reset()                 // initial value, no error, not touched
  validate()              // Promise<ReactNode | void>, resolves with the error
  isValidating            // boolean
  error                   // ReactNode, safe in render
  setError(error)
  isTouched()             // boolean
  isDirty()               // boolean
  resetTouched()
}
```

---

## getField

`form.getField(path, { type? })` returns a `UseFieldReturnType` bound to a form field. A
component typed with `field: UseFieldReturnType<string>` works with any form and with `useField`.
The path must exist in form values and its value type must match the component.

```tsx
<EmailField field={form.getField('contact.email')} />
<TermsField field={form.getField('terms', { type: 'checkbox' })} />  // UseFieldReturnType<boolean, 'checkbox'>
<EmailField field={useField({ initialValue: '' })} />
```

Validation rules stay on `useForm` / `useField`: export the rule next to the component
(`export const emailRule = isEmail('Invalid email')`) and use it in each form.

---

## useFormField

From `@mantine/hooks`. Subscribes a custom input to the form field attached to the `onChange`
handler that `form.getInputProps` returns. `useField` handlers for `type: 'radio'` are not bound. Mantine inputs and components
built with `useUncontrolled` already call it.

```ts
const field = useFormField<Value>(onChange, {
  subscribe?,        // default true: the component must render field.value instead of the value prop
  onExternalWrite?,  // (value) => void, called when the form writes the field (setFieldValue,
                     // setValues, reset, resetField, initialize, list handlers) and when the
                     // component is bound to another path. Update internal state only, never call onChange
});

field.bound       // true when onChange carries a field
field.subscribed  // true when the component must render field.value
field.path        // field path or null
field.value       // current value when subscribed
```

With `subscribe: false` the component renders its `value` prop and the form component rerenders
on its changes, as for a native input.

---

## createFormContext

Shares a `useForm` instance across components through React context.

```ts
const [FormProvider, useFormContext, useForm] = createFormContext<Values>();

// With transformValues, pass the transformed type as the second generic
const [FormProvider, useFormContext, useForm] = createFormContext<Values, TransformedValues>();
```

- **`FormProvider`** — `<FormProvider form={form}>` wraps the subtree
- **`useFormContext`** — returns the form anywhere inside the provider (throws outside)
- **`useForm`** — same as the package `useForm`, typed to `Values`

For a few child components, passing `form` as a prop typed with a shared
`type ProfileForm = UseFormReturnType<ProfileValues>` is simpler than context.

---

## createFormActions

Controls a named form from outside its React tree.

```ts
// Form name must match the `name` option passed to useForm
export const settingsFormActions = createFormActions<SettingsValues>('settings-form');

const form = useForm({
  // Required for createFormActions('settings-form') to reach this form
  name: 'settings-form',
  initialValues: { ... },
});
```

The form must be mounted for actions to have an effect. Actions take the same arguments as the
form's own methods but return nothing (`validate` and `validateField` included). There is no
`submit` or `resetField` action: to submit from outside, give the `<form>` an `id` and use
`<Button type="submit" form="that-id">`.

**Available actions:** `setFieldValue`, `setValues`, `setInitialValues`, `setErrors`,
`setFieldError`, `clearFieldError`, `clearErrors`, `reset`, `validate`, `validateField`,
`insertListItem`, `removeListItem`, `reorderListItem`, `setDirty`, `setTouched`, `resetDirty`,
`resetTouched`

---

## schemaResolver

Validates the form with any [Standard Schema](https://standardschema.dev/) library (zod 4,
valibot, arktype). No resolver package is needed.

```ts
import { schemaResolver } from '@mantine/form';

validate: schemaResolver(schema); // validate() returns a Promise, async refinements work
validate: schemaResolver(schema, { sync: true }); // validate() returns a plain result, for synchronous schemas
```

Error keys are the issue paths joined with dots (`user.address.city`, `employees.0.name`), ordered
like the fields in form values, so `Object.keys(errors)[0]` is the first invalid field.
On-change and on-blur validation and `validateField` run the schema and keep only the issues of
that path.

---

## Built-in validators

All validators return a rule `(value) => ReactNode | null` for `validate`; `matchesField` also
reads the second `values` argument and `when` passes all rule arguments through. To use a
validator inside your own rule, call it with the value: `isEmail('Invalid email')(value)`.

`isEmail` and `isUrl` reject an empty string, `matches` does when the regexp does not match `''`. For an optional field, check for empty
yourself: `(value) => (value === '' ? null : isUrl('Invalid URL')(value))`.

| Validator                                   | Signature                                                     | Validates                                                                 |
| ------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `isNotEmpty(error?)`                        | —                                                             | Not null, undefined, false, empty or whitespace string, empty array       |
| `isEmail(error?)`                           | —                                                             | Email format. The regexp is exported as `emailRegexp` for your own checks |
| `isUrl(error?)` or `isUrl(options, error?)` | `options: { protocols?: string[], allowLocalhost?: boolean }` | URL (default: http/https, no localhost)                                   |
| `matches(regexp, error?)`                   | —                                                             | String matches the regexp                                                 |
| `hasLength(payload, error?)`                | `payload: number \| { min?, max? }`                           | String or array length (exact or range), strings are trimmed              |
| `isInRange({ min?, max? }, error?)`         | —                                                             | Number within range, `''` fails                                           |
| `matchesField(fieldName, error?)`           | —                                                             | Value equals another field's value                                        |
| `isNotEmptyHTML(error?)`                    | —                                                             | HTML string has text after stripping tags (rich text editors)             |
| `isJSONString(error?)`                      | —                                                             | String is valid JSON                                                      |
| `isOneOf(values[], error?)`                 | —                                                             | Value is one of the allowed values                                        |
| `when(condition, rule)`                     | `condition: (values) => boolean`                              | Runs `rule` (any validator or custom rule, sync or async) only when `condition(values)` is `true`, otherwise the field is valid |

All `error` arguments are optional `ReactNode`. When omitted, the error is `true`: the input gets
invalid styles without a message.

---

## Validation rule format

```ts
// Rules object — keys match form fields, nested objects follow the values shape
validate: {
  name: isNotEmpty(),
  address: {
    street: isNotEmpty(),
    zip: matches(/^\d{5}$/, 'Invalid ZIP'),
  },
  // List of objects: keys are the item fields, the rule runs for every item.
  // formRootRule validates the array itself; its error is at form.errors.employees
  employees: {
    [formRootRule]: isNotEmpty('At least one employee is required'),
    name: isNotEmpty('Name is required'),
    // List inside a list item: rules nest the same way.
    // Errors: 'employees.0.skills' (root rule), 'employees.0.skills.1.title' (item)
    skills: {
      [formRootRule]: (skills) => (skills.length < 2 ? 'Add at least 2 skills' : null),
      title: isNotEmpty('Skill is required'),
    },
  },
}

// Function — receives all values, returns an errors object
validate: (values) => ({
  endDate: values.endDate && values.startDate && values.endDate < values.startDate
    ? 'End date must be after start date'
    : null,
})

// Async — return a Promise from any rule, use the signal to cancel stale requests
validate: {
  username: (value, _values, _path, signal) => {
    if (!/^[a-z0-9_]{3,}$/.test(value)) {
      return 'Use at least 3 lowercase letters, numbers or underscores';
    }
    return checkUsername(value, signal); // Promise<string | null>
  },
}
```

Rules are read on every render, so they can use props and state of the component directly.

Validators receive `(value, allValues, fieldPath, abortSignal?)`. For list items `fieldPath`
includes the index: `'employees.1.name'`. A newer validation of the same field aborts the signal
of the previous one; the stale result is ignored.

Error keys follow the order of the rules object (list item errors before the list root error),
so `Object.keys(errors)[0]` is the first invalid field when the rules are in visual order.

---

## Key types

```ts
type FormErrors = Record<string, ReactNode>
type FormStatus = Record<string, boolean>
type FormMode = 'controlled' | 'uncontrolled'

interface FormValidationResult {
  hasErrors: boolean
  errors: FormErrors
}

interface FormFieldValidationResult {
  hasError: boolean
  error: ReactNode
}

type UseFormReturnType<Values, TransformedValues = Values> // type of the `form` object, for props
type TransformedValues<typeof form>  // type the onSubmit handler receives after transformValues
type UseFieldReturnType<Value, FieldType = 'input'> // type of useField / form.getField results
type FormRulesRecord<Values>         // shape of the `validate` rules object
type LooseKeys<Values>               // union of all dot paths into Values
type FormPath<Values, Value>         // dot paths whose value is assignable to Value
type FormArrayElement<Values, Path>  // item type of the list at Path
```

Declare one form type per feature and import it in every child component:

```ts
// types.ts
export interface SettingsValues { ... }
export type SettingsForm = UseFormReturnType<SettingsValues>;
```
