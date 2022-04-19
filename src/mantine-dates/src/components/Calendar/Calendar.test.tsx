import { itSupportsSystemProps } from '@mantine/tests';
import { Calendar, CalendarProps } from './Calendar';

const defaultProps: CalendarProps = {
  month: new Date(),
  value: new Date(),
};

describe('@mantine/dates/Calendar', () => {
  itSupportsSystemProps({
    component: Calendar,
    props: defaultProps,
    displayName: '@mantine/dates/Calendar',
  });
});
