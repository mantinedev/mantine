# formNested
Package: @mantine/form
Import: import { FormNested } from '@mantine/form';

## Properties paths

Most of `form` handlers accept property path as the first argument.
Property path includes keys/indices of objects/arrays at which target property is contained:

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

// Props for input that is controlled by user object firstName field
form.getInputProps('user.firstName');

// Set value of `name` field that is contained in object at second position of fruits array:
form.setFieldValue('fruits.1.name', 'Carrot');

// Validate deeply nested field
form.validateField('deeply.nested.object.0.item');
```

## Nested objects

#### Example: nested

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

## Nested object values validation

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

form.validate();
form.errors; // -> { 'user.name': 'Name is too short', 'user.occupation': 'Occupation is too short' }
```

## Nested arrays

#### Example: lists

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

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
        <IconTrash size={16} />
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

`useForm` hook provides the following handlers to manage list state:

* `removeListItem` – removes list item at given index
* `insertListItem` – inserts list item at given index (appends item to the end of the list if index is not specified)
* `reorderListItem` – reorders list item with given position at specified field
* `replaceListItem` – replaces list item at given index with new value

## List values validation

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

// Validate list item field
form.validateField('users.1.name');

// Or with all other fields
form.validate();
console.log(form.errors);
// {
//  'users.0.age': 'User must be 18 or older',
//  'users.1.name': 'Name should have at least 2 letters'
// }
```
