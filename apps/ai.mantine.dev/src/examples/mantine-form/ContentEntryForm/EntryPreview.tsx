import { Code, Stack, Title } from '@mantine/core';
import type { ContentEntry } from './types';

export function EntryPreview({ entry }: { entry: ContentEntry }) {
  return (
    <Stack gap="xs" component="section" aria-labelledby="content-entry-json">
      <Title order={4} id="content-entry-json">
        Entry JSON
      </Title>
      <Code block>{JSON.stringify(entry, null, 2)}</Code>
    </Stack>
  );
}
