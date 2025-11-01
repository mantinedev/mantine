import { Group, Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      disabled
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`;

function Demo() {
  return (
    <Switch.Group
      disabled
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}

export const groupDisabled: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
