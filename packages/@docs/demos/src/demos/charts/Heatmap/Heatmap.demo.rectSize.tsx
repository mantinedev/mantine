import { Heatmap } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {...props}
    />
  );
}

export const rectSize: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  controls: [
    { type: 'number', prop: 'rectSize', min: 6, max: 20, initialValue: 10, libraryValue: '__' },
    { type: 'number', prop: 'radius', min: 0, max: 20, initialValue: 2, libraryValue: '__' },
    { type: 'number', prop: 'gap', min: 0, max: 5, initialValue: 1, libraryValue: '__' },
  ],
};
