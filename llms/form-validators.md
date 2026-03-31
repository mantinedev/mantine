# formValidators
Package: @mantine/form
Import: import { FormValidators } from '@mantine/form';

## Usage

The `@mantine/form` package exports several functions that can be used in [validation rules object](https://mantine.dev/llms/form-validation.md#validation-with-rules-object).
Validation functions are tiny in size and provide basic validation. If you have complex validation requirements, use other types of [validation](https://mantine.dev/llms/form-validation.md).

```tsx
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches, isUrl, isOneOf } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, NativeSelect } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
      website: '',
      role: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
      website: isUrl('Invalid URL'),
      role: isOneOf(['developer', 'designer', 'manager'], 'Pick a valid role'),
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
      <TextInput
        label="Your website"
        placeholder="https://example.com"
        withAsterisk
        mt="md"
        key={form.key('website')}
        {...form.getInputProps('website')}
      />
      <NativeSelect
        label="Your role"
        data={['', 'developer', 'designer', 'manager']}
        withAsterisk
        mt="md"
        key={form.key('role')}
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```


## Optional error

The last argument of all validator functions below is optional. If the error is not set, then fields with failed validation will
only have invalid styles without an error message:

```tsx
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches, isUrl, isOneOf } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, NativeSelect } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
      website: '',
      role: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
      website: isUrl(),
      role: isOneOf(['developer', 'designer', 'manager']),
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
      <TextInput
        label="Your website"
        placeholder="https://example.com"
        withAsterisk
        mt="md"
        key={form.key('website')}
        {...form.getInputProps('website')}
      />
      <NativeSelect
        label="Your role"
        data={['', 'developer', 'designer', 'manager']}
        withAsterisk
        mt="md"
        key={form.key('role')}
        {...form.getInputProps('role')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```


## isNotEmpty

`isNotEmpty` checks that the form value is not empty. Empty string, empty array, `false`, `null` and `undefined`
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

`isEmail` uses `/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/` regexp to determine whether the form value is an email:

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

`matches` checks whether the form value matches the given regexp. If the form value is not a string, validation will fail.

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

`isInRange` checks whether the form value is within the given `min`-`max` range. If the form value is not a number, validation will fail.

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

`hasLength` checks whether the form value length is within the given `min`-`max` range.
`hasLength` will work correctly with strings, arrays and any other objects that have a `length` property.
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

`matchesField` checks whether the form value is the same as the value in another form field.
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

`isJSONString` checks whether the form value is a valid JSON string.

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

## isUrl

`isUrl` checks whether the form value is a valid URL. By default, only `http` and `https` protocols are allowed
and `localhost` is rejected. You can customize this behavior by passing options as the first argument.

```tsx
import { isUrl, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    website: '',
    internalUrl: '',
    ftpServer: '',
  },

  validate: {
    // Basic URL validation
    website: isUrl('Invalid URL'),

    // Allow localhost URLs
    internalUrl: isUrl(
      { allowLocalhost: true },
      'Invalid URL'
    ),

    // Allow custom protocols
    ftpServer: isUrl(
      { protocols: ['ftp', 'https'] },
      'Invalid FTP or HTTPS URL'
    ),
  },
});
```

## isOneOf

`isOneOf` checks whether the form value is included in the given list of allowed values.
Uses strict equality for comparison.

```tsx
import { isOneOf, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    role: '',
    priority: 0,
  },

  validate: {
    role: isOneOf(
      ['admin', 'user', 'moderator'],
      'Invalid role'
    ),
    priority: isOneOf([1, 2, 3], 'Priority must be 1, 2, or 3'),
  },
});
```

## isNotEmptyHTML

`isNotEmptyHTML` checks that the form value is not an empty HTML string. Empty string, string with only HTML tags and whitespace are considered to be empty.

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
