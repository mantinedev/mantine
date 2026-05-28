import { Highlight, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With case-insensitive matching (default)
        </Text>
        <Highlight highlight="this">Highlight This, definitely THIS and also this!</Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          {'With case-sensitive matching (caseInsensitive={false})'}
        </Text>
        <Highlight highlight="this" caseInsensitive={false}>
          Highlight This, definitely THIS and also this!
        </Highlight>
      </div>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With case-insensitive matching (default)
        </Text>
        <Highlight highlight="this">Highlight This, definitely THIS and also this!</Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          {'With case-sensitive matching (caseInsensitive={false})'}
        </Text>
        <Highlight highlight="this" caseInsensitive={false}>
          Highlight This, definitely THIS and also this!
        </Highlight>
      </div>
    </Stack>
  );
}

export const caseInsensitive: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
