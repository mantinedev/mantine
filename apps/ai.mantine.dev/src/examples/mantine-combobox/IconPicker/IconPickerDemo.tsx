import { useState } from 'react';
import { Code, Stack } from '@mantine/core';
import { IconPicker, type IconPickerValue } from './IconPicker';

export function IconPickerDemo() {
  const [value, setValue] = useState<IconPickerValue | null>(null);

  return (
    <Stack gap="sm">
      <IconPicker value={value} onChange={setValue} />
      <Code block aria-label="Value">
        {JSON.stringify(value, null, 2)}
      </Code>
    </Stack>
  );
}
