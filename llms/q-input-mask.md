# Is there a way to add mask to Mantine input?
Learn how to integrate mask libraries with Mantine inputs

Mantine does not provide built-in mask functionality, but you can easily integrate any mask library with Mantine inputs.
The recommended library is [react-imask](https://www.npmjs.com/package/react-imask):

<InstallScript packages="react-imask" />

You can use it with the [InputBase](https://mantine.dev/core/input/#inputbase-component) component
to create a custom input with a mask:

#### Example: InputMask

```tsx
import { IMaskInput } from 'react-imask';
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <InputBase
      label="Your phone"
      component={IMaskInput}
      mask="+7 (000) 000-0000"
      placeholder="Your phone"
    />
  );
}
```

