# formValues
Package: @mantine/form
Import: import { FormValues } from '@mantine/form';

## Initial values

In most cases you should set `initialValues`:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    name: '',
    email: '',
  },
});
```

## setValues handler

With `form.setValues` you can set all form values, for example you can set values after you have received a response from the backend API:

#### Example: setValues

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button
          onClick={() =>
            form.setValues({
              name: randomId(),
              email: `${randomId()}@test.com`,
            })
          }
        >
          Set random values
        </Button>
      </Group>
    </div>
  );
}
```


## setValues partial

`form.setValues` can also be used to set multiple values at once, payload will be shallow merged with current values state:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: { name: '', email: '', age: 0 },
});

form.setValues({ name: 'John', age: 21 });
form.getValues(); // -> { name: 'John', email: '', age: 21 }
```

## Initialize form

When called `form.initialize` handler sets `initialValues` and `values` to the same value
and marks form as initialized. It can be used only once, next `form.initialize` calls
are ignored.

`form.initialize` is useful when you want to sync form values with backend API response:

#### Example: initialize

```tsx
import { Button, NumberInput, TextInput } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function apiRequest(): Promise<FormValues> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'John Doe', age: 25 });
    }, 1000);
  });
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: 0 },
    validate: {
      name: isNotEmpty('Name is required'),
      age: isInRange({ min: 18 }, 'You must be at least 18 to register'),
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Name"
        placeholder="Name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => apiRequest().then((values) => form.initialize(values))} mt="md">
        Initialize form
      </Button>
    </>
  );
}
```


Example with [TanStack Query](https://tanstack.com/query/latest) (react-query):

```tsx
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from '@mantine/form';

function Demo() {
  const query = useQuery({
    queryKey: ['current-user'],
    queryFn: () => fetch('/api/users/me').then((res) => res.json()),
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  useEffect(() => {
    if (query.data) {
      // Even if query.data changes, form will be initialized only once
      form.initialize(query.data);
    }
  }, [query.data]);
}
```

Note that `form.initialize` will erase all values that were set before it was called.
It is usually a good idea to set `readOnly` or `disabled` on all form fields before
`form.initialize` is called to prevent data loss. You can implement this with
[enhanceGetInputProps](https://mantine.dev/form/get-input-props/#enhancegetinputprops):

#### Example: enhanceGetInputPropsForm

```tsx
import { NumberInput, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

interface FormValues {
  name: string;
  age: number | string;
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: '' },
    enhanceGetInputProps: (payload) => {
      if (!payload.form.initialized) {
        return { disabled: true };
      }

      return {};
    },
  });

  return (
    <>
      <TextInput
        {...form.getInputProps('name')}
        key={form.key('name')}
        label="Your name"
        placeholder="Your name"
      />
      <NumberInput
        {...form.getInputProps('age')}
        key={form.key('age')}
        label="Age"
        placeholder="Age"
        mt="md"
      />
      <Button onClick={() => form.initialize({ name: 'John', age: 20 })} mt="md">
        Initialize form
      </Button>
    </>
  );
}
```


## setFieldValue handler

`form.setFieldValue` handler allows to set value of the field at given path:

#### Example: setFieldValue

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.setFieldValue('name', randomId())}>Random name</Button>
        <Button onClick={() => form.setFieldValue('email', `${randomId()}@test.com`)}>
          Random email
        </Button>
      </Group>
    </div>
  );
}
```


## reset handler

`form.reset` handler sets values to `initialValues` and clear all errors:

#### Example: reset

```tsx
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="center" mt="xl">
        <Button onClick={() => form.reset()}>Reset to initial values</Button>
      </Group>
    </div>
  );
}
```


## setInitialValues handler

`form.setInitialValues` handler allows to update `initialValues` after form was initialized:

```tsx
import { useEffect } from 'react';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        // Update initial values after form was initialized
        // These values will be used in form.reset
        // and to compare values to get dirty state
        form.setInitialValues(data);
        form.setValues(data);
      });
  }, []);
}
```

## transformValues

Use `transformValues` to transform values before they get submitted in `onSubmit` handler.
For example, it can be used to merge several fields into one or to convert types:

#### Example: transformValues

```tsx
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Code } from '@mantine/core';

function Demo() {
  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: 'Jane',
      lastName: 'Doe',
      age: '33',
    },

    transformValues: (values) => ({
      fullName: `${values.firstName} ${values.lastName}`,
      age: Number(values.age) || 0,
    }),
  });

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <TextInput
          label="First name"
          placeholder="First name"
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
        />
        <TextInput
          type="number"
          label="Age"
          placeholder="Age"
          mt="md"
          key={form.key('age')}
          {...form.getInputProps('age')}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && (
        <Code block mt="md">
          {submittedValues}
        </Code>
      )}
    </>
  );
}
```


## Get transformed values

You can get transformed values outside of `form.onSubmit` method by calling `form.getTransformedValues`.
It accepts `values` that need to be transformed as optional argument, if it is not provided, then
the result of `form.getValues()` transformation will be returned instead:

```tsx
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: 'John',
      lastName: 'Doe',
    },

    transformValues: (values) => ({
      fullName: `${values.firstName} ${values.lastName}`,
    }),
  });

  form.getTransformedValues(); // -> { fullName: 'John Doe' }
  form.getTransformedValues({
    firstName: 'Jane',
    lastName: 'Loe',
  }); // { fullName: 'Jane Loe' }
}
```

## onValuesChange

`onValuesChange` function is called every time form values change, use it
instead of `useEffect` to subscribe to form values changes:

#### Example: onValuesChange

```tsx
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
    onValuesChange: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
    </div>
  );
}
```


## form.watch

`form.watch` is an effect function that allows subscribing to changes of a
specific form field. It accepts field path and a callback function that is
called with new value, previous value, touched and dirty field states:

#### Example: watch

```tsx
import { TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
    },
  });

  form.watch('name', ({ previousValue, value, touched, dirty }) => {
    console.log({ previousValue, value, touched, dirty });
  });

  return (
    <div>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
    </div>
  );
}
```


Note that `form.watch` uses `useEffect` under the hood – all hooks rules apply.
For example, you cannot use `form.watch` conditionally or inside loops.

```tsx
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '' },
  });

  // ❌ This will not work
  if (Math.random() > 0.5) {
    form.watch('name', ({ previousValue, value, touched, dirty }) => {
      console.log({ previousValue, value, touched, dirty });
    });
  }
}
```

## form.watch cascade

To loosely subscribe to changes, you can set `cascadeUpdates: true`.
This allows for parent objects to be written to directly, while still having
subscribers to nested keys updated. Additionally, writes to nested keys
will bubble up triggering parent key subscriptions as well.

#### Example: cascadeUpdates

```tsx
import { Button, Code, Stack, TextInput } from '@mantine/core';
import { createFormContext } from '@mantine/form';
import { useState } from 'react';

const [Provider, usePersonFormContext, usePersonForm] = createFormContext<{ person: { name: string } }>();

function Demo() {
  const form = usePersonForm({
    mode: 'uncontrolled',
    cascadeUpdates: true,
    initialValues: {
      person: { name: "" }
    }
  })

  return (
    <Provider form={form}>
      <Stack>
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key('person.name')}
          {...form.getInputProps('person.name')}
        />
        <Button onClick={() => form.setFieldValue("person", { name: "Jane Doe" })}>Set 'person' object to `{'{ name: "Jane Doe" }'}`</Button>
        <Watcher />
      </Stack>
    </Provider>
  );
}

function Watcher() {
  const form = usePersonFormContext();

  const [person, setPerson] = useState<{ name: string }>();
  const [name, setName] = useState<string>();

  form.watch('person', ({ value }) => setPerson(value));
  form.watch("person.name", ({ value }) => setName(value));

  return <Code block>{JSON.stringify({ person, name }, null, 2)}</Code>
}
```


## Get values type

```tsx
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({ initialValues: { name: '', age: 0 } });

  // Get inferred form values type, will be `{ name: string; age: number }`
  type FormValues = typeof form.values;

  // Use values type in handleSubmit function or anywhere else
  const handleSubmit = (values: FormValues) => console.log(values);
}
```

## Get transformed values type

To get transformed values (output of [transformValues](#transformvalues)) use `TransformedValues` type.
It is useful when you want to create a custom submit function:

```tsx
import { TransformedValues, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      locationId: '2',
    },

    transformValues: (values) => ({
      ...values,
      locationId: Number(values.locationId),
    }),
  });

  type Transformed = TransformedValues<typeof form>;
  // -> { name: string, locationId: number }

  const handleSubmit = (values: TransformedValues<typeof form>) => {};

  return <form onSubmit={form.onSubmit(handleSubmit)} />;
}
```

## Set values type

By default, form values types will be inferred from `initialValues`.
To avoid that, you can pass type to `useForm` hook, this approach is useful when
types cannot be correctly inferred or when you want to provide more specific types:

```tsx
import { useForm } from '@mantine/form';

interface FormValues {
  name: string; // regular field, same as inferred type
  role: 'user' | 'admin'; // union, more specific than inferred string type

  // values that may be undefined or null
  // cannot be correctly inferred in strict mode
  age: number | undefined;
  registeredAt: Date | null;

  // Arrays that are empty cannot be inferred correctly
  jobs: string[];
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      role: 'user',
      age: undefined,
      registeredAt: null,
      jobs: [],
    },
  });
}
```
