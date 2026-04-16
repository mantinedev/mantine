import { Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <MaskedDateInput label="Dot separator" dateSeparator="." />
      <MaskedDateInput label="Dash separator" dateSeparator="-" />
      <MaskedDateInput label="Spaced slash separator" dateSeparator=" / " />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <MaskedDateInput label="Dot separator" dateSeparator="." />
      <MaskedDateInput label="Dash separator" dateSeparator="-" />
      <MaskedDateInput label="Spaced slash separator" dateSeparator=" / " />
    </Stack>
  );
}

export const dateSeparator: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
