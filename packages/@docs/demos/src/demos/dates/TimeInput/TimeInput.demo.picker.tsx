import { useRef } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef } from 'react';
import { ActionIcon } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}
`;

function Demo() {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock size={16} stroke={1.5} />
    </ActionIcon>
  );

  return (
    <TimeInput label="Click icon to show browser picker" ref={ref} rightSection={pickerControl} />
  );
}

export const picker: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 340,
  component: Demo,
  code,
};
