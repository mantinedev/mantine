import { QuarterPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { QuarterPicker } from '@mantine/dates';

function Demo() {
  return <QuarterPicker quartersListFormat="[Quarter] Q" yearsListFormat="YY" />;
}
`;

function Demo() {
  return <QuarterPicker quartersListFormat="[Quarter] Q" yearsListFormat="YY" />;
}

export const listFormat: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
