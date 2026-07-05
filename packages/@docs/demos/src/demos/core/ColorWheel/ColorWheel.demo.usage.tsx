import { ColorWheel } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ColorWheel } from '@mantine/core';

function Demo() {
  return <ColorWheel aria-label="Color wheel"{{props}} />;
}
`;

function Wrapper(props: any) {
  return <ColorWheel aria-label="Color wheel" {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'number', prop: 'size', initialValue: 180, libraryValue: 180, min: 100, max: 250 },
    { type: 'number', prop: 'thickness', initialValue: 24, libraryValue: 24, min: 4, max: 40 },
    { type: 'number', prop: 'thumbSize', initialValue: 20, libraryValue: '__', min: 4, max: 30 },
    { type: 'number', prop: 'saturation', initialValue: 100, libraryValue: 100, min: 0, max: 100 },
    { type: 'number', prop: 'lightness', initialValue: 50, libraryValue: 50, min: 0, max: 100 },
    { type: 'boolean', prop: 'withThumbIndicator', initialValue: true, libraryValue: true },
  ],
};
