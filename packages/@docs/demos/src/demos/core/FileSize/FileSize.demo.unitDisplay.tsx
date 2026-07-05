import { FileSize, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileSize, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="xs">
      <Text>
        short: <FileSize value={1_450_000} unitDisplay="short" />
      </Text>
      <Text>
        long: <FileSize value={1_450_000} unitDisplay="long" />
      </Text>
      <Text>
        narrow: <FileSize value={1_450_000} unitDisplay="narrow" />
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap="xs">
      <Text>
        short: <FileSize value={1_450_000} unitDisplay="short" />
      </Text>
      <Text>
        long: <FileSize value={1_450_000} unitDisplay="long" />
      </Text>
      <Text>
        narrow: <FileSize value={1_450_000} unitDisplay="narrow" />
      </Text>
    </Stack>
  );
}

export const unitDisplay: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
