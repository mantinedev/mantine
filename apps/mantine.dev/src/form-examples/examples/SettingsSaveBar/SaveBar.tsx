import { ActionBar, Button, Text } from '@mantine/core';

interface SaveBarProps {
  opened: boolean;
  saving: boolean;
  onDiscard: () => void;
}

export function SaveBar({ opened, saving, onDiscard }: SaveBarProps) {
  return (
    <ActionBar
      opened={opened}
      withinPortal={false}
      shadow="md"
      aria-label="Unsaved changes actions"
    >
      <Text size="sm" fw={500} px="xs">
        You have unsaved changes
      </Text>

      <ActionBar.Divider />

      <Button size="md" variant="default" onClick={onDiscard} disabled={saving}>
        Discard
      </Button>

      <Button size="md" type="submit" loading={saving}>
        Save
      </Button>
    </ActionBar>
  );
}
