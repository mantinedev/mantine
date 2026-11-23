import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return (
    <MaskedDateInput
      label="Date of birth"
      minDate="1924-01-01"
      maxDate="2024-12-31"
    />
  );
}
`;

function Demo() {
  return <MaskedDateInput label="Date of birth" minDate="1924-01-01" maxDate="2024-12-31" />;
}

export const minMax: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
