import { BulletChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { ranges, rangesCode } from './_data';

const code = `
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      orientation="vertical"
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      h={250}
    />
  );
}
`;

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      orientation="vertical"
      valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      h={250}
    />
  );
}

export const vertical: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: rangesCode, language: 'tsx' },
  ],
};
