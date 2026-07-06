import { QRCode, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QRCode, Stack, Text } from '@mantine/core';

const levels = [
  { level: 'L', label: 'Low (~7%)' },
  { level: 'M', label: 'Medium (~15%)' },
  { level: 'Q', label: 'Quartile (~25%)' },
  { level: 'H', label: 'High (~30%)' },
] as const;

function Demo() {
  return (
    <Stack>
      {levels.map(({ level, label }) => (
        <Stack key={level} align="center" gap="xs">
          <QRCode value="https://mantine.dev" errorCorrectionLevel={level} size={120} />
          <Text size="sm">{label}</Text>
        </Stack>
      ))}
    </Stack>
  );
}
`;

const levels = [
  { level: 'L', label: 'Low (~7%)' },
  { level: 'M', label: 'Medium (~15%)' },
  { level: 'Q', label: 'Quartile (~25%)' },
  { level: 'H', label: 'High (~30%)' },
] as const;

function Demo() {
  return (
    <Stack>
      {levels.map(({ level, label }) => (
        <Stack key={level} align="center" gap="xs">
          <QRCode value="https://mantine.dev" errorCorrectionLevel={level} size={120} />
          <Text size="sm">{label}</Text>
        </Stack>
      ))}
    </Stack>
  );
}

export const errorCorrection: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
