import { Calendar } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar 
      customFirstDayOfMonth={5}
      customDaysInMonth={31}
    />
  );
}
`;

function Demo() {
  return <Calendar customFirstDayOfMonth={5} customDaysInMonth={31} />;
}

export const customMonth: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
