import { BarsList } from '@mantine/charts';
import { Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { BarsList } from '@mantine/charts';
import { Tooltip } from '@mantine/core';
import { data } from './data';

function Demo() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData, defaultBar) => {
        const percentage = ((barData.value / total) * 100).toFixed(1);

        return (
          <Tooltip label={\`\${barData.name}: \${percentage}% of total traffic\`} position="top-start">
            {defaultBar}
          </Tooltip>
        );
      }}
    />
  );
}
`;

function Demo() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData, defaultBar) => {
        const percentage = ((barData.value / total) * 100).toFixed(1);

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
