import { Button, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      interactive
      withArrow
      multiline
      w={220}
      label="This tooltip stays open while you move the pointer onto it, so you can read or select its full contents without it closing."
    >
      <Button>Hover to read the tooltip</Button>
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
      label="This tooltip stays open while you move the pointer onto it, so you can read or select its full contents without it closing."
    >
      <Button>Hover to read the tooltip</Button>
    </Tooltip>
  );
}

export const interactive: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
