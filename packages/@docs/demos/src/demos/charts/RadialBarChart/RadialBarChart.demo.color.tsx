import { RadialBarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';

const code = (props: any) => `
import { RadialBarChart } from '@mantine/charts';

const data = [
    { name: '18-24', value: 31.47, color: '${props.color}' },
    { name: '25-29', value: 26.69, color: '${props.color}' },
    { name: '30-34', value: 15.69, color: '${props.color}' },
    { name: '35-39', value: 8.22, color: '${props.color}' },
    { name: '40-49', value: 8.63, color: '${props.color}' },
    { name: '50+', value: 2.63, color: '${props.color}' },
    { name: 'unknown', value: 6.67, color: '${props.color}' },
  ];

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} w={220} />;
}
`;

function Wrapper(props: any) {
  const data = [
    { name: '18-24', value: 31.47, color: props.color },
    { name: '25-29', value: 26.69, color: props.color },
    { name: '30-34', value: 15.69, color: props.color },
    { name: '35-39', value: 8.22, color: props.color },
    { name: '40-49', value: 8.63, color: props.color },
    { name: '50+', value: 2.63, color: props.color },
    { name: 'unknown', value: 6.67, color: props.color },
  ];

  return <RadialBarChart data={data} dataKey="value" h={220} w={220} />;
}

export const color: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [{ type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null }],
};
