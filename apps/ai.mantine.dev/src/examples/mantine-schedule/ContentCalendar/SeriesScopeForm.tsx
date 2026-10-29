import { useState } from 'react';
import { Button, Group, Radio, Stack, Text, useModalCloseGuard } from '@mantine/core';
import type { SeriesScope } from './types';

interface SeriesScopeFormProps {
  issueTitle: string;
  onSubmit: (scope: SeriesScope) => void;
}

export function SeriesScopeForm({ issueTitle, onSubmit }: SeriesScopeFormProps) {
  const closeModal = useModalCloseGuard();
  const [scope, setScope] = useState<SeriesScope>('issue');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(scope);
      }}
    >
      <Stack>
        <Text size="sm">“{issueTitle}” is part of the weekly newsletter series.</Text>
        <Radio.Group
          label="Apply the change to"
          value={scope}
          onChange={(value) => setScope(value as SeriesScope)}
        >
          <Stack gap="xs" mt="xs">
            <Radio value="issue" label="This issue only" data-autofocus />
            <Radio value="series" label="The whole series" />
          </Stack>
        </Radio.Group>
        <Group justify="flex-end">
          <Button variant="default" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">Apply</Button>
        </Group>
      </Stack>
    </form>
  );
}
