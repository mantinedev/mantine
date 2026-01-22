import { Textarea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea placeholder="Your comment" loading />;
}
`;

function Demo() {
  return <Textarea placeholder="Your comment" loading />;
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
