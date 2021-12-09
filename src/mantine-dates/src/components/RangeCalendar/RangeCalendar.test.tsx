import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { RangeCalendar } from './RangeCalendar';

const defaultProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
};

describe('@mantine/dates/RangeCalendar', () => {
  itSupportsClassName(RangeCalendar, defaultProps);
  itSupportsOthers(RangeCalendar, defaultProps);
  itSupportsStyle(RangeCalendar, defaultProps);
  itSupportsMargins(RangeCalendar, defaultProps);
  itSupportsRef(RangeCalendar, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(RangeCalendar.displayName).toEqual('@mantine/dates/RangeCalendar');
  });
});
