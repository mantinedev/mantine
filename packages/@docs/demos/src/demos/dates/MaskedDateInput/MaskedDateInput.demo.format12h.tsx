import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return <MaskedDateInput label="Date and time" withTime format="12h" />;
}
`;

function Demo() {
  return <MaskedDateInput label="Date and time" withTime format="12h" />;
}

export const format12h: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
