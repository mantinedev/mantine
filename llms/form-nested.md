# formNested
Package: @mantine/form
Import: import { FormNested } from '@mantine/form';

## Property paths

Most `form` handlers accept a property path as the first argument.
Property path includes keys/indices of objects/arrays in which the target property is contained:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    user: {
      firstName: 'John',
      lastName: 'Doe',
    },

    fruits: [
      { name: 'Banana', available: true },
      { name: 'Orange', available: false },
    ],

    deeply: {
      nested: {
        object: [{ item: 1 }, { item: 2 }],
      },
    },
  },
});

// Props for input that is controlled by the user object's firstName field
form.getInputProps('user.firstName');

// Set value of `name` field that is contained in the object at the second position of fruits array:
form.setFieldValue('fruits.1.name', 'Carrot');

// Validate deeply nested field
await form.validateField('deeply.nested.object.0.item');
```

## Nested objects

```tsx
import { useForm } from '@mantine/form';
import { Box, Checkbox, TextInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        key={form.key('user.firstName')}
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        key={form.key('user.lastName')}
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accept terms and conditions"
        mt="sm"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}
```


## Set nested object value

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    user: {
      name: '',
      occupation: '',
    },
  },
});

// You can set values for each field individually
form.setFieldValue('user.name', 'John');
form.setFieldValue('user.occupation', 'Engineer');

// Or set the entire object
form.setFieldValue('user', { name: 'Jane', occupation: 'Architect' });
```

## Nested object value validation

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    user: {
      name: '',
      occupation: '',
    },
  },

  validate: {
    user: {
      name: (value) =>
        value.length < 2 ? 'Name is too short' : null,
      occupation: (value) =>
        value.length < 2 ? 'Occupation is too short' : null,
    },
  },
});

await form.validate();
form.errors; // -> { 'user.name': 'Name is too short', 'user.occupation': 'Occupation is too short' }
```

## Nested arrays

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { TrashIcon } from '@phosphor-icons/react';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
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
    <Box maw={500} mx="auto">
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

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>
    </Box>
  );
}
```


## List handlers

The `useForm` hook provides the following handlers to manage list state:

* `removeListItem` – removes a list item at the given index
* `insertListItem` – inserts a list item at the given index (appends item to the end of the list if index is not specified)
* `reorderListItem` – reorders a list item with the given position at the specified field
* `replaceListItem` – replaces a list item at the given index with a new value

## List value validation

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    users: [
      { name: 'John', age: 12 },
      { name: '', age: 22 },
    ],
  },

  validate: {
    users: {
      name: (value) =>
        value.length < 2
          ? 'Name should have at least 2 letters'
          : null,
      age: (value) =>
        value < 18 ? 'User must be 18 or older' : null,
    },
  },
});

// Validate a list item field
await form.validateField('users.1.name');

// Or validate with all other fields
await form.validate();
console.log(form.errors);
// {
//  'users.0.age': 'User must be 18 or older',
//  'users.1.name': 'Name should have at least 2 letters'
// }
```
