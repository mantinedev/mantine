import { FunnelChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} withLabels data={data} />;
}
`;

function Wrapper(props: any) {
  return <FunnelChart {...props} withLabels data={data} miw={300} />;
}

export const withLabels: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
  centered: true,
  controls: [
    {
      type: 'segmented',
      prop: 'labelsPosition',
      initialValue: 'right',
      libraryValue: '__',
      data: ['left', 'inside', 'right'],
    },
  ],
};
