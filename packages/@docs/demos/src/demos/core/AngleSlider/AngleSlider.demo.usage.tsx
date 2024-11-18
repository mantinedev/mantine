import { AngleSlider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`;

function Wrapper(props: any) {
  return <AngleSlider aria-label="Angle slider" {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'number', prop: 'size', initialValue: 60, libraryValue: '__', min: 50, max: 200 },
    { type: 'number', prop: 'thumbSize', initialValue: 8, libraryValue: '__', min: 1, max: 100 },
    { type: 'boolean', prop: 'withLabel', initialValue: true, libraryValue: true },
  ],
};
