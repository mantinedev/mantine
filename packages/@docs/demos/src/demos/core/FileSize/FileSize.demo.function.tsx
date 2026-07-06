import { Code, formatBytes, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code, formatBytes, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="xs">
      <Code>{\`formatBytes(1450) → \${formatBytes(1450)}\`}</Code>
      <Code>{\`formatBytes(1450, { unitSystem: 'binary' }) → \${formatBytes(1450, { unitSystem: 'binary' })}\`}</Code>
      <Code>{\`formatBytes(8_000_000, { unit: 'bit' }) → \${formatBytes(8_000_000, { unit: 'bit' })}\`}</Code>
      <Code>{\`formatBytes(1450, { locale: 'de-DE' }) → \${formatBytes(1450, { locale: 'de-DE' })}\`}</Code>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap="xs">
      <Code>{`formatBytes(1450) → ${formatBytes(1450)}`}</Code>
      <Code>{`formatBytes(1450, { unitSystem: 'binary' }) → ${formatBytes(1450, { unitSystem: 'binary' })}`}</Code>
      <Code>{`formatBytes(8_000_000, { unit: 'bit' }) → ${formatBytes(8_000_000, { unit: 'bit' })}`}</Code>
      <Code>{`formatBytes(1450, { locale: 'de-DE' }) → ${formatBytes(1450, { locale: 'de-DE' })}`}</Code>
    </Stack>
  );
}

export const functionUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
