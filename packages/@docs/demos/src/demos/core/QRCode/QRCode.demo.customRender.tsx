import { encodeQR } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { encodeQR } from '@mantine/core';

const MARGIN = 4;

interface Pattern {
  x: number;
  y: number;
  n: number;
}

function getAlignmentPositions(size: number) {
  const version = (size - 17) / 4;
  if (version === 1) {
    return [];
  }
  const count = Math.floor(version / 7) + 2;
  const step = version === 32 ? 26 : Math.ceil((version * 4 + 4) / (count * 2 - 2)) * 2;
  const positions = [6];
  for (let pos = size - 7; positions.length < count; pos -= step) {
    positions.splice(1, 0, pos);
  }
  return positions;
}

function getPatterns(size: number): Pattern[] {
  const finders = [
    { x: 0, y: 0, n: 7 },
    { x: size - 7, y: 0, n: 7 },
    { x: 0, y: size - 7, n: 7 },
  ];
  const positions = getAlignmentPositions(size);
  const last = positions.length - 1;
  const alignments = positions.flatMap((cy, i) =>
    positions
      .filter(
        (_, j) => !(i === 0 && j === 0) && !(i === 0 && j === last) && !(i === last && j === 0)
      )
      .map((cx) => ({ x: cx - 2, y: cy - 2, n: 5 }))
  );
  return [...finders, ...alignments];
}

function getPatternPath({ x, y, n }: Pattern) {
  return [0, 1, 2]
    .map((i) => \`M\${x + MARGIN + i} \${y + MARGIN + i}h\${n - i * 2}v\${n - i * 2}h\${i * 2 - n}z\`)
    .join(' ');
}

function Demo() {
  const value = 'https://mantine.dev';
  const { matrix, size } = encodeQR(value, { errorCorrectionLevel: 'M' });
  const total = size + MARGIN * 2;
  const color = 'var(--mantine-color-blue-6)';
  const patterns = getPatterns(size);
  const isPatternModule = (x: number, y: number) =>
    patterns.some((p) => x >= p.x && x < p.x + p.n && y >= p.y && y < p.y + p.n);

  return (
    <svg viewBox={\`0 0 \${total} \${total}\`} width={180} height={180} role="img" aria-label={value}>
      <rect width={total} height={total} fill="white" />
      <path d={patterns.map(getPatternPath).join(' ')} fill={color} fillRule="evenodd" />
      {matrix.flatMap((row, y) =>
        row.map((dark, x) =>
          dark && !isPatternModule(x, y) ? (
            <circle
              key={\`\${x}-\${y}\`}
              cx={x + MARGIN + 0.5}
              cy={y + MARGIN + 0.5}
              r={0.42}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  );
}
`;

const MARGIN = 4;

interface Pattern {
  x: number;
  y: number;
  n: number;
}

function getAlignmentPositions(size: number) {
  const version = (size - 17) / 4;
  if (version === 1) {
    return [];
  }
  const count = Math.floor(version / 7) + 2;
  const step = version === 32 ? 26 : Math.ceil((version * 4 + 4) / (count * 2 - 2)) * 2;
  const positions = [6];
  for (let pos = size - 7; positions.length < count; pos -= step) {
    positions.splice(1, 0, pos);
  }
  return positions;
}

function getPatterns(size: number): Pattern[] {
  const finders = [
    { x: 0, y: 0, n: 7 },
    { x: size - 7, y: 0, n: 7 },
    { x: 0, y: size - 7, n: 7 },
  ];
  const positions = getAlignmentPositions(size);
  const last = positions.length - 1;
  const alignments = positions.flatMap((cy, i) =>
    positions
      .filter(
        (_, j) => !(i === 0 && j === 0) && !(i === 0 && j === last) && !(i === last && j === 0)
      )
      .map((cx) => ({ x: cx - 2, y: cy - 2, n: 5 }))
  );
  return [...finders, ...alignments];
}

function getPatternPath({ x, y, n }: Pattern) {
  return [0, 1, 2]
    .map((i) => `M${x + MARGIN + i} ${y + MARGIN + i}h${n - i * 2}v${n - i * 2}h${i * 2 - n}z`)
    .join(' ');
}

function Demo() {
  const value = 'https://mantine.dev';
  const { matrix, size } = encodeQR(value, { errorCorrectionLevel: 'M' });
  const total = size + MARGIN * 2;
  const color = 'var(--mantine-color-blue-6)';
  const patterns = getPatterns(size);
  const isPatternModule = (x: number, y: number) =>
    patterns.some((p) => x >= p.x && x < p.x + p.n && y >= p.y && y < p.y + p.n);

  return (
    <svg viewBox={`0 0 ${total} ${total}`} width={180} height={180} role="img" aria-label={value}>
      <rect width={total} height={total} fill="white" />
      <path d={patterns.map(getPatternPath).join(' ')} fill={color} fillRule="evenodd" />
      {matrix.flatMap((row, y) =>
        row.map((dark, x) =>
          dark && !isPatternModule(x, y) ? (
            <circle
              key={`${x}-${y}`}
              cx={x + MARGIN + 0.5}
              cy={y + MARGIN + 0.5}
              r={0.42}
              fill={color}
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
