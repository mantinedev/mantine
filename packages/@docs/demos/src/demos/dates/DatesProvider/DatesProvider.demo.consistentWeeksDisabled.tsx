import { DatePicker, DatesProvider } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatePicker, DatesProvider } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: false }}>
      <DatePicker />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider settings={{ consistentWeeks: false }}>
      <DatePicker />
    </DatesProvider>
  );
}

export const consistentWeeksDisabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
