import { Group, Radio } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      disabled
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Radio label="React" value="react" />
        <Radio label="Angular" value="nu" />
        <Radio label="Svelte" value="sv" />
      </Group>
    </Radio.Group>
  );
}
`;

function Demo() {
  return (
    <Radio.Group
      disabled
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Radio label="React" value="react" />
        <Radio label="Angular" value="nu" />
        <Radio label="Svelte" value="sv" />
      </Group>
    </Radio.Group>
  );
}

export const groupDisabled: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
