import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return <MaskedDateInput label="Date and time" withTime withSeconds />;
}
`;

function Demo() {
  return <MaskedDateInput label="Date and time" withTime withSeconds />;
}

export const withSeconds: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
