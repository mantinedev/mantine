import { encodeQR } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { encodeQR } from '@mantine/core';

const MARGIN = 4;

function Demo() {
  const { matrix, size } = encodeQR('https://mantine.dev', { errorCorrectionLevel: 'M' });
  const total = size + MARGIN * 2;

  return (
    <svg viewBox={\`0 0 \${total} \${total}\`} width={180} height={180}>
      {matrix.flatMap((row, y) =>
        row.map((dark, x) =>
          dark ? (
            <circle
              key={\`\${x}-\${y}\`}
              cx={x + MARGIN + 0.5}
              cy={y + MARGIN + 0.5}
              r={0.42}
              fill="var(--mantine-color-blue-6)"
            />
          ) : null
        )
      )}
    </svg>
  );
}
`;

const MARGIN = 4;

function Demo() {
  const { matrix, size } = encodeQR('https://mantine.dev', { errorCorrectionLevel: 'M' });
  const total = size + MARGIN * 2;

  return (
    <svg viewBox={`0 0 ${total} ${total}`} width={180} height={180}>
      {matrix.flatMap((row, y) =>
        row.map((dark, x) =>
          dark ? (
            <circle
              key={`${x}-${y}`}
              cx={x + MARGIN + 0.5}
              cy={y + MARGIN + 0.5}
              r={0.42}
              fill="var(--mantine-color-blue-6)"
            />
          ) : null
        )
      )}
    </svg>
  );
}

export const customRender: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
