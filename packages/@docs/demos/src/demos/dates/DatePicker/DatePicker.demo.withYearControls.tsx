import { DatePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      defaultDate="2022-02-01"
      withYearControls
    />
  );
}
`;

function Demo() {
  return <DatePicker defaultDate="2022-02-01" withYearControls />;
}

export const withYearControls: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
