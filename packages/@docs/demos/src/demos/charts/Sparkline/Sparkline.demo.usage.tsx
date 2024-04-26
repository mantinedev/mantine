import { Sparkline } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return <Sparkline w={200} h={60} data={[10, 20, 40, 20, 40, 10, 50]} {...props} />;
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'select',
      prop: 'curveType',
      initialValue: 'linear',
      libraryValue: null,
      data: [
        { value: 'bump', label: 'bump' },
        { value: 'linear', label: 'linear' },
        { value: 'natural', label: 'natural' },
        { value: 'monotone', label: 'monotone' },
        { value: 'step', label: 'step' },
        { value: 'stepBefore', label: 'stepBefore' },
        { value: 'stepAfter', label: 'stepAfter' },
      ],
    },
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    {
      type: 'number',
      prop: 'fillOpacity',
      initialValue: 0.6,
      libraryValue: null,
      min: 0,
      max: 1,
      step: 0.01,
    },
    {
      type: 'boolean',
      prop: 'withGradient',
      initialValue: true,
      libraryValue: true,
    },
    {
      type: 'number',
      prop: 'strokeWidth',
      initialValue: 2,
      libraryValue: null,
      step: 0.1,
      min: 0.5,
      max: 5,
    },
  ],
};
