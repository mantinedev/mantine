import { useRef } from 'react';
import { ActionBar, Button, Text } from '@mantine/core';

interface UnsavedChangesBarProps {
  dirtySections: string[];
  saving: boolean;
  onCancel: () => void;
  onSave: () => void;
}

export function UnsavedChangesBar({
  dirtySections,
  saving,
  onCancel,
  onSave,
}: UnsavedChangesBarProps) {
  const opened = dirtySections.length > 0;
  // The bar keeps the last open message while it animates out
  const shown = useRef(dirtySections);
  if (opened) {
    shown.current = dirtySections;
  }
  const message = `Unsaved changes in ${shown.current.join(', ')}`;

  return (
    <ActionBar
      opened={opened}
      shadow="md"
      aria-label="Unsaved changes actions"
      announcement={message}
    >
      <Text size="sm" px="xs">
        {message}
      </Text>
      <ActionBar.Divider />
      <Button variant="default" size="compact-sm" onClick={onCancel} disabled={saving}>
        Cancel
      </Button>
      <Button size="compact-sm" loading={saving} onClick={onSave}>
        Save
      </Button>
    </ActionBar>
  );
}
