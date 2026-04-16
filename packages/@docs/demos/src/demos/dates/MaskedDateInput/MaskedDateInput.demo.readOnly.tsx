import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return <MaskedDateInput label="Date of birth" defaultValue="2000-06-15" readOnly />;
}
`;

function Demo() {
  return <MaskedDateInput label="Date of birth" defaultValue="2000-06-15" readOnly />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
