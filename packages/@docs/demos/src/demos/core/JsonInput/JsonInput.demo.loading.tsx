import { JsonInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { JsonInput } from '@mantine/core';

function Demo() {
  return <JsonInput placeholder="Enter JSON" formatOnBlur autosize minRows={4} loading />;
}
`;

function Demo() {
  return <JsonInput placeholder="Enter JSON" formatOnBlur autosize minRows={4} loading />;
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
