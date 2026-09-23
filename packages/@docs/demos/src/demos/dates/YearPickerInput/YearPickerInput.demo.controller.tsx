import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { YearPickerInput, useYearPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, Stack, Text } from '@mantine/core';
import { YearPickerInput, useYearPickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>('2024-01-01');
  const controller = useYearPickerInput();

  return (
    <Stack>
      <Group>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.previous();
          }}
        >
          Previous decade
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.next();
          }}
        >
          Next decade
        </Button>
      </Group>

      <YearPickerInput
        label="Pick year"
        placeholder="Pick year"
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
  const [value, setValue] = useState<string | null>('2024-01-01');
  const controller = useYearPickerInput();

  return (
    <Stack>
      <Group>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.previous();
          }}
        >
          Previous decade
        </Button>
        <Button
          variant="default"
          onClick={() => {
            controller.openDropdown();
            controller.next();
          }}
        >
          Next decade
        </Button>
      </Group>

      <YearPickerInput
        label="Pick year"
        placeholder="Pick year"
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
