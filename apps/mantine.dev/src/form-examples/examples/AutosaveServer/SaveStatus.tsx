import { Badge, Group, Loader, Text } from '@mantine/core';

interface SaveStatusProps {
  status: 'idle' | 'saving' | 'saved';
  savedAt: string | null;
  dirty: boolean;
}

export function SaveStatus({ status, savedAt, dirty }: SaveStatusProps) {
  if (status === 'saving') {
    return (
      <Group gap="xs">
        <Loader size="xs" />

        <Text size="sm">Saving…</Text>
      </Group>
    );
  }

  if (dirty) {
    return <Badge color="orange">Unsaved changes</Badge>;
  }

  return (
    <Text size="sm">
      {status === 'saved' && savedAt ? `Saved at ${savedAt}` : 'All changes saved'}
    </Text>
  );
}
