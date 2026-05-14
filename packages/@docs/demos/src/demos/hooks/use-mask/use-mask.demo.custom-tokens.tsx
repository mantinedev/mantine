import { Text, TextInput } from '@mantine/core';
import { useMask } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TextInput, Text } from '@mantine/core';
import { useMask } from '@mantine/hooks';

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\#hhhhhh',
    tokens: { h: /[0-9a-fA-F]/ },
  });

  return (
    <>
      <TextInput ref={ref} label="Hex color" placeholder="#______" />
      <Text size="sm" mt="sm">Raw value: {rawValue}</Text>
    </>
  );
}
`;

function Demo() {
  const { ref, rawValue } = useMask({
    mask: '\\#hhhhhh',
    tokens: { h: /[0-9a-fA-F]/ },
  });

  return (
    <>
      <TextInput ref={ref} label="Hex color" placeholder="#______" />
      <Text size="sm" mt="sm">
        Raw value: {rawValue}
      </Text>
    </>
  );
}

export const customTokens: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
