import { useRef } from 'react';
import { ActionBar, Button, Text } from '@mantine/core';
import { formatList } from '../format-list';

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
  // The bar fades out after the last save: keep showing the sections it was opened for
  const shown = useRef(dirtySections);
  if (opened) {
    shown.current = dirtySections;
  }
  const message = `Unsaved changes in ${formatList(shown.current)}`;

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
      <Button size="compact-sm" onClick={onSave} loading={saving}>
        Save
      </Button>
    </ActionBar>
  );
}
