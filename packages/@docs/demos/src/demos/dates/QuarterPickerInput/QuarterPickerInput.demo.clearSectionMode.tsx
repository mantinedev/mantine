import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { QuarterPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { QuarterPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <QuarterPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick quarter"
        defaultValue="2026-04-01"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <QuarterPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick quarter"
        defaultValue="2026-04-01"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <QuarterPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick quarter"
        defaultValue="2026-04-01"
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
      <QuarterPickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick quarter"
        defaultValue="2026-04-01"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <QuarterPickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick quarter"
        defaultValue="2026-04-01"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <QuarterPickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick quarter"
        defaultValue="2026-04-01"
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
