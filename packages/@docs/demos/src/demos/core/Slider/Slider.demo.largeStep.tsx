import { Slider, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">
        Focus the thumb, then use Shift + Arrow or PageUp/PageDown to move by 10
      </Text>
      <Slider defaultValue={40} step={1} largeStep={10} mt="md" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text size="sm">
        Focus the thumb, then use Shift + Arrow or PageUp/PageDown to move by 10
      </Text>
      <Slider defaultValue={40} step={1} largeStep={10} mt="md" />
    </>
  );
}

export const largeStep: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 400,
};
