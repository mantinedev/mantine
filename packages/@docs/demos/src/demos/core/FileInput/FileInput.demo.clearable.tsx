import { FileInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
`;

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}

export const clearable: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
