import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return <MaskedDateInput label="Date of birth" clearable defaultValue="2000-06-15" />;
}
`;

function Demo() {
  return <MaskedDateInput label="Date of birth" clearable defaultValue="2000-06-15" />;
}

export const clearable: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
