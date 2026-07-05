import { ColorWheel } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorWheel } from '@mantine/core';

function Demo() {
  return <ColorWheel aria-label="Color wheel" defaultValue={210} disabled />;
}
`;

function Demo() {
  return <ColorWheel aria-label="Color wheel" defaultValue={210} disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
