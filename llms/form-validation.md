# formValidation
Package: @mantine/form
Import: import { FormValidation } from '@mantine/form';

## Validation with rules object

To validate form with rules object, provide an object of functions which take field value as an argument
and return error message (any React node) or null if field is valid:

#### Example: rulesValidation

```tsx
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
```


## Rule function arguments

Each form rule receives the following arguments:

* `value` – value of field
* `values` – all form values
* `path` – field path, for example `user.email` or `cart.0.price`

`path` argument can be used to get information about field location relative to other fields,
for example you can get index of array element:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { a: [{ b: 1 }, { b: 2 }] },
  validate: {
    a: {
      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),
    },
  },
});
```

## formRootRule

`formRootRule` is a special rule path that can be used to validate objects and arrays
alongside with their nested fields. For example, it is useful when you want to capture
a list of values, validate each value individually and then validate the list itself
to not be empty:

#### Example: rootRuleArray

```tsx
import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Switch, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
    validate: {
      employees: {
        [formRootRule]: isNotEmpty('At least one employee is required'),
        name: isNotEmpty('Name is required'),
      },
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(`employees.${index}.name`)}
        {...form.getInputProps(`employees.${index}.name`)}
      />
      <Switch
        label="Active"
        key={form.key(`employees.${index}.active`)}
        {...form.getInputProps(`employees.${index}.active`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      {form.errors.employees && (
        <Text c="red" size="sm" mt="sm">
          {form.errors.employees}
        </Text>
      )}

      <Group justify="space-between" mt="md">
        <Button
          variant="default"
          onClick={() => {
            form.insertListItem('employees', { name: '', active: false, key: randomId() });
            form.clearFieldError('employees');
          }}
        >
          Add employee
        </Button>
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```


Another example is to validate an object fields combination:

#### Example: rootRuleObject

```tsx
import { Button, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      user: {
        firstName: '',
        lastName: '',
      },
    },

    validate: {
      user: {
        [formRootRule]: (value) =>
          value.firstName.trim().length > 0 && value.firstName === value.lastName
            ? 'First name and last name cannot be the same'
            : null,
        firstName: isNotEmpty('First name is required'),
        lastName: isNotEmpty('Last name is required'),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      {form.errors.user && (
        <Text c="red" mt={5} fz="sm">
          {form.errors.user}
        </Text>
      )}
      <Button type="submit" mt="lg">
        Submit
      </Button>
    </form>
  );
}
```


## Validation based on other form values

You can get all form values as a second rule function argument to perform field validation based on other
form values. For example, you can validate that password confirmation is the same as password:

#### Example: password

```tsx
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
```


## Function based validation

Another approach to handle validation is to provide a function to `validate`.
Function takes form values as single argument and should return object that contains
errors of corresponding fields. If field is valid or field validation is not required, you can either return null or simply omit it
from the validation results.

#### Example: validateFunction

```tsx
import { useForm } from '@mantine/form';
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
            ? 'You must be at least 18'
            : null,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="You age"
          key={form.key('age')}
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
```


## Validate fields on change

To validate all fields on change set `validateInputOnChange` option to `true`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  validateInputOnChange: true,
});
```

#### Example: liveValidation

```tsx
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
```


You can also provide an array of fields paths to validate only those values:

```tsx
import { FORM_INDEX, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  validateInputOnChange: [
    'name',
    'email',
    `jobs.${FORM_INDEX}.title`,
  ],
});
```

#### Example: liveFieldValidation

```tsx
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      `jobs.${FORM_INDEX}.title`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
```


## Validate fields on blur

To validate all fields on blur set `validateInputOnBlur` option to `true`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  validateInputOnBlur: true,
});
```

#### Example: blurValidation

```tsx
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
```


You can also provide an array of fields paths to validate only those values:

```tsx
import { FORM_INDEX, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`],
});
```

#### Example: blurFieldValidation

```tsx
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      `jobs.${FORM_INDEX}.title`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
```


## Clear field error on change

By default, field error is cleared when value changes. To change this, set `clearInputErrorOnChange` to `false`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  clearInputErrorOnChange: false,
});
```

#### Example: clearErrorOnChange

```tsx
import { TextInput, Checkbox, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    clearInputErrorOnChange: false,
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


## Validation in onSubmit handler

`form.onSubmit` accepts two arguments: first argument is `handleSubmit` function that will be called with form values, when validation
was completed without errors, second argument is `handleErrors` function, it is called with errors object when validation was completed with errors.

You can use `handleErrors` function to perform certain actions when user tries to submit form without values,
for example, you can show a notification:

#### Example: onSubmitErrors

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <form onSubmit={form.onSubmit(console.log, handleError)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
```


## isValid handler

`form.isValid` performs form validation with given validation functions, rules object or schema, but unlike
`form.validate` it does not set `form.errors` and just returns boolean value that indicates whether form is valid.

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: '', age: 0 },
  validate: {
    name: (value) => (value.trim().length < 2 ? 'Too short' : null),
    age: (value) => (value < 18 ? 'Too young' : null),
  },
});

// get validation status of all values
form.isValid(); // -> false

// get validation status of field
form.isValid('name'); // -> false
```

## Focus first invalid field

The second argument of the `form.onSubmit` function is a callback function that is called
with the [errors object](https://mantine.dev/form/errors) when form validation fails.
You can use this callback to focus the first invalid field or perform any other action.

To get the DOM node of any input, use `form.getInputNode('path-to-field')`. Note that
in order for this feature to work, you need to spread `form.getInputProps('path-to-field')` to
the input element.

#### Example: focusError

```tsx
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    name: 'register-form',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
```

