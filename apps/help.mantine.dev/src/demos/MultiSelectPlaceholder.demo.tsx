import { MultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './MultiSelectPlaceholder.demo.module.css';

const code = `
`;

const cssCode = `.inputField {
  &:not(:only-child)::placeholder {
    color: transparent;
  }
}`;

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular']}
      placeholder="Pick one or more"
      classNames={{ inputField: classes.inputField }}
    />
  );
}

export const MultiSelectPlaceholderDemo: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
    { fileName: 'Demo.tsx', code, language: 'tsx' },
  ],
};
