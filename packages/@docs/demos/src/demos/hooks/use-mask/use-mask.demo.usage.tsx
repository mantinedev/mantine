import { Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, value, rawValue } = useMask({ mask: '(999) 999-9999' });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">Masked value: {value}</Text>
      <Text size="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`;

function Demo() {
  const { ref, value, rawValue } = useMask({ mask: '(999) 999-9999' });

  return (
    <>
      <TextInput ref={ref} label="Phone number" placeholder="(___) ___-____" />
      <Text size="sm" mt="sm">
        Masked value: {value}
      </Text>
      <Text size="sm">Raw value: {rawValue}</Text>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
