import { BulletChart } from '@mantine/charts';
import { Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ranges, rangesCode } from './_data';

const code = `
import { BulletChart } from '@mantine/charts';
import { Stack } from '@mantine/core';
import { ranges } from './data';

function Demo() {
  return (
    <Stack>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={20}
        label="Small"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={32}
        label="Default"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={48}
        label="Large"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={20}
        label="Small"
        valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={32}
        label="Default"
        valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={48}
        label="Large"
        valueFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
      />
    </Stack>
  );
}

export const barSize: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: rangesCode, language: 'tsx' },
  ],
};
