import { TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';
import classes from './InputPlaceholderColor.demo.module.css';

const cssCode = `.textInput {
  &::placeholder {
    color: var(--mantine-color-red-5);
  }
}

.datePickerInputPlaceholder {
  color: var(--mantine-color-blue-5);
}
`;

const code = `
import { TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <TextInput
        placeholder="Text input with red placeholder"
        classNames={{ input: classes.textInput }}
      />
      <DatePickerInput
        placeholder="Date input with blue placeholder"
        mt="md"
        classNames={{ placeholder: classes.datePickerInputPlaceholder }}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TextInput
        placeholder="Text input with red placeholder"
        classNames={{ input: classes.textInput }}
      />
      <DatePickerInput
        placeholder="Date input with blue placeholder"
        mt="md"
        classNames={{ placeholder: classes.datePickerInputPlaceholder }}
      />
    </>
  );
}

export const InputPlaceholderColorDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: cssCode, language: 'scss', fileName: 'Demo.module.css' },
  ],
  centered: true,
  maxWidth: 340,
};
