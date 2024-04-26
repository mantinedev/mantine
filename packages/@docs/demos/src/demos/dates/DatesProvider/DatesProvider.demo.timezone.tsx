import { DatesProvider, DateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DatesProvider, DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatesProvider settings={{ timezone: 'America/New_York' }}>
      <DateTimePicker label="Pick a Date" placeholder="Pick a Date" defaultValue={new Date('2000-10-03 02:10:00Z')} />
    </DatesProvider>
  );
}
`;

function Demo() {
  return (
    <DatesProvider settings={{ timezone: 'America/New_York' }}>
      <DateTimePicker
        label="Pick a Date"
        placeholder="Pick a Date"
        defaultValue={new Date('2000-10-03 02:10:00Z')}
      />
    </DatesProvider>
  );
}

export const timezone: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
