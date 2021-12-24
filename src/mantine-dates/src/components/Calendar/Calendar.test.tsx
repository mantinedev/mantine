import { itSupportsRef, itSupportsSystemProps } from '@mantine/tests';
import { Calendar, CalendarProps } from './Calendar';

const defaultProps: CalendarProps = {
  month: new Date(),
  value: new Date(),
};

describe('@mantine/dates/Calendar', () => {
  itSupportsSystemProps(Calendar, defaultProps, '@mantine/dates/Calendar');
  itSupportsRef(Calendar, defaultProps, HTMLDivElement);
});
