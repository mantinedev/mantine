---
name: mantine-form
description: >
  Build forms using @mantine/form. Use this skill when: (1) setting up a form with useForm,
  (2) adding validation rules, schema validation (zod, valibot, arktype) or async validation,
  (3) working with nested object or array fields, (4) reading values, dirty or touched state
  during render (useWatchValue, useDirty, useTouched), (5) splitting a form into components or
  reusing field components across forms (createFormContext, getField), (6) building custom
  inputs that work with getInputProps (useFormField), (7) using the standalone useField hook, or
  (8) any task involving useForm, getInputProps, onSubmit, insertListItem, or form validation.
---

# Mantine Form Skill

Written for Mantine 10.x. Upgrading code written for 9.x: see [Coming from 9.x](#coming-from-9x).

## Core Workflow

### 1. Set up the form

```tsx
import { isEmail, isInRange, useForm } from '@mantine/form';

interface ProfileValues {
  email: string;
  age: number | string;
}

const form = useForm<ProfileValues>({
  initialValues: {
    email: '',
    age: '',
  },
  validate: {
    email: isEmail('Invalid email'),
    age: isInRange({ min: 18 }, 'Must be at least 18'),
  },
});
```

The form is uncontrolled by default: values live outside React state, typing rerenders only
the input, not the component that calls `useForm`. Do not write `mode: 'uncontrolled'`. Set
`mode: 'controlled'` only for a small form that renders `form.values` directly.

Give every form a `name` in kebab-case (`useForm({ name: 'job-application', ... })`): it
prefixes the `data-path` attributes and lets `createFormActions(name)` control the form from
outside.

Give every field rendered with an input an initial value (`''`, `null`, `false`, `[]`), otherwise
React warns about an input switching from uncontrolled to controlled. `NumberInput` uses
`number | string` with `''` for empty, `Select` and dates inputs use `string | null`.

### 2. Wire inputs with getInputProps

```tsx
<TextInput label="Email" {...form.getInputProps('email')} />
<NumberInput label="Age" allowNegative={false} allowDecimal={false} {...form.getInputProps('age')} />
```

No `key` prop is needed: inputs update after `setFieldValue`, `setValues`, `reset` and list handlers.

Checkboxes and switches need `{ type: 'checkbox' }`:

```tsx
<Checkbox label="I agree" {...form.getInputProps('agreed', { type: 'checkbox' })} />
```

`Select`, `MultiSelect`, `TagsInput`, `NumberInput`, `Radio.Group`, `Checkbox.Group`, dates inputs
and other Mantine inputs with a `value` / `onChange` pair work with plain `getInputProps`:

```tsx
<Radio.Group label="Delivery" {...form.getInputProps('delivery')}>
  <Group mt="xs">
    <Radio value="standard" label="Standard" />
    <Radio value="express" label="Express" />
  </Group>
</Radio.Group>
```

Components without an `error` message prop (`Slider`, `RangeSlider`, `Rating`, `SegmentedControl`,
`Chip.Group`, and `PinInput`, whose `error` is a boolean) need `{ withError: false }`. Wrap them in
`Input.Wrapper` to get a label and an error that look like the other inputs. Never render errors
with `<Text c="red">`:

```tsx
<Input.Wrapper label="Stock level" error={form.errors.stock}>
  <Slider {...form.getInputProps('stock', { withError: false })} />
</Input.Wrapper>
```

### 3. Handle submission

```tsx
const handleSubmit = async (values: ProfileValues) => {
  await saveProfile(values);
  notifications.show({ title: 'Profile saved', message: values.email });
};

// Rules object order decides the key order of errors: the first key is the first invalid field
const handleErrors = (errors: FormErrors) => {
  form.getInputNode(Object.keys(errors)[0])?.focus();
};

<form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
  ...
  <Group justify="flex-end">
    <Button type="submit" loading={form.submitting}>
      Save
    </Button>
  </Group>
</form>;
```

`onSubmit` calls the handler only when validation passes. `form.submitting` is `true` during
async validation and until the promise returned by the handler settles (resolved or rejected).
Catch request errors inside the handler and turn them into form errors, see the server errors
pattern.

### 4. Files and code style

One folder per form. `<Name>Form.tsx` holds `useForm`, navigation between steps and submission;
each step, tab, section, repeated row or type-specific options block is a component in its own
file that takes `form` as a prop — a `switch` that renders different fields per variant is one
file per variant (`options/TextOptions.tsx`, `options/SelectOptions.tsx`), not one file with a
`switch`. `types.ts` holds the values interface and the form type; validation rules and
constants live in `validation.ts`. Name the form type after the values, not after the component:
`type ProfileFormType = UseFormReturnType<ProfileValues>` when the component is `ProfileForm`. A
file over about 150 lines is a sign to split further. Each component that needs styles has its
own `<Name>.module.css` next to it; no shared stylesheet for the whole form.
See [splitting a form into components](references/patterns.md#splitting-a-form-into-components).

Comments only where the code cannot explain itself: a workaround, a browser or library behavior
the next reader would not expect (`// preventDefault keeps focus in the input so its blur error
does not shift the button`). No comments that restate what the code does, no JSDoc on internal
helpers.

### 5. UI details

This skill covers form logic only. Which input to use for a piece of data, placeholders,
button variants, icon actions, cards, modals and spacing are decided by the `mantine-ui` skill:
read it before writing the markup of a form. Forms in modals open the modal with `useModal`
(see [form in a modal](references/patterns.md#form-in-a-modal)), not with `useDisclosure`.

### 6. Tests

Tests are written with the `mantine-testing` skill: one observable behavior per test, queries by
role and label, `render` inside `MantineProvider` with `env="test"`, and the jsdom recipes for
Mantine inputs (picker inputs open a drawer in jsdom and apply the value on `Save`). The
[forms checklist](../mantine-testing/references/forms.md) lists what every form test file covers.

## Validation

### Rules object (most common)

```tsx
validate: {
  name: isNotEmpty('Required'),
  email: isEmail('Invalid email'),
  password: hasLength({ min: 8 }, 'Min 8 characters'),
  confirmPassword: matchesField('password', 'Passwords do not match'),
  terms: isNotEmpty('You must accept terms'),
  companyName: when((values) => values.isCompany, isNotEmpty('Company name is required')),
}
```

Rules receive `(value, values, path, signal)`, so cross-field and conditional rules read other
fields from `values`. `when(condition, rule)` runs `rule` only when `condition(values)` returns
`true`, otherwise the field is valid.

### Schema (zod 4, valibot, arktype and other Standard Schema libraries)

```tsx
import { z } from 'zod';
import { schemaResolver, useForm } from '@mantine/form';

const schema = z.object({
  email: z.email({ error: 'Invalid email' }),
  age: z.number({ error: 'Age is required' }).min(18, { error: 'Must be at least 18' }),
});

const form = useForm({
  initialValues: { email: '', age: '' as number | '' },
  validate: schemaResolver(schema, { sync: true }),
});
```

`schemaResolver` is built in, no resolver package is needed. Pass `{ sync: true }` for
synchronous schemas so that `form.validate()` returns a plain result instead of a `Promise`.
Async refinements work without it (see the async validation pattern). The schema only validates:
the `onSubmit` handler receives the form values (or the `transformValues` result), not the
schema's parsed output. Error keys follow the order of the fields in form values (`initialValues`),
not the order of the schema issues.

Zod 4 skips object-level `refine` / `superRefine` when a field of the object has a type error,
for example `null` from an empty `Select` checked with `z.string()`. Format errors (`''` for
`z.email()`) do not block it. Accept the empty value in the field schema
(`z.string().nullable()`) and report "required" from the refinement, or use a rules object.

### When to validate

Fields are validated on submit only by default. Choose the trigger per field:

```tsx
validateInputOnBlur: ['email', 'linkedin', 'salary'],  // single-value inputs
validateInputOnChange: ['username'],                   // async availability checks, with validateDebounce
validateInputOnChange: [`skills.${FORM_INDEX}.name`],  // list items, FORM_INDEX is exported from @mantine/form
```

- Never validate multi-part inputs (phone with a country select, date ranges, `PinInput`) on blur
  or on change: moving between the parts shows an error before the user could finish.
- Never validate numeric or length rules on change: every partial value is an error. Validate on
  blur or on submit, and show live feedback for length rules as a counter, for example in the
  `bottomSection` of a `Textarea`.
- With validation on blur, pressing the submit button blurs the field, its error appears and
  shifts the layout under the pointer, and the click misses the button. Add
  `onMouseDown={(event) => event.preventDefault()}` to the submit button: the field keeps focus
  until the click completes.

## What rerenders

The component that calls `useForm` does **not** rerender when the user types into a Mantine input
or any input built with `useUncontrolled` or `useFormField`. It **does** rerender when:

- an error is set or cleared, `form.submitting` or `form.validating` changes
- the form writes a value: `setFieldValue`, `setValues`, `reset`, `resetField`, `initialize`, list handlers
- a field changes and its input is not subscribed (a native `<input>`, a third-party component)

Consequences:

- Read values in render with `form.useWatchValue(path)`, it rerenders the calling component when
  that field changes. `form.getValues()` and `form.values` in render do not subscribe and go stale
  as the user types. Read the current values with `form.getValues()` in handlers.
- Read dirty and touched state in render with `form.useDirty(path?)` and `form.useTouched(path?)`.
  `form.isDirty()` and `form.isTouched()` are for handlers only.
- `form.errors`, `form.submitting`, `form.validating` and `form.isValidating(path)` are safe in render.
- Rendering a list from `form.getValues().items.map(...)` is correct: list handlers rerender.

```tsx
const shipsInternationally = form.useWatchValue('shipsInternationally');
const dirty = form.useDirty();

<Button type="submit" disabled={!dirty}>
  Save
</Button>;
```

Bind each field path to a single input. A native `<input>` that shares a path with a Mantine input
is not updated while the user types in the Mantine input.

## Coming from 9.x

- Remove `mode: 'uncontrolled'` (default now) and every `key={form.key(path)}`. `form.key`,
  `useField().key` and the `Key` type no longer exist. List rows use a stable id stored in the item.
- A form that was controlled by default and reads `form.values` in render: replace the reads with
  `form.useWatchValue(path)`, or set `mode: 'controlled'` to keep the 9.x behaviour.
- `getInputProps` returns `value` / `checked` in both modes. Custom inputs and
  `enhanceGetInputProps` functions that read `defaultValue` must read `value`.
- Replace `form.isDirty()` / `form.isTouched()` in render with `form.useDirty()` / `form.useTouched()`.
- `form.setValues` clears only the errors of the fields it sets: call `form.clearErrors()` first
  if all errors must go.
- Values are not cloned on change: never mutate `form.getValues()`.
- Custom inputs with internal entry state that remounted through `key` now reset in the
  `onExternalWrite` callback of `useFormField`.
- `UseFieldReturnType` takes two type arguments: `UseFieldReturnType<string, 'input', 'uncontrolled'>`
  becomes `UseFieldReturnType<string, 'input'>`.
- The `ClearFieldDirty`, `SetFieldTouched`, `SetFieldDirty` and `SetCalculatedFieldDirty` types are
  removed: use indexed form types instead, for example `UseFormReturnType<Values>['setTouched']`.

## References

For anything beyond a basic form, read the references before writing code. `patterns.md` is long:
read its table of contents and every section that matches the task.

- **[`references/patterns.md`](references/patterns.md)** — read for: async validation with loading and success states, focusing and summarizing errors, validation triggers per field type, conditional fields and sections, generated and dependent fields, totals, copying one group of fields to another, select-all checkboxes, list fields (minimum items, tables, reordering, nested lists, array values), multi-step forms, tabs and accordions with errors, dirty state (save bars, per-field reset, unsaved changes prompts), loading and saving records, autosave, forms in modals, server errors, `transformValues`, splitting a form into components, reusable field components across forms, controlling a form from outside, custom inputs with `useFormField`, rich text editors, OTP inputs, standalone `useField`
- **[`references/api.md`](references/api.md)** — read for everything else. It is the only place that lists every `useForm` option and return member (`watch`, `onValuesChange`, `enhanceGetInputProps`, `cascadeUpdates`, `touchTrigger`, `getField` and others), plus `useField`, `useFormField`, `createFormContext`, `createFormActions`, `schemaResolver`, built-in validators and types

## Looking things up

If the references do not cover what you need, do not guess:

- If the Mantine MCP server (`@mantine/mcp-server`) is connected, use `search_docs` and `get_item_doc`
- Otherwise fetch `https://mantine.dev/llms.txt` and open the linked form pages
- Complete reference forms: `https://mantine.dev/form/examples/<Id>` (for example `LoginForm`,
  `InvoiceItems`, `EditableTable`, `StepperWizard`, `CustomInputSubscription`)
