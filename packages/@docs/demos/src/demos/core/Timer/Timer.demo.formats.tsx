import { Stack, Timer } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack, Timer } from '@mantine/core';

function Demo() {
  return (
    <Stack align="center">
      <Timer countdown startMs={41_115_000} format="HH:mm:ss" autoStart />
      <Timer countdown startMs={330_000} format="mm:ss" autoStart />
      <Timer countdown startMs={194_400_000} format="DD:HH:mm:ss" autoStart />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack align="center">
      <Timer countdown startMs={41_115_000} format="HH:mm:ss" autoStart />
      <Timer countdown startMs={330_000} format="mm:ss" autoStart />
      <Timer countdown startMs={194_400_000} format="DD:HH:mm:ss" autoStart />
    </Stack>
  );
}

export const formats: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
