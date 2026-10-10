import { Button, Group, Surface, Text } from '@mantine/core';

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
    <Surface
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
          <Button size="md" variant="default" onClick={onDiscard} disabled={saving}>
            Discard
          </Button>

          <Button size="md" type="submit" loading={saving}>
            Save
          </Button>
        </Group>
      </Group>
    </Surface>
  );
}
