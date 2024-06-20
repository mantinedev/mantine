import { Textarea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
`;

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}

export const resize: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
