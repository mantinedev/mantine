import { IconChevronDown } from '@tabler/icons-react';
import { Stack } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconChevronDown } from '@tabler/icons-react';
import { Stack } from '@mantine/core';
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DateInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <DateInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <DateInput
        label="clearSectionMode='clear'"
        placeholder="Pick date"
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
      <DateInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <DateInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <DateInput
        label="clearSectionMode='clear'"
        placeholder="Pick date"
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
