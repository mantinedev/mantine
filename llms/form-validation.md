# formValidation
Package: @mantine/form
Import: import { FormValidation } from '@mantine/form';

## Validation with rules object

To validate a form with a rules object, provide an object of functions which take the field value as an argument
and return an error message (any React node) or null if the field is valid:

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

* `value` – value of the field
* `values` – all form values
* `path` – field path, for example `user.email` or `cart.0.price`
* `signal` – an `AbortSignal` that is aborted when a newer validation supersedes the current one (useful for cancelling in-flight async requests)

The `path` argument can be used to get information about the field location relative to other fields.
For example, you can get the index of an array element:

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
alongside their nested fields. For example, it is useful when you want to capture
a list of values, validate each value individually, and then validate the list itself
to not be empty:

```tsx
import { TrashIcon } from '@phosphor-icons/react';
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
        [formRootRule]: isNotEmpty('AtIcon least one employee is required'),
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
        <TrashIcon size={16} />
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


Another example is to validate an object's field combination:

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

You can get all form values as the second rule function argument to perform field validation based on other
form values. For example, you can validate that the password confirmation is the same as the password:

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


## Function-based validation

Another approach to handle validation is to provide a function to `validate`.
The function takes form values as a single argument and should return an object that contains
errors of corresponding fields. If a field is valid or field validation is not required, you can either return null or simply omit it
from the validation results.

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

To validate all fields on change, set the `validateInputOnChange` option to `true`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  validateInputOnChange: true,
});
```

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


You can also provide an array of field paths to validate only those values:

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

To validate all fields on blur, set the `validateInputOnBlur` option to `true`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  validateInputOnBlur: true,
});
```

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


You can also provide an array of field paths to validate only those values:

```tsx
import { FORM_INDEX, useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`],
});
```

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

By default, the field error is cleared when the value changes. To change this, set `clearInputErrorOnChange` to `false`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  clearInputErrorOnChange: false,
});
```

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

`form.onSubmit` accepts two arguments: the first argument is the `handleSubmit` function that will be called with form values when validation
was completed without errors. The second argument is the `handleErrors` function, which is called with the errors object when validation was completed with errors.

You can use the `handleErrors` function to perform certain actions when the user tries to submit the form without values.
For example, you can show a notification:

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

`form.isValid` performs form validation with the given validation functions, rules object, or schema, but unlike
`form.validate`, it does not set `form.errors` and just returns a boolean value indicating whether the form is valid.
If any of the validation rules are async, `form.isValid` returns a `Promise<boolean>` instead.

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

// With sync rules, returns boolean directly
form.isValid(); // -> false
form.isValid('name'); // -> false
```

## Async validation

Validation rules can be async – return a `Promise` that resolves to an error message or `null`.
When all rules are synchronous, `form.validate()`, `form.validateField()` and `form.isValid()` return
their results directly (not wrapped in a `Promise`). When any rule is async, these methods return promises instead.
TypeScript infers the correct return type based on your validation rules, so you get precise types without manual annotations.

The `form.validating` property is `true` while any async validation is in progress, and `form.isValidating(path)` can be used to check individual fields.
The `validating` state is never set for forms with only synchronous rules.

Each rule receives an `AbortSignal` as the fourth argument. The signal is aborted when a newer validation
supersedes the current one, which you can use to cancel in-flight HTTP requests and avoid race conditions.

```tsx
import { Button, Group, Loader, TextInput } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';

// Simulates an async API call to check if the username is available
function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },
    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.validating ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
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


## Async validation with debounce

When using async validation with `validateInputOnChange`, you can set `validateDebounce` to avoid
firing an API call on every keystroke. The debounce applies only to field-level validation triggered
by `validateInputOnChange` and `validateInputOnBlur` – it does not affect explicit `form.validate()` calls
or `form.onSubmit()`.

```tsx
import { Button, Group, Loader, TextInput } from '@mantine/core';
import { useForm, isEmail } from '@mantine/form';

// Simulates an async API call to check if the username is available
function checkUsernameAvailability(username: string, signal?: AbortSignal): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      const taken = ['admin', 'user', 'test', 'mantine'];
      resolve(taken.includes(username.toLowerCase()) ? 'Username is already taken' : null);
    }, 800);

    signal?.addEventListener('abort', () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
}

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', email: '' },

    // Debounce async validation by 500ms – prevents firing
    // an API call on every keystroke
    validateDebounce: 500,
    validateInputOnChange: ['username'],

    validate: {
      username: async (value, _values, _path, signal) => {
        if (value.trim().length < 3) {
          return 'Username must be at least 3 characters';
        }
        return checkUsernameAvailability(value, signal);
      },
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Username"
        description="Try: admin, user, test, mantine"
        placeholder="Pick a username"
        key={form.key('username')}
        disabled={form.submitting}
        rightSection={form.isValidating('username') ? <Loader size={16} /> : null}
        {...form.getInputProps('username')}
      />

      <TextInput
        withAsterisk
        mt="md"
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        disabled={form.submitting}
        {...form.getInputProps('email')}
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


## Focus the first invalid field

The second argument of the `form.onSubmit` function is a callback function that is called
with the [errors object](https://mantine.dev/llms/form-errors.md) when form validation fails.
You can use this callback to focus the first invalid field or perform any other action.

To get the DOM node of any input, use `form.getInputNode('path-to-field')`. Note that
in order for this feature to work, you need to spread `form.getInputProps('path-to-field')` to
the input element.

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

