# How can I disable all inputs/input groups inside a form?
Learn how to disable all inputs/input groups inside a form with the unstyled Fieldset component

## Disable all inputs with fieldset

To disable all inputs/input groups inside a form, you can use the [Fieldset](https://mantine.dev/core/fieldset/) component.
If the `disabled` prop is set, all inputs inside `Fieldset` are disabled. By default, `Fieldset` has border and padding styles.
If you want to use `Fieldset` only for the `disabled` feature, set `variant="unstyled"`:

#### Example: FieldsetInputs

```tsx
import { Fieldset, TextInput, Button } from '@mantine/core';

function Demo() {
  return (
    <form>
      <Fieldset disabled variant="unstyled">
        <TextInput label="Your name" placeholder="Your name" />
        <TextInput label="Your email" placeholder="Your email" mt="md" />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </Fieldset>
    </form>
  );
}
```


## Disable all inputs with enhanceGetInputProps

If you use [use-form](https://mantine.dev/form/get-input-props/#enhancegetinputprops) for
your form, you can disable all inputs with `enhanceGetInputProps`:

#### Example: EnhanceDisableInputs

```tsx
import { useState } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const [disabled, setDisabled] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    enhanceGetInputProps: () => ({ disabled }),
  });

  return (
    <form>
      <TextInput
        label="Your name"
        placeholder="Your name"
        {...form.getInputProps('name')}
        key={form.key('name')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        mt="md"
        {...form.getInputProps('email')}
        key={form.key('email')}
      />
      <Button mt="md" onClick={() => setDisabled((d) => !d)}>
        Toggle disabled
      </Button>
    </form>
  );
}
```

