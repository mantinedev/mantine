import { Anchor } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
