import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Calendar } from './Calendar';
import { CalendarBase } from '../CalendarBase/CalendarBase';

const defaultProps = { month: new Date(), value: new Date() };

describe('@mantine/dates/Calendar', () => {
  itSupportsClassName(Calendar, defaultProps);
  itSupportsOthers(Calendar, defaultProps);
  itSupportsMargins(Calendar, defaultProps);
  itSupportsStyle(Calendar, defaultProps);
  itSupportsSx(Calendar, defaultProps);
  itSupportsRef(Calendar, defaultProps, HTMLDivElement);

  it('passes __staticSelector to CalendarBase', () => {
    const element = shallow(<Calendar {...defaultProps} __staticSelector="Test" />);
    expect(element.find(CalendarBase).prop('__staticSelector')).toBe('Test');
  });

  it('has correct displayName', () => {
    expect(Calendar.displayName).toEqual('@mantine/dates/Calendar');
  });
});
