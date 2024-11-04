import { TimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TimePicker } from '@mantine/dates';

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={[
        { label: 'Morning', values: ['06:00:00', '08:00:00', '10:00:00'] },
        { label: 'Afternoon', values: ['12:00:00', '14:00:00', '16:00:00'] },
        { label: 'Evening', values: ['18:00:00', '20:00:00', '22:00:00'] },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <TimePicker
      label="Enter time"
      withDropdown
      presets={[
        { label: 'Morning', values: ['06:00', '06:30', '08:00', '08:30', '10:00', '10:45'] },
        { label: 'Afternoon', values: ['12:00', '12:30', '14:00', '14:45', '16:00', '17:30'] },
        { label: 'Evening', values: ['18:00', '18:30', '20:00', '22:00'] },
      ]}
    />
  );
}

export const presetsGroups: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
