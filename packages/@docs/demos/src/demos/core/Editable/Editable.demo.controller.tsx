import { Button, Editable, Group, Stack, Text, useEditable } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Editable, Group, Stack, Text, useEditable } from '@mantine/core';

function Demo() {
  const editable = useEditable({ defaultValue: 'Controlled by the hook' });

  return (
    <Stack maw={360}>
      <Editable controller={editable} />

      <Group>
        <Button size="xs" variant="default" onClick={editable.edit}>Edit</Button>
        <Button size="xs" variant="default" onClick={editable.submit}>Submit</Button>
        <Button size="xs" variant="default" onClick={editable.cancel}>Cancel</Button>
      </Group>

      <Text size="sm">
        Value: {editable.getValue()} — editing: {editable.isEditing() ? 'yes' : 'no'}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const editable = useEditable({ defaultValue: 'Controlled by the hook' });

  return (
    <Stack maw={360}>
      <Editable controller={editable} />

      <Group>
        <Button size="xs" variant="default" onClick={editable.edit}>
          Edit
        </Button>
        <Button size="xs" variant="default" onClick={editable.submit}>
          Submit
        </Button>
        <Button size="xs" variant="default" onClick={editable.cancel}>
          Cancel
        </Button>
      </Group>

      <Text size="sm">
        Value: {editable.getValue()} — editing: {editable.isEditing() ? 'yes' : 'no'}
      </Text>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
