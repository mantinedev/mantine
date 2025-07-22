import { RangeSlider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { RangeSlider } from '@mantine/core';

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
}
`;

function Demo() {
  return <RangeSlider inverted defaultValue={[20, 60]} />;
}

export const inverted: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
