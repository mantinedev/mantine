import { MatrixChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode, xLabels, yLabels } from './_data';

const code = `
import { MatrixChart } from '@mantine/charts';
import { data, xLabels, yLabels } from './data';

function Demo() {
  return (
    <MatrixChart
      data={data}
      xLabels={xLabels}
      yLabels={yLabels} withYLabels
      withXLabels
      getCellProps={(cell) => {
        if (cell.value === null) {
          return {};
        }

        if (cell.value >= 25) {
          return { fill: 'var(--mantine-color-teal-6)' };
        }

        if (cell.value >= 15) {
          return { fill: 'var(--mantine-color-yellow-6)' };
        }

        return { fill: 'var(--mantine-color-red-6)' };
      }}
    />
  );
}
`;

function Demo() {
  return (
    <MatrixChart
      data={data}
      xLabels={xLabels}
      yLabels={yLabels}
      withYLabels
      withXLabels
      getCellProps={(cell) => {
        if (cell.value === null) {
          return {};
        }

        if (cell.value >= 25) {
          return { fill: 'var(--mantine-color-teal-6)' };
        }

        if (cell.value >= 15) {
          return { fill: 'var(--mantine-color-yellow-6)' };
        }

        return { fill: 'var(--mantine-color-red-6)' };
      }}
    />
  );
}

export const getCellProps: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  overflow: 'hidden',
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
