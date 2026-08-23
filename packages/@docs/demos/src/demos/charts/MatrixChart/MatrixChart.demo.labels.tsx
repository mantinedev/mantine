import { MatrixChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode, xLabels, yLabels } from './_data';

const code = `
import { MatrixChart } from '@mantine/charts';
import { data, xLabels, yLabels } from './data';

function Demo() {
  return <MatrixChart data={data} xLabels={xLabels} yLabels={yLabels} withYLabels withXLabels />;
}
`;

function Demo() {
  return <MatrixChart data={data} xLabels={xLabels} yLabels={yLabels} withYLabels withXLabels />;
}

export const labels: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  overflow: 'hidden',
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
