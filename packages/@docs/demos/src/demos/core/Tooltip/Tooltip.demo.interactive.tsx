import { Anchor, Button, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Anchor, Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      interactive
      withArrow
      multiline
      w={220}
      label={
        <>
          Tooltip content can be hovered, for example to follow{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            this link
          </Anchor>
        </>
      }
    >
      <Button>Interactive tooltip</Button>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Tooltip
      interactive
      withArrow
      multiline
      w={220}
      label={
        <>
          Tooltip content can be hovered, for example to follow{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            this link
          </Anchor>
        </>
      }
    >
      <Button>Interactive tooltip</Button>
    </Tooltip>
  );
}

export const interactive: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
