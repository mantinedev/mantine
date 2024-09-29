import { TextInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './InputFocusStyles.demo.module.css';

const cssCode = `.input {
  &:focus-within {
    outline: rem(2px) solid var(--mantine-primary-color-filled);
  }
}`;

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      classNames={classes}
      label="TextInput with custom focus styles"
      placeholder="TextInput with custom focus styles"
    />
  );
}
`;

function Demo() {
  return (
    <TextInput
      classNames={classes}
      label="TextInput with custom focus styles"
      placeholder="TextInput with custom focus styles"
    />
  );
}

export const InputFocusStyles: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
  centered: true,
  maxWidth: 340,
};
