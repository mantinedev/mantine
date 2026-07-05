import { FileSize, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileSize, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="xs">
      <Text>
        Storage: <FileSize value={8_000_000} unit="byte" />
      </Text>
      <Text>
        Throughput: <FileSize value={8_000_000} unit="bit" />
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap="xs">
      <Text>
        Storage: <FileSize value={8_000_000} unit="byte" />
      </Text>
      <Text>
        Throughput: <FileSize value={8_000_000} unit="bit" />
      </Text>
    </Stack>
  );
}

export const units: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
