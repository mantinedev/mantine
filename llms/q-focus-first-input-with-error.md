# How can I focus the first input with error with use-form?
Learn how to handle focus with use-form hook

## Get input DOM node with use-form

You can use the `form.getInputNode` function to get the input DOM node at the given path.
For example:

```tsx
import { useForm } from '@mantine/form';

const form = useForm({
  mode: 'uncontrolled',
  initialValues: {
    order_id: null,
    user: { email: '' },
  },
});

// Returns the input DOM node for order_id input
form.getInputNode('order_id');

// Returns the input DOM node for user.email input
form.getInputNode('user.email');
```

## Focus first input with error on form submit

The `form.onSubmit` handler accepts two functions: the first function is called
with valid form values when validation passes, the second function is called
with form errors when validation fails. You can use the second function and
`form.getInputNode` to focus the first input with an error:

#### Example: FocusFirstInputWithError

```tsx
function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
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
        () => {},
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

