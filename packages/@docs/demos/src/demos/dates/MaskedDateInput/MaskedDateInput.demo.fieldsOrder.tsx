import { Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <MaskedDateInput label="Day / Month / Year (default)" fieldsOrder={['day', 'month', 'year']} />
      <MaskedDateInput label="Month / Day / Year" fieldsOrder={['month', 'day', 'year']} />
      <MaskedDateInput label="Year / Month / Day" fieldsOrder={['year', 'month', 'day']} />
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <MaskedDateInput
        label="Day / Month / Year (default)"
        fieldsOrder={['day', 'month', 'year']}
      />
      <MaskedDateInput label="Month / Day / Year" fieldsOrder={['month', 'day', 'year']} />
      <MaskedDateInput label="Year / Month / Day" fieldsOrder={['year', 'month', 'day']} />
    </Stack>
  );
}

export const fieldsOrder: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
