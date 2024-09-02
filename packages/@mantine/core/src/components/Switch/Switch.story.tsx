import { IconBadge } from '@tabler/icons-react';
import { Box } from '../../core';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Switch } from './Switch';

export default { title: 'Switch' };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <Switch label="Disabled by fieldset" />
      <Switch label="Disabled by prop" disabled mt="md" />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Switch label="Default Switch" defaultChecked />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
      <Switch size="xs" label="xs" variant="test" />
      <Switch size="sm" label="sm" />
      <Switch size="md" label="md" />
      <Switch size="lg" label="lg" />
      <Switch size="xl" label="xl" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Switch label="Unstyled" unstyled />
    </div>
  );
}

export function WithLabels() {
  return (
    <Group m={4}>
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}

export function IconInsideThumb() {
  return <Switch size="lg" thumbIcon={<IconBadge color="black" size={12} />} label="Hello" />;
}

export function SwitchGroup() {
  return (
    <Switch.Group
      defaultValue={['one', 'three']}
      m={4}
      label="Switch Group"
      description="Some description"
      classNames={{ label: 'test-label' }}
    >
      <Switch value="one" label="one" />
      <Switch value="two" label="two" />
      <Switch value="three" label="three" />
    </Switch.Group>
  );
}

export function labelPosition() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Switch labelPosition="left" label="Hello from left" value="1" />
      <Switch labelPosition="right" label="Hello from right" value="1" />
    </Stack>
  );
}

export function WithDescription() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Switch
        description="This is left Checkbox, pretty big descriptions, make it more big"
        labelPosition="left"
        label="Hello from left"
        value="1"
      />
      <Switch
        description="This is right Checkbox, pretty big description"
        labelPosition="right"
        label="Hello from right"
        value="1"
      />
    </Stack>
  );
}

export function WithError() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Switch label="Error without message" value="1" error />
      <Switch
        error="This is another error"
        labelPosition="right"
        label="This is invalid Switch"
        value="1"
      />
      <Switch error="Error on Switch without label" value="1" />
    </Stack>
  );
}

export function Shrinking() {
  return (
    <Box bg="blue.1" w={400}>
      <Switch bg="green" value="svelte" label="Larger Switch" />
      <Switch
        bg="green"
        value="react"
        label="Same"
        description="Short description - No Issue"
        styles={{
          labelWrapper: { backgroundColor: 'var(--mantine-color-green-2)' },
        }}
      />
      <Switch
        styles={{
          labelWrapper: { backgroundColor: 'var(--mantine-color-red-4)' },
        }}
        bg="red"
        value="svelte"
        label="Smaller"
        description="Long description, You can see how the Switch is smaller :( Description has to be multiline"
      />
      <Switch
        bg="red"
        value="svelte"
        label="Testing if its also broken when the label is  long. Yep, seems a small."
      />
    </Box>
  );
}
