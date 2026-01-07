# formStatus
Package: @mantine/form
Import: import { FormStatus } from '@mantine/form';

## Touched and dirty state

`form.isTouched` and `form.isDirty` fields provide information about current field status:

* Field is considered to be `touched` when user focused it or its value was changed programmatically with `form.setFieldValue` handler
* Field is considered to be `dirty` when its value was changed and new value is different from field value specified in `initialValues` (compared with [fast-deep-equal](https://www.npmjs.com/package/fast-deep-equal))

#### Example: status

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

// Provide path as first argument to get state of single field
form.isTouched('a'); // -> was field 'a' focused or changed?
form.isDirty('a'); // -> was field 'a' modified?
form.isDirty('nested.field'); // -> nested fields are also supported

// If field path is not provided,
// then functions will return form state instead
form.isTouched(); // -> was any field in form focused or changed?
form.isDirty(); // -> was any field in form modified?
```

## touchTrigger option

`touchTrigger` option allows customizing events that change touched state.
It accepts two options:

* `change` (default) – field will be considered touched when its value changes or it has been focused
* `focus` – field will be considered touched only when it has been focused

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

You can provide initial touched and dirty values with `initialTouched` and `initialDirty` properties.
Both properties support [the same fields path format as errors](https://mantine.dev/form/errors/):

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

`form.resetTouched` and `form.resetDirty` functions will make all fields clean and untouched.
Note that `form.reset` will also reset `touched` and `dirty` state:

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

To reset values that are used for dirty check call `form.resetDirty` with new values:

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

`form.submitting` field will be set to `true` if function passed to
`form.onSubmit` returns a promise. After the promise is resolved or rejected,
`form.submitting` will be set to `false`:

#### Example: submitting

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
