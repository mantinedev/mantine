import { Slider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`;

function Demo() {
  return <Slider inverted defaultValue={80} />;
}

export const inverted: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
