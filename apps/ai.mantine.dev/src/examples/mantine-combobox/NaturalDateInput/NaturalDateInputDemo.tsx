import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { NaturalDateInput } from './NaturalDateInput';

export function NaturalDateInputDemo() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Stack gap="xs">
      <NaturalDateInput label="Due date" value={value} onChange={setValue} />
      <Text size="sm">Value: {value ? value.toISOString() : 'null'}</Text>
    </Stack>
  );
}
