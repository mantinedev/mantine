import { DateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  return (
    <DateInput clearable defaultValue={new Date()} label="Date input" placeholder="Date input" />
  );
}
`;

function Demo() {
  return (
    <DateInput clearable defaultValue={new Date()} label="Date input" placeholder="Date input" />
  );
}

export const clearable: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
