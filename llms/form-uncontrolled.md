# formUncontrolled
Package: @mantine/form
Import: import { FormUncontrolled } from '@mantine/form';

## Controlled mode

Controlled mode is the default mode of the form. In this mode, the form data is
stored in React state and all components are rerendered when form data changes.
Controlled mode is not recommended for large forms.

Example of a form with controlled mode:

#### Example: controlled

```tsx
import { useState } from 'react';
import { Button, Code, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'controlled',
    initialValues: { name: '', email: '' },
    validate: {
      name: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput {...form.getInputProps('name')} label="Name" placeholder="Name" />
      <TextInput {...form.getInputProps('email')} mt="md" label="Email" placeholder="Email" />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}</Code>
    </form>
  );
}
```


As you can see in the example above, `form.values` update on every change. This
means that every component that uses `form.values` will rerender on every change.

## Uncontrolled mode

Uncontrolled mode is an alternative mode of the form introduced in 7.8.0 release.
It is now the recommended mode for all forms.
Uncontrolled mode provides significant performance improvements for large forms.

With uncontrolled mode, the form data is stored in a ref instead of React state
and `form.values` are not updated on every change.

Example of a form with uncontrolled mode:

#### Example: uncontrolled

```tsx
import { useState } from 'react';
import { Button, Code, Text, TextInput } from '@mantine/core';
import { hasLength, isEmail, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: hasLength({ min: 3 }, 'Must be at least 3 characters'),
      email: isEmail('Invalid email'),
    },
  });

  const [submittedValues, setSubmittedValues] = useState<typeof form.values | null>(null);

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <TextInput
        {...form.getInputProps('email')}
        key={form.key('email')}
        mt="md"
        label="Email"
        placeholder="Email"
      />
      <Button type="submit" mt="md">
        Submit
      </Button>

      <Text mt="md">Form values:</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>

      <Text mt="md">Submitted values:</Text>
      <Code block>{submittedValues ? JSON.stringify(submittedValues, null, 2) : '–'}</Code>
    </form>
  );
}
```


As you can see in the example above, `form.values` do not update at all.

## form.getValues

`form.getValues` function returns current form values. It can be
used anywhere in the component to get the current form values. It can
be used in both controlled and uncontrolled modes.

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: 'John Doe' },
});

form.getValues(); // { name: 'John Doe' }

form.setValues({ name: 'John Smith' });
form.getValues(); // { name: 'John Smith' }
```

Although `form.values` can be used to get the current form values in controlled mode, it is
recommended to use `form.getValues` instead as it always returns the latest
values while `form.values` is outdated in uncontrolled mode and before state
update in controlled mode.

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: 'John Doe' },
});

const handleNameChange = () => {
  form.setFieldValue('name', 'Test Name');

  // ❌ Do not use form.values to get the current form values
  // form.values has stale name value until next rerender in controlled mode
  // and is always outdated in uncontrolled mode
  console.log(form.values); // { name: 'John Doe' }

  // ✅ Use form.getValues to get the current form values
  // form.getValues always returns the latest form values
  console.log(form.getValues()); // { name: 'Test Name' }
};
```

`form.getValues()` returns a ref value of the current form values. This means that
you cannot pass it to `useEffect` dependencies array as it will always be the same
reference.

```tsx
import { useEffect } from 'react';
import { useForm } from '@mantine/form';

const form = useForm({ mode: 'uncontrolled' });

useEffect(() => {
  // ❌ This will not work as form.getValues() is a ref value
  // and will always be the same reference
}, [form.getValues()]);
```

Instead of observing form values with `useEffect`, use `onValuesChange` callback
to listen to form values changes:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: 'John Doe' },
  onValuesChange: (values) => {
    // ✅ This will be called on every form values change
    console.log(values);
  },
});
```

## form.getInputProps

[form.getInputProps](https://mantine.dev/form/get-input-props/) returns different props for controlled
and uncontrolled modes. In controlled mode, the returned object has `value` prop,
while in uncontrolled mode it has `defaultValue` prop.

Uncontrolled mode relies on `key` returned from `form.key()` to update
components when `form.setFieldValue` or `form.setValues` are called. You should
set `key` supplied by `form.key()` to the input component to ensure that it has
updated value:

```tsx
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: '' },
  });

  return (
    <input {...form.getInputProps('text')} key={form.key('text')} />
  );
}
```

In case you need to have a [list of fields](https://mantine.dev/form/nested/#nested-arrays),
do not pass `key` to the input component directly, instead add a wrapper
element and pass `key` to it:

```tsx
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

// ❌ Incorrect: Do not override key prop, even in lists
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      jobs: [{ company: 'Google' }, { company: 'Facebook' }],
    },
  });

  const fields = form.getValues().jobs.map((_, index) => (
      <input
        {...form.getInputProps(`jobs.${index}.company`)}
        key={index}
      />
    ));

  return <form>{fields}</form>;
}

// ✅ Correct: Add wrapper element and pass key to it
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      jobs: [
        { company: 'Google', key: randomId() },
        { company: 'Facebook', key: randomId() },
      ],
    },
  });

  const fields = form.getValues().jobs.map((item, index) => (
      <div key={item.key}>
        <input
          {...form.getInputProps(`jobs.${index}.company`)}
          key={form.key(`jobs.${index}.company`)}
        />
      </div>
    ));

  return <form>{fields}</form>;
}
```

## Uncontrolled mode in custom components

If you want to build a custom component that supports uncontrolled form mode,
you must add support for `defaultValue` prop. The best way to add support for
`defaultValue` is to use [use-uncontrolled](https://mantine.dev/hooks/use-uncontrolled/) hook:

```tsx
import { useUncontrolled } from '@mantine/hooks';

interface CustomInputProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

// ✅ CustomInput supports both controlled and uncontrolled modes
function CustomInput({
  value,
  defaultValue,
  onChange,
}: CustomInputProps) {
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: 'Final',
    onChange,
  });

  return (
    <input
      type="text"
      value={_value}
      onChange={(event) => handleChange(event.currentTarget.value)}
    />
  );
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { text: 'Initial' },
  });

  // ✅ CustomInput supports `defaultValue` prop,
  // it can be used in uncontrolled mode
  return (
    <CustomInput
      {...form.getInputProps('text')}
      key={form.key('text')}
    />
  );
}
```
