# formValidators
Package: @mantine/form
Import: import { FormValidators } from '@mantine/form';

## Usage

`@mantine/form` package exports several functions that can be used in [validation rules object](https://mantine.dev/form/validation/#validation-with-rules-object).
Validation functions are tiny in size and provide basic validation, if you have complex validation requirements, use other types of [validation](https://mantine.dev/form/validation/).

#### Example: validators

```tsx
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```


## Optional error

Last argument of all validator functions below is optional. If error is not set, then fields with failed validation will
only have invalid styles without error message:

#### Example: validatorsEmpty

```tsx
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```


## isNotEmpty

`isNotEmpty` checks that form value is not empty. Empty string, empty array, `false`, `null` and `undefined`
values are considered to be empty. Strings are trimmed before validation.

```tsx
import { isNotEmpty, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    name: '',
    acceptTermsOfUse: false,
    country: null,
    previousJobs: [],
  },

  validate: {
    // Empty strings are considered to be invalid
    name: isNotEmpty('Name cannot be empty'),

    // False value is considered to be invalid
    acceptTermsOfUse: isNotEmpty('You must accept terms of use'),

    // null is considered to be invalid
    country: isNotEmpty('Pick your country'),

    // Empty arrays are considered to be invalid
    previousJobs: isNotEmpty('Enter at least one job'),
  },
});
```

## isEmail

`isEmail` uses `/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/` regexp to determine whether form value is an email:

```tsx
import { isEmail, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    email: '',
  },

  validate: {
    email: isEmail('Invalid email'),
  },
});
```

## matches

`matches` checks whether form value matches given regexp. If form value is not a string, validation will be failed.

```tsx
import { matches, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    color: '',
  },

  validate: {
    color: matches(/^#([0-9a-f]{3}){1,2}$/, 'Invalid color'),
  },
});
```

## isInRange

`isInRange` checks whether form value is within given `min`-`max` range. If form value is not a number, validation will be failed.

```tsx
import { isInRange, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    maxRange: 0,
    minRange: 0,
    minMaxRange: 0,
  },

  validate: {
    maxRange: isInRange({ max: 20 }, 'Value must be 20 or less'),
    minRange: isInRange({ min: 10 }, 'Value must be 10 or more'),
    minMaxRange: isInRange(
      { min: 10, max: 20 },
      'Value must be between 10 and 20'
    ),
  },
});
```

## hasLength

`hasLength` check whether form value length is within given `min`-`max` range.
`hasLength` will work correctly with strings, arrays and any other objects that have `length` property.
Strings are trimmed before validation.

```tsx
import { hasLength, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    exact: '',
    maxLength: '',
    minLength: '',
    minMaxLength: '',
  },

  validate: {
    exact: hasLength(5, 'Values must have exactly 5 characters'),
    maxLength: hasLength(
      { max: 20 },
      'Value must have 20 or less characters'
    ),
    minLength: hasLength(
      { min: 10 },
      'Value must have 10  or more characters'
    ),
    minMaxLength: hasLength(
      { min: 10, max: 20 },
      'Value must have 10-20 characters'
    ),
  },
});
```

## matchesField

`matchesField` checks whether form value is the same as value in other form field.
Note that `matchesField` can only work with primitive values (arrays and objects cannot be compared).

```tsx
import { matchesField, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    password: '',
    confirmPassword: '',
  },

  validate: {
    confirmPassword: matchesField(
      'password',
      'Passwords are not the same'
    ),
  },
});
```

## isJSONString

`isJSONString` checks whether form value is a valid JSON string.

```tsx
import { isJSONString, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    json: '',
  },

  validate: {
    json: isJSONString('Invalid JSON string'),
  },
});
```

## isNotEmptyHTML

`isNotEmptyHTML` checks that form value is not an empty HTML string. Empty string, string with only HTML tags and whitespace are considered to be empty.

```tsx
import { isNotEmptyHTML, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    html: '',
  },

  validate: {
    html: isNotEmptyHTML('HTML cannot be empty'),
  },
});
```
