import { DateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}
`;

function Demo() {
  return <DateInput label="Disabled" placeholder="Date input" disabled />;
}

export const disabled: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
