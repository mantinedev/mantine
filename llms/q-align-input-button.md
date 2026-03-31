# How to align input with a button in a flex container?
Learn how to align Mantine inputs with buttons using Group component

If you try to align a Mantine input with a button in a flex container,
you will notice that the input is not aligned with the button. This happens because
Mantine inputs have associated elements: label, description, and error message.

#### Example: AlignInputButton

```tsx
import { Button, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group align="flex-end">
      <TextInput label="Your email" error="Something went wrong" />
      <Button>Submit</Button>
    </Group>
  );
}
```


To align the input with a button, you can either use the `inputContainer` prop to wrap the button
next to it in a flex container:

#### Example: AlignInputButtonCorrect

```tsx
import { Button, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Your email"
      error="Something went wrong"
      inputContainer={(children) => (
        <Group align="flex-start">
          {children}
          <Button>Submit</Button>
        </Group>
      )}
    />
  );
}
```


Or change error/description position to absolute with [Styles API](https://mantine.dev/styles/styles-api/):

#### Example: AlignInputButtonStyles

```tsx
import { Button, Group, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function StylesDemo() {
  return (
    <Group align="flex-end" pb={18}>
      <TextInput label="Your email" error="Something went wrong" classNames={classes} />
      <Button>Submit</Button>
    </Group>
  );
}
```

