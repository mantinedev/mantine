import { IconChevronDown } from '@tabler/icons-react';
import { Stack } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconChevronDown } from '@tabler/icons-react';
import { Stack } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <MonthPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <MonthPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <MonthPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <MonthPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <MonthPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <MonthPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick month"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}

export const clearSectionMode: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
