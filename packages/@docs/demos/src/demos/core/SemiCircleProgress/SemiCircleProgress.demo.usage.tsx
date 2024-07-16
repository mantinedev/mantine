import { SemiCircleProgress } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress{{props}} />;
}
`;

function Wrapper(props: any) {
  return <SemiCircleProgress {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'color', prop: 'filledSegmentColor', initialValue: 'blue', libraryValue: null },
    { type: 'number', prop: 'size', min: 70, max: 270, initialValue: 200, libraryValue: null },
    { type: 'number', prop: 'thickness', min: 1, max: 20, initialValue: 12, libraryValue: null },
    { type: 'number', prop: 'value', min: 0, max: 100, initialValue: 40, libraryValue: null },
  ],
};
