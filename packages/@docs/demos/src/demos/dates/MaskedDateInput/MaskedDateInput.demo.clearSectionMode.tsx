import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <MaskedDateInput
        label="clearSectionMode='both' (default)"
        defaultValue="2000-06-15"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <MaskedDateInput
        label="clearSectionMode='rightSection'"
        defaultValue="2000-06-15"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <MaskedDateInput
        label="clearSectionMode='clear'"
        defaultValue="2000-06-15"
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
      <MaskedDateInput
        label="clearSectionMode='both' (default)"
        defaultValue="2000-06-15"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <MaskedDateInput
        label="clearSectionMode='rightSection'"
        defaultValue="2000-06-15"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <MaskedDateInput
        label="clearSectionMode='clear'"
        defaultValue="2000-06-15"
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
  centered: true,
  maxWidth: 340,
};
