import { IconChevronDown } from '@tabler/icons-react';
import { Stack, TagsInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconChevronDown } from '@tabler/icons-react';
import { Stack, TagsInput } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <TagsInput
        label="clearSectionMode='both' (default)"
        placeholder="Enter tags"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <TagsInput
        label="clearSectionMode='rightSection'"
        placeholder="Enter tags"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <TagsInput
        label="clearSectionMode='clear'"
        placeholder="Enter tags"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
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
      <TagsInput
        label="clearSectionMode='both' (default)"
        placeholder="Enter tags"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <TagsInput
        label="clearSectionMode='rightSection'"
        placeholder="Enter tags"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <TagsInput
        label="clearSectionMode='clear'"
        placeholder="Enter tags"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
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
