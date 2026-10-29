import { Button, Group, Modal, Select, Stack, Textarea, TextInput } from '@mantine/core';

interface NewTaskModalProps {
  opened: boolean;
  onClose: () => void;
}

export function NewTaskModal({ opened, onClose }: NewTaskModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} title="New task">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onClose();
        }}
      >
        <Stack gap="md">
          <TextInput label="Title" placeholder="What needs to be done?" required data-autofocus />
          <Group grow>
            <Select
              label="Project"
              data={['Billing', 'Auth', 'Reports', 'Growth']}
              defaultValue="Billing"
            />
            <Select
              label="Assignee"
              data={['Ines Duarte', 'Maya Chen', 'Leo Martins', 'Priya Nair']}
              placeholder="Unassigned"
              clearable
            />
          </Group>
          <Textarea label="Description" autosize minRows={3} />
          <Group justify="flex-end" gap="xs">
            <Button variant="default" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create task</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
