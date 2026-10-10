import { Button, Group, Modal, Text } from '@mantine/core';

interface DiscardChangesModalProps {
  opened: boolean;
  onDiscard: () => void;
  onKeepEditing: () => void;
}

export function DiscardChangesModal({
  opened,
  onDiscard,
  onKeepEditing,
}: DiscardChangesModalProps) {
  return (
    <Modal opened={opened} onClose={onKeepEditing} title="Discard changes?">
      <Text size="sm">You have unsaved changes. If you leave this page, they will be lost.</Text>

      <Group justify="flex-end" mt="md">
        <Button variant="default" onClick={onKeepEditing}>
          Keep editing
        </Button>

        <Button color="red" onClick={onDiscard}>
          Discard
        </Button>
      </Group>
    </Modal>
  );
}
