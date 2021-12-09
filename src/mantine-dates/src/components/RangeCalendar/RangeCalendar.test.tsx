import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { RangeCalendar } from './RangeCalendar';
import { CalendarBase } from '../CalendarBase/CalendarBase';

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

  it('passes __staticSelector to CalendarBase', () => {
    const element = shallow(<RangeCalendar {...defaultProps} __staticSelector="Test" />);
    expect(element.find(CalendarBase).prop('__staticSelector')).toBe('Test');
  });

  it('has correct displayName', () => {
    expect(RangeCalendar.displayName).toEqual('@mantine/dates/RangeCalendar');
  });
});
