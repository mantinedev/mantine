import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return <MaskedDateInput label="Date of birth" />;
}
`;

function Demo() {
  return <MaskedDateInput label="Date of birth" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
