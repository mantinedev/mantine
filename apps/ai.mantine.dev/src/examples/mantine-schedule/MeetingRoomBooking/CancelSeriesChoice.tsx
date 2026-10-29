import { useState } from 'react';
import { Button, Group, Radio, Stack, useModalCloseGuard } from '@mantine/core';

export type CancelScope = 'occurrence' | 'series';

interface CancelSeriesChoiceProps {
  occurrenceLabel: string;
  onConfirm: (scope: CancelScope) => void;
}

export function CancelSeriesChoice({ occurrenceLabel, onConfirm }: CancelSeriesChoiceProps) {
  const [scope, setScope] = useState<CancelScope>('occurrence');
  const close = useModalCloseGuard();

  return (
    <Stack>
      <Radio.Group
        label="This booking repeats weekly. What do you want to cancel?"
        value={scope}
        onChange={(value) => setScope(value as CancelScope)}
      >
        <Stack gap="xs" mt="xs">
          <Radio value="occurrence" label={`Only this booking (${occurrenceLabel})`} />
          <Radio value="series" label="All bookings in the series" />
        </Stack>
      </Radio.Group>
      <Group justify="flex-end">
        <Button variant="default" onClick={close}>
          Keep booking
        </Button>
        <Button color="red" onClick={() => onConfirm(scope)}>
          Cancel booking
        </Button>
      </Group>
    </Stack>
  );
}
