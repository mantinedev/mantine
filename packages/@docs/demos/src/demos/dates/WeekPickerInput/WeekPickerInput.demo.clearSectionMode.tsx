import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { WeekPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { WeekPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <WeekPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick week"
        defaultValue="2026-03-02"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <WeekPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick week"
        defaultValue="2026-03-02"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <WeekPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick week"
        defaultValue="2026-03-02"
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
      <WeekPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick week"
        defaultValue="2026-03-02"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <WeekPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick week"
        defaultValue="2026-03-02"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <WeekPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick week"
        defaultValue="2026-03-02"
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
