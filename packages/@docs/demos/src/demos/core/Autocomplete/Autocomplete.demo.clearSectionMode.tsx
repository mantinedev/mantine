import { IconChevronDown } from '@tabler/icons-react';
import { Autocomplete, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconChevronDown } from '@tabler/icons-react';
import { Autocomplete, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Autocomplete
        label="clearSectionMode='both' (default)"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <Autocomplete
        label="clearSectionMode='rightSection'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <Autocomplete
        label="clearSectionMode='clear'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
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
      <Autocomplete
        label="clearSectionMode='both' (default)"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <Autocomplete
        label="clearSectionMode='rightSection'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <Autocomplete
        label="clearSectionMode='clear'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
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
