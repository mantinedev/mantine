import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { WeekPickerInput, useWeekPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { WeekPickerInput, useWeekPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>('2024-06-03');
  const controller = useWeekPickerInput();

  return (
    <Stack>
      <Group>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.setLevel('year');
          }}
        >
          Pick a month
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.setLevel('decade');
          }}
        >
          Pick a year
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.setDate(new Date());
          }}
        >
          Open at today
        </Button>
      </Group>

      <WeekPickerInput
        label="Pick week"
        placeholder="Pick week"
        value={value}
        onChange={setValue}
        controller={controller}
      />

      <Text size="sm" c="dimmed">
        Dropdown {controller.isDropdownOpened() ? 'opened' : 'closed'}, displayed{' '}
        {controller.getDisplayedLevel()}: {controller.getDisplayedDate() ?? 'none'}
      </Text>
    </Stack>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>('2024-06-03');
  const controller = useWeekPickerInput();

  return (
    <Stack>
      <Group>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.setLevel('year');
          }}
        >
          Pick a month
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.setLevel('decade');
          }}
        >
          Pick a year
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.setDate(new Date());
          }}
        >
          Open at today
        </Button>
      </Group>

      <WeekPickerInput
        label="Pick week"
        placeholder="Pick week"
        value={value}
        onChange={setValue}
        controller={controller}
      />

      <Text size="sm" c="dimmed">
        Dropdown {controller.isDropdownOpened() ? 'opened' : 'closed'}, displayed{' '}
        {controller.getDisplayedLevel()}: {controller.getDisplayedDate() ?? 'none'}
      </Text>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};
