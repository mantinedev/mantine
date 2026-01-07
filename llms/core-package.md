# CorePackage
Package: @mantine/core
Import: import { CorePackage } from '@mantine/core';

# Mantine Core components

[![npm](https://img.shields.io/npm/dm/@mantine/core)](https://www.npmjs.com/package/@mantine/core)

[@mantine/core](https://www.npmjs.com/package/@mantine/core) package
provides essential components: buttons, inputs, modals, typography and many others.
`@mantine/core` package is used internally in most of other `@mantine/*` packages –
it is required to be installed in your project to use Mantine components.

## Installation

```bash
yarn add @mantine/hooks @mantine/core
```

```bash
npm install @mantine/hooks @mantine/core
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
```

## Usage

Follow the [getting started guide](https://mantine.dev/getting-started) to learn how to
complete Mantine setup in your project. Example of using [Stepper](https://mantine.dev/core/stepper) component:

#### Example: usage

```tsx
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```


## License

MIT
