import { AngleSlider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}
`;

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
