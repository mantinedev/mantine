import { Button, Group, Paper, Text } from '@mantine/core';

interface SaveBarProps {
  visible: boolean;
  saving: boolean;
  onDiscard: () => void;
}

export function SaveBar({ visible, saving, onDiscard }: SaveBarProps) {
  if (!visible) {
    return null;
  }

  return (
    <Paper
      withBorder
      shadow="md"
      p="md"
      mt="xl"
      style={{ position: 'sticky', bottom: 'var(--mantine-spacing-md)' }}
    >
      <Group justify="space-between">
        <Text size="sm" fw={500}>
          You have unsaved changes
        </Text>
        <Group gap="xs">
          <Button variant="default" onClick={onDiscard} disabled={saving}>
            Discard
          </Button>
          <Button type="submit" loading={saving}>
            Save
          </Button>
        </Group>
      </Group>
    </Paper>
  );
}
