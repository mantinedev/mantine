import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Month } from './Month';
import { Month as MonthStylesApi } from './styles.api';

const defaultProps = { month: new Date(), value: new Date() };

describe('@mantine/core/Month', () => {
  itSupportsStyle(Month, defaultProps);
  itSupportsClassName(Month, defaultProps);
  itSupportsOthers(Month, defaultProps);
  itSupportsStylesApi(
    Month,
    defaultProps,
    Object.keys(MonthStylesApi).filter(
      (key) => key !== 'inRange' && key !== 'firstInRange' && key !== 'lastInRange'
    ),
    'month'
  );

  it('has correct displayName', () => {
    expect(Month.displayName).toEqual('@mantine/core/Month');
  });

  it('renders correct amount of weekdays', () => {
    const element = shallow(<Month month={new Date()} />);
    expect(element.render().find('.mantine-month-weekdayCell')).toHaveLength(7);
  });

  it('renders correct amount of days', () => {
    const element = shallow(<Month month={new Date(2021, 1, 2)} />);
    expect(element.render().find('tbody tr')).toHaveLength(4);
    expect(element.render().find('tbody td')).toHaveLength(28);
  });
});
