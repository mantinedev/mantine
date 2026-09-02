import { Diff } from '@mantine/code-highlight';
import { Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const previousValue = 'The quick brown fox jumps over the lazy dog.';
const currentValue = 'The quick red cat leaps over the lazy dog.';

const code = `
import { Stack, Text } from '@mantine/core';
import { Diff } from '@mantine/code-highlight';

const previousValue = 'The quick brown fox jumps over the lazy dog.';
const currentValue = 'The quick red cat leaps over the lazy dog.';

function Demo() {
  return (
    <Stack>
      <div>
        <Text fw={500} mb={4}>Characters</Text>
        <Diff previousValue={previousValue} currentValue={currentValue} diffMethod="chars" />
      </div>
      <div>
        <Text fw={500} mb={4}>Words (default)</Text>
        <Diff previousValue={previousValue} currentValue={currentValue} diffMethod="words" />
      </div>
      <div>
        <Text fw={500} mb={4}>Lines</Text>
        <Diff previousValue={previousValue} currentValue={currentValue} diffMethod="lines" />
      </div>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <div>
        <Text fw={500} mb={4}>
          Characters
        </Text>
        <Diff previousValue={previousValue} currentValue={currentValue} diffMethod="chars" />
      </div>
      <div>
        <Text fw={500} mb={4}>
          Words (default)
        </Text>
        <Diff previousValue={previousValue} currentValue={currentValue} diffMethod="words" />
      </div>
      <div>
        <Text fw={500} mb={4}>
          Lines
        </Text>
        <Diff previousValue={previousValue} currentValue={currentValue} diffMethod="lines" />
      </div>
    </Stack>
  );
}

export const diffMethod: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
