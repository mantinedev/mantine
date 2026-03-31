# formSchemaValidation
Package: @mantine/form
Import: import { FormSchemaValidation } from '@mantine/form';

## Schema-based validation

`@mantine/form` has built-in support for [Standard Schema](https://standardschema.dev/) –
a community specification implemented by many popular schema validation libraries including
[zod](https://www.npmjs.com/package/zod), [valibot](https://www.npmjs.com/package/valibot),
and [arktype](https://www.npmjs.com/package/arktype). Use `schemaResolver` to validate
forms with any Standard Schema-compliant library without extra resolver packages.

[Full list of supported libraries](https://standardschema.dev/schema#what-schema-libraries-implement-the-spec)

If you do not know which schema validation library to choose, use [zod](https://www.npmjs.com/package/zod) –
it is the most modern and developer-friendly library.

## Sync and async schemas

By default, `schemaResolver` returns a function that may return a `Promise`, since the
Standard Schema specification allows async validation. Pass `{ sync: true }` when you know
your schema is synchronous (e.g., Zod, Valibot) to get synchronous return types for
`form.validate()`, `form.validateField()`, and `form.isValid()`.

## zod

Installation:

```bash
yarn add zod
```

```bash
npm install zod
```

Basic field validation:

```tsx
import { z } from 'zod/v4';
import { useForm, schemaResolver } from '@mantine/form';

const schema = z.object({
  name: z.string().min(2, { error: 'Name should have at least 2 letters' }),
  email: z.email({ error: 'Invalid email' }),
  age: z.number().min(18, { error: 'You must be at least 18 to create an account' }),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    name: '',
    email: '',
    age: 16,
  },
  validate: schemaResolver(schema, { sync: true }),
});

form.validate();
form.errors;
// -> {
//  name: 'Name should have at least 2 letters',
//  email: 'Invalid email',
//  age: 'You must be at least 18 to create an account'
// }
```

Nested field validation:

```tsx
import { z } from 'zod/v4';
import { useForm, schemaResolver } from '@mantine/form';

const nestedSchema = z.object({
  nested: z.object({
    field: z.string().min(2, { error: 'Field should have at least 2 letters' }),
  }),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    nested: {
      field: '',
    },
  },
  validate: schemaResolver(nestedSchema, { sync: true }),
});

form.validate();
form.errors;
// -> {
//  'nested.field': 'Field should have at least 2 letters',
// }
```

List field validation:

```tsx
import { z } from 'zod/v4';
import { useForm, schemaResolver } from '@mantine/form';

const listSchema = z.object({
  list: z.array(
    z.object({
      name: z.string().min(2, { error: 'Name should have at least 2 letters' }),
    })
  ),
});

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    list: [{ name: '' }],
  },
  validate: schemaResolver(listSchema, { sync: true }),
});

form.validate();
form.errors;
// -> {
//  'list.0.name': 'Name should have at least 2 letters',
// }
```

Async validation – use `schemaResolver` without `{ sync: true }` when your schema
includes async checks (e.g., checking if an email is already taken via an API call).
In this case, `form.validate()`, `form.validateField()`, and `form.isValid()` return promises:

```tsx
import { z } from 'zod/v4';
import { useForm, schemaResolver } from '@mantine/form';

const schema = z
  .object({
    email: z.email({ error: 'Invalid email' }),
  })
  .refine(
    async (data) => {
      const isTaken = await checkEmailExists(data.email);
      return !isTaken;
    },
    { error: 'Email is already taken', path: ['email'] }
  );

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { email: '' },
  validate: schemaResolver(schema),
});

// form.validate() returns a Promise
await form.validate();
```
