import { CrosshairIcon } from '@phosphor-icons/react';
import { ColorInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorInput } from '@mantine/core';
import { CrosshairIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<CrosshairIcon size={18} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
`;

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<CrosshairIcon size={18} />}
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
