import { itSupportsSystemProps } from '@mantine/tests';
import { RangeCalendar, RangeCalendarProps } from './RangeCalendar';

const defaultProps: RangeCalendarProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
};

describe('@mantine/dates/RangeCalendar', () => {
  itSupportsSystemProps({
    component: RangeCalendar,
    props: defaultProps,
    displayName: '@mantine/dates/RangeCalendar',
    refType: HTMLDivElement,
  });
});
