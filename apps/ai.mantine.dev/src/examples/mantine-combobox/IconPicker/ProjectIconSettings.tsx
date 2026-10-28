import { useState } from 'react';
import { Code, Stack } from '@mantine/core';
import type { IconValue } from './icon-data';
import { IconPicker } from './IconPicker';

export function ProjectIconSettings() {
  const [icon, setIcon] = useState<IconValue | null>(null);

  return (
    <Stack gap="xs">
      <IconPicker label="Project icon" value={icon} onChange={setIcon} />
      <Code block aria-label="Project icon value">
        {JSON.stringify(icon, null, 2)}
      </Code>
    </Stack>
  );
}
