import { BarsList } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './_data';

const code = `
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData) => {
        const percentage = (barData.value / maxValue) * 100;

        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 100,
                height: 32,
                padding: '0 12px',
                fontSize: 14,
                fontWeight: 500,
                color: 'white',
                background: \`linear-gradient(90deg, #228be6 0%, #339af0 \${percentage}%)\`,
                borderRadius: 4,
                width: \`\${percentage}%\`,
              }}
            >
              {barData.name}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              {barData.value.toLocaleString()}
            </div>
          </div>
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
      renderBar={(barData) => {
        const percentage = (barData.value / maxValue) * 100;

        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 100,
                height: 32,
                padding: '0 12px',
                fontSize: 14,
                fontWeight: 500,
                color: 'white',
                background: `linear-gradient(90deg, #228be6 0%, #339af0 ${percentage}%)`,
                borderRadius: 4,
                width: `${percentage}%`,
              }}
            >
              {barData.name}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{barData.value.toLocaleString()}</div>
          </div>
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
