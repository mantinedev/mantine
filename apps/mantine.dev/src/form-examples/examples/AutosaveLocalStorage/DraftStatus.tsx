import { Text } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { Draft, STORAGE_KEY } from './draft';

export function DraftStatus() {
  const [draft] = useLocalStorage<Draft | null>({ key: STORAGE_KEY, defaultValue: null });
  return <Text size="sm">{draft ? `Draft saved at ${draft.savedAt}` : 'No draft saved'}</Text>;
}
