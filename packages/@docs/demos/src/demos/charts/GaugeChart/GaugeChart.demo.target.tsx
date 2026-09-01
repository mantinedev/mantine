import { GaugeChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { sections, sectionsCode } from './_data';

const code = `
import { GaugeChart } from '@mantine/charts';
import { sections } from './data';

function Demo() {
  return <GaugeChart value={72} target={75} sections={sections} />;
}
`;

function Demo() {
  return <GaugeChart value={72} target={75} sections={sections} />;
}

export const target: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: sectionsCode, language: 'tsx' },
  ],
};
