import { BarsList } from '@mantine/charts';
import { Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { BarsList } from '@mantine/charts';
import { Tooltip } from '@mantine/core';
import { data } from './data';

function Demo() {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData, defaultBar) => {
        const percentage = ((barData.value / maxValue) * 100).toFixed(1);

        return (
          <Tooltip
            label={\`\${barData.name}: \${percentage}% of total traffic\`}
            position="top"
            withArrow
          >
            {defaultBar}
          </Tooltip>
        );
      }}
    />
  );
}
`;

function Demo() {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData, defaultBar) => {
        const percentage = ((barData.value / maxValue) * 100).toFixed(1);

        return (
          <Tooltip label={`${barData.name}: ${percentage}% of total traffic`} position="top-start">
            {defaultBar}
          </Tooltip>
        );
      }}
    />
  );
}

export const renderBar: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.ts', code: dataCode, language: 'tsx' },
  ],
};
