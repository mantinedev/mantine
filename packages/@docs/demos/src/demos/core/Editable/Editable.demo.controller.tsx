import { Button, Editable, Group, Stack, Text, useEditable } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Editable, Group, Stack, Text, useEditable } from '@mantine/core';

function Demo() {
  const controller = useEditable({ defaultValue: 'Controlled by the hook' });

  return (
    <Stack maw={360}>
      <Editable controller={controller} />

      <Group>
        <Button size="xs" variant="default" onClick={controller.edit}>Edit</Button>
        <Button size="xs" variant="default" onClick={controller.submit}>Submit</Button>
        <Button size="xs" variant="default" onClick={controller.cancel}>Cancel</Button>
      </Group>

      <Text size="sm">
        Value: {controller.getValue()} — editing: {controller.isEditing() ? 'yes' : 'no'}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const controller = useEditable({ defaultValue: 'Controlled by the hook' });

  return (
    <Stack maw={360}>
      <Editable controller={controller} />

      <Group>
        <Button size="xs" variant="default" onClick={controller.edit}>
          Edit
        </Button>
        <Button size="xs" variant="default" onClick={controller.submit}>
          Submit
        </Button>
        <Button size="xs" variant="default" onClick={controller.cancel}>
          Cancel
        </Button>
      </Group>

      <Text size="sm">
        Value: {controller.getValue()} — editing: {controller.isEditing() ? 'yes' : 'no'}
      </Text>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
