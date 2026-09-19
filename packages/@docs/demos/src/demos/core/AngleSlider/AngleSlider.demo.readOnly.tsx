import { AngleSlider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" defaultValue={140} readOnly />;
}
`;

function Demo() {
  return <AngleSlider aria-label="Angle slider" defaultValue={140} readOnly />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
