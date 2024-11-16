import { BarChart } from '@mantine/charts';
import { useMediaQuery } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { overlayData, overlayDataCode } from './_data';
import classes from './BarChart.demo.overlay.module.css';

const code = `
import { BarChart } from '@mantine/charts';
import classes from './Demo.module.css';
import { data } from './data';

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}
`;

const cssCode = `.root {
  @mixin light {
    --average-bar-color: var(--mantine-color-dark-8);
    --you-bar-color: var(--mantine-color-blue-3);
  }

  @mixin dark {
    --you-bar-color: var(--mantine-color-blue-8);
    --average-bar-color: var(--mantine-color-gray-4);
  }
}

.bar {
  transform: translateX(-1.5px);
}
`;

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}

export const overlay: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: cssCode, language: 'scss', fileName: 'Demo.module.css' },
    { code: overlayDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
