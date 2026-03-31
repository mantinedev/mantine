# formStatus
Package: @mantine/form
Import: import { FormStatus } from '@mantine/form';

## Touched and dirty state

`form.isTouched` and `form.isDirty` fields provide information about the current field status:

* A field is considered to be `touched` when the user focused it or its value was changed programmatically with the `form.setFieldValue` handler
* A field is considered to be `dirty` when its value was changed and the new value is different from the field value specified in `initialValues` (compared with [fast-deep-equal](https://www.npmjs.com/package/fast-deep-equal))

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: 'initial value' },
  });

  return (
    <div>
      <TextInput
        {...form.getInputProps('text')}
        key={form.key('text')}
        label="Touched/dirty demo"
        placeholder="Touched/dirty demo"
      />

      <Button
        onClick={() =>
          console.log({ touched: form.isTouched('text'), dirty: form.isDirty('text') })
        }
      >
        Log status to console
      </Button>
    </div>
  );
}
```


## isTouched and isDirty functions

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1, nested: { field: '' } },
});

// Provide path as the first argument to get the state of a single field
form.isTouched('a'); // -> was field 'a' focused or changed?
form.isDirty('a'); // -> was field 'a' modified?
form.isDirty('nested.field'); // -> nested fields are also supported

// If the field path is not provided,
// then the functions will return the form state instead
form.isTouched(); // -> was any field in the form focused or changed?
form.isDirty(); // -> was any field in the form modified?
```

## touchTrigger option

The `touchTrigger` option allows customizing events that change the touched state.
It accepts two options:

* `change` (default) – the field will be considered touched when its value changes or it has been focused
* `focus` – the field will be considered touched only when it has been focused

Example of using `focus` trigger:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1 },
  touchTrigger: 'focus',
});

form.isTouched('a'); // -> false
form.setFieldValue('a', 2);
form.isTouched('a'); // -> false

// onFocus is called automatically when the user focuses the field
form.getInputProps('a').onFocus();
form.isTouched('a'); // -> true
```

## Initial values

You can provide initial touched and dirty values with the `initialTouched` and `initialDirty` properties.
Both properties support [the same field path format as errors](https://mantine.dev/llms/form-errors.md):

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1, nested: { field: '' } },
  initialTouched: { a: true, 'nested.field': true },
  initialDirty: { a: true, 'nested.field': true },
});
```

## resetTouched and resetDirty

The `form.resetTouched` and `form.resetDirty` functions will make all fields clean and untouched.
Note that `form.reset` will also reset the `touched` and `dirty` state:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1 },
  initialTouched: { a: true },
  initialDirty: { a: true },
});

form.isDirty('a'); // -> true
form.isTouched('a'); // -> true

form.resetTouched();
form.isTouched('a'); // -> false

form.resetDirty();
form.isDirty('a'); // -> false
```

To reset the values that are used for the dirty check, call `form.resetDirty` with new values:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: 1 },
});

form.setValues({ a: 2 });
form.isDirty(); // -> true

form.resetDirty({ a: 2 });
form.isDirty(); // -> false

form.setValues({ a: 3 });
form.isDirty(); // -> true
```

## Submitting state

The `form.submitting` field will be set to `true` if the function passed to
`form.onSubmit` returns a promise. After the promise is resolved or rejected,
`form.submitting` will be set to `false`:

```tsx
import { useState } from 'react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const asyncSubmit = (values: any) =>
  new Promise((resolve) => setTimeout(() => resolve(values), 3000));

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: 'John' },
  });

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    await asyncSubmit(values);
    setCompleted(true);
  };

  if (completed) {
    return (
      <Stack>
        <Text>Form submitted!</Text>
        <Button onClick={() => setCompleted(false)}>Reset to initial state</Button>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Your name"
        key={form.key('name')}
        disabled={form.submitting}
        {...form.getInputProps('name')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
```


You can also manually set `form.submitting` to `true` or `false`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({ mode: 'uncontrolled' });
form.submitting; // -> false

form.setSubmitting(true);
form.submitting; // -> true

form.setSubmitting(false);
form.submitting; // -> false
```

## Validating state

The `form.validating` property is `true` while any async validation is in
progress. This applies to `form.validate()`, `form.validateField()`,
`form.isValid()`, and the validation triggered by `form.onSubmit`.

`form.isValidating(path)` returns `true` if a specific field is currently being
validated. When `form.validate()` or `form.onSubmit` runs all rules, every field
with a rule is considered validating. When `form.validateField(path)` is called,
only the targeted field is considered validating.

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { username: '' },
  validate: {
    username: async (value) => {
      // simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return value === 'admin' ? 'Username is taken' : null;
    },
  },
});

form.validating; // -> false while idle, true during validation
form.isValidating('username'); // -> true while `username` rule is running
```
