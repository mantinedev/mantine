import { FileInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput placeholder="Upload file" loading />;
}
`;

function Demo() {
  return <FileInput placeholder="Upload file" loading />;
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
