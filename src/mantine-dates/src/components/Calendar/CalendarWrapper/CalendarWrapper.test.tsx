import React from 'react';
import { shallow } from 'enzyme';
import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsMargins,
} from '@mantine/tests';
import { sizes as DAY_SIZES } from '../../Month/Day/Day.styles';
import { CalendarWrapper } from './CalendarWrapper';

const defaultProps = {
  size: 'sm',
  fullWidth: false,
};

describe('@mantine/dates/CalendarWrapper', () => {
  itRendersChildren(CalendarWrapper, defaultProps);
  itSupportsStyle(CalendarWrapper, defaultProps);
  itSupportsClassName(CalendarWrapper, defaultProps);
  itSupportsMargins(CalendarWrapper, defaultProps);
  itSupportsOthers(CalendarWrapper, defaultProps);

  it('sets max-width based on size value', () => {
    const xl = shallow(<CalendarWrapper size="xl" fullWidth={false} />);
    const sm = shallow(<CalendarWrapper size="sm" fullWidth={false} />);

    expect(xl.render().css('max-width')).toBe(`${DAY_SIZES.xl * 7}px`);
    expect(sm.render().css('max-width')).toBe(`${DAY_SIZES.sm * 7}px`);
  });

  it('ignores size if fullWidth is set to true', () => {
    const element = shallow(<CalendarWrapper size="xl" fullWidth />);
    expect(element.render().css('max-width')).toBe('100%');
  });

  it('has correct displayName', () => {
    expect(CalendarWrapper.displayName).toEqual('@mantine/dates/CalendarWrapper');
  });
});
