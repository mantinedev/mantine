import { FileSize, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileSize, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="xs">
      <Text>
        en-US: <FileSize value={1_450_000} locale="en-US" />
      </Text>
      <Text>
        de-DE: <FileSize value={1_450_000} locale="de-DE" />
      </Text>
      <Text>
        fr-FR: <FileSize value={1_450_000} locale="fr-FR" />
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap="xs">
      <Text>
        en-US: <FileSize value={1_450_000} locale="en-US" />
      </Text>
      <Text>
        de-DE: <FileSize value={1_450_000} locale="de-DE" />
      </Text>
      <Text>
        fr-FR: <FileSize value={1_450_000} locale="fr-FR" />
      </Text>
    </Stack>
  );
}

export const locale: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
