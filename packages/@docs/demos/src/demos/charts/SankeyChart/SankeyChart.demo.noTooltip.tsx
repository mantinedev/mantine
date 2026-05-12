import { SankeyChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { SankeyChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SankeyChart data={data} withTooltip={false} />;
}
`;

function Demo() {
  return <SankeyChart data={data} withTooltip={false} />;
}

export const noTooltip: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
