import { Loader, PinInput, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PinInput, Loader, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack align="center">
      <PinInput length={4} />
      <Text size="sm" c="dimmed">
        <Loader size={18} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />
        Verifying PIN...
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack align="center">
      <PinInput length={4} />
      <Text size="sm" c="dimmed">
        <Loader
          size={18}
          style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}
        />
        Verifying PIN...
      </Text>
    </Stack>
  );
}

export const loading: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
