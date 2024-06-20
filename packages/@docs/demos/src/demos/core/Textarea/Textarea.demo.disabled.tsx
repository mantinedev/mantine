import { Textarea } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
`;

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
