# use-field
Package: @mantine/form
Import: import { use-field } from '@mantine/form';
Description: use-field hook – manage single field state

## Usage

The `use-field` hook is a simpler alternative to [use-form](https://mantine.dev/llms/form-use-form.md). It can be used to
manage the state of a single input without the need to create a form:

```tsx
import { Button, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
```


## use-field API

The `use-field` hook accepts the following options object as a single argument:

```tsx
interface UseFieldInput<T> {
  /** Field mode, controlled by default */
  mode?: 'controlled' | 'uncontrolled';

  /** Initial field value */
  initialValue: T;

  /** Initial touched value */
  initialTouched?: boolean;

  /** Initial field error message */
  initialError?: React.ReactNode;

  /** Called with updated value when the field value changes */
  onValueChange?: (value: T) => void;

  /** Determines whether the field should be validated when value changes, false by default */
  validateOnChange?: boolean;

  /** Determines whether the field should be validated when it loses focus, false by default */
  validateOnBlur?: boolean;

  /** Determines whether the field should clear the error message when value changes, true by default */
  clearErrorOnChange?: boolean;

  /** A function to validate field value, can be sync or async */
  validate?: (value: T) => React.ReactNode | Promise<React.ReactNode>;

  /** Field type, input by default */
  type?: 'input' | 'checkbox';

  /** A function to resolve the validation error from the result returned from the validate function, should return a react node */
  resolveValidationError?: (error: unknown) => React.ReactNode;
}
```

And returns the following object:

```tsx
export interface UseFieldReturnType<ValueType> {
  /** Returns props to pass to the input element */
  getInputProps: () => {
    /* props for input component */
  };

  /** Returns current input value */
  getValue: () => ValueType;

  /** Sets the input value to the given value */
  setValue: (value: ValueType) => void;

  /** Resets the field value to initial state, sets touched state to false, sets error to null */
  reset: () => void;

  /** Validates the current input value when called */
  validate: () => Promise<React.ReactNode | void>;

  /** Set to true when the async validate function is called, stays true until the returned promise resolves */
  isValidating: boolean;

  /** Current error message */
  error: React.ReactNode;

  /** Sets the error message to the given react node */
  setError: (error: React.ReactNode) => void;

  /** Returns true if the input has been focused at least once */
  isTouched: () => boolean;

  /** Returns true if input value is different from the initial value */
  isDirty: () => boolean;

  /** Resets the touched state to false */
  resetTouched: () => void;

  /** key that should be added to the input when the mode is uncontrolled */
  key: number;
}
```

## Validate on blur

To validate the field on blur, set the `validateOnBlur` option to `true`:

```tsx
import { TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnBlur: true,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" />;
}
```


## Validate on change

To validate the field on change, set the `validateOnChange` option to `true`:

```tsx
import { TextInput } from '@mantine/core';
import { useField, isEmail } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnChange: true,
    validate: isEmail('Invalid email'),
  });

  return <TextInput {...field.getInputProps()} label="Email" placeholder="Enter your email" />;
}
```


## Async validation

The `validate` option accepts both async and sync functions. In both cases, the function
must return an error message that will be displayed to the user or `null` if the value
is valid. To keep track of async validation state, use the `isValidating` property:

```tsx
import { Button, Loader, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function validateAsync(value: string): Promise<string | null> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(value === 'mantine' ? null : 'Value must be "mantine"');
    }, 800);
  });
}

function Demo() {
  const field = useField({
    initialValue: '',
    validate: validateAsync,
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        label="Enter 'mantine'"
        placeholder="Enter 'mantine'"
        rightSection={field.isValidating ? <Loader size={18} /> : null}
        mb="md"
      />
      <Button onClick={field.validate}>Validate async</Button>
    </>
  );
}
```


Async validation can be used with the `validateOnBlur` option, but it's not recommended with
`validateOnChange` because it will trigger validation on every key press, which may
lead to race conditions:

```tsx
import { Loader, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function validateAsync(value: string): Promise<string | null> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(value === 'mantine' ? null : 'Value must be "mantine"');
    }, 800);
  });
}

function Demo() {
  const field = useField({
    initialValue: '',
    validateOnBlur: true,
    validate: validateAsync,
  });

  return (
    <TextInput
      {...field.getInputProps()}
      label="Enter 'mantine'"
      placeholder="Enter 'mantine'"
      rightSection={field.isValidating ? <Loader size={18} /> : null}
    />
  );
}
```


## Touched and dirty

To get information about whether the field has been focused at least once, use the `isTouched` method.
To check if the value has been changed from the initial value, use the `isDirty` method:

```tsx
import { Text, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({ initialValue: '' });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />

      <Text fz="sm">
        Dirty:{' '}
        <Text span inherit c={field.isDirty() ? 'red' : 'teal'}>
          {field.isDirty() ? 'dirty' : 'not dirty'}
        </Text>
      </Text>
      <Text fz="sm">
        Touched:{' '}
        <Text span inherit c={field.isTouched() ? 'red' : 'teal'}>
          {field.isTouched() ? 'touched' : 'not touched'}
        </Text>
      </Text>
    </>
  );
}
```


## Clear error on change

By default, the error message is cleared when the value changes. To disable this behavior,
set the `clearErrorOnChange` option to `false`:

```tsx
import { Button, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    initialValue: '',
    clearErrorOnChange: false,
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput {...field.getInputProps()} label="Name" placeholder="Enter your name" mb="md" />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
```


## Uncontrolled mode

The uncontrolled mode of the `use-field` hook works similarly to the uncontrolled mode of [use-form](https://mantine.dev/llms/form-uncontrolled.md).
In uncontrolled mode, rerenders are minimized and the input value is managed by the input itself.
It is useful if you experience performance issues with controlled mode, but in most cases controlled
mode is recommended as it always provides up-to-date field information as React state.

```tsx
import { Button, TextInput } from '@mantine/core';
import { useField } from '@mantine/form';

function Demo() {
  const field = useField({
    mode: 'uncontrolled',
    initialValue: '',
    validate: (value) => (value.trim().length < 2 ? 'Value is too short' : null),
  });

  return (
    <>
      <TextInput
        {...field.getInputProps()}
        key={field.key}
        label="Name"
        placeholder="Enter your name"
        mb="md"
      />
      <Button onClick={field.validate}>Validate</Button>
    </>
  );
}
```

