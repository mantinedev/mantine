import { Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: [/[0-2]/, /\\d/, ':', /[0-5]/, /\\d/],
  });

  return (
    <>
      <TextInput ref={ref} label="Time (HH:MM)" placeholder="__:__" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`;

function Demo() {
  const { ref, rawValue } = useMask({
    mask: [/[0-2]/, /\d/, ':', /[0-5]/, /\d/],
  });

  return (
    <>
      <TextInput ref={ref} label="Time (HH:MM)" placeholder="__:__" />
      <Text size="sm" mt="sm">
        Raw value: {rawValue}
      </Text>
    </>
  );
}

export const regex: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
