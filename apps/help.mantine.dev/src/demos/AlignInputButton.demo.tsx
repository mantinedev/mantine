import { Button, Group, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './AlignInputButton.demo.module.css';

const code = `
import { Button, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group align="flex-end">
      <TextInput label="Your email" error="Something went wrong" />
      <Button>Submit</Button>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group align="flex-end">
      <TextInput label="Your email" error="Something went wrong" />
      <Button>Submit</Button>
    </Group>
  );
}

export const AlignInputButton: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

const correctCode = `
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
}`;

function CorrectDemo() {
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

export const AlignInputButtonCorrect: MantineDemo = {
  type: 'code',
  component: CorrectDemo,
  code: correctCode,
};

const cssCode = `.root {
  position: relative;
}

.error {
  position: absolute;
  bottom: rem(-18px);
}

.wrapper {
  margin-bottom: 0;
}`;

const stylesCode = `
import { Button, Group, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function StylesDemo() {
  return (
    <Group align="flex-end" pb={18}>
      <TextInput label="Your email" error="Something went wrong" classNames={classes} />
      <Button>Submit</Button>
    </Group>
  );
}`;

function StylesDemo() {
  return (
    <Group align="flex-end" pb={18}>
      <TextInput label="Your email" error="Something went wrong" classNames={classes} />
      <Button>Submit</Button>
    </Group>
  );
}

export const AlignInputButtonStyles: MantineDemo = {
  type: 'code',
  component: StylesDemo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code: stylesCode, language: 'tsx' },
  ],
};
