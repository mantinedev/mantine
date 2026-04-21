import { Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\A-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Product code" placeholder="A-____" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`;

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\A-9999',
  });

  return (
    <>
      <TextInput ref={ref} label="Product code" placeholder="A-____" />
      <Text size="sm" mt="sm">
        Raw value: {rawValue}
      </Text>
    </>
  );
}

export const escape: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
