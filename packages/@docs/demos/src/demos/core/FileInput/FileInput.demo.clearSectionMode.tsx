import { IconChevronDown } from '@tabler/icons-react';
import { FileInput, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconChevronDown } from '@tabler/icons-react';
import { FileInput, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <FileInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick file"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <FileInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick file"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <FileInput
        label="clearSectionMode='clear'"
        placeholder="Pick file"
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
      <FileInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick file"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="both"
      />

      <FileInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick file"
        clearable
        rightSection={<IconChevronDown size={16} />}
        clearSectionMode="rightSection"
      />

      <FileInput
        label="clearSectionMode='clear'"
        placeholder="Pick file"
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
