import { IconFocus2 } from '@tabler/icons-react';
import { ColorInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 size={18} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 size={18} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}

export const eyeDropperIcon: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
