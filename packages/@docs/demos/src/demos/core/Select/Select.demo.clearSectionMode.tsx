import { CaretDownIcon } from '@phosphor-icons/react';
import { Select, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CaretDownIcon } from '@phosphor-icons/react';
import { Select, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Select
        label="clearSectionMode='both' (default)"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <Select
        label="clearSectionMode='rightSection'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <Select
        label="clearSectionMode='clear'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Select
        label="clearSectionMode='both' (default)"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <Select
        label="clearSectionMode='rightSection'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <Select
        label="clearSectionMode='clear'"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        clearable
        rightSection={<CaretDownIcon size={16} />}
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
