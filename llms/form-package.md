# FormPackage
Package: @mantine/form
Import: import { FormPackage } from '@mantine/form';

# Mantine form

[![npm](https://img.shields.io/npm/dm/@mantine/form)](https://www.npmjs.com/package/@mantine/form)

[@mantine/form](https://www.npmjs.com/package/@mantine/form) package
contains the `useForm` hook that manages form state, validation, and submission.
The `useForm` hook is designed to be used with other Mantine libraries (`@mantine/core`, `@mantine/dates`, etc.)
– all Mantine inputs are compatible with `useForm` out of the box.

## Installation

```bash
yarn add @mantine/form
```

```bash
npm install @mantine/form
```

## Usage

The `@mantine/form` package can be used in any web React application.
Although the package is designed to work with Mantine components, it can
be used with native inputs or any other form libraries – it is standalone
and does not have any dependencies except React.

Example of using the `useForm` hook to create a simple form:

```tsx
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```


## License

MIT
