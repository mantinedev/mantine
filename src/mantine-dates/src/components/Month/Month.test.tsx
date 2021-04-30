import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Month } from './Month';

describe('@mantine/core/Month', () => {
  itSupportsStyle(Month, { month: new Date() });
  itSupportsClassName(Month, { month: new Date() });
  itSupportsOthers(Month, { month: new Date() });

  it('has correct displayName', () => {
    expect(Month.displayName).toEqual('@mantine/core/Month');
  });

  it('renders correct amount of weekdays', () => {
    const element = shallow(<Month month={new Date()} />);
    expect(element.render().find('thead th')).toHaveLength(7);
  });

  it('renders correct amount of days', () => {
    const element = shallow(<Month month={new Date(2021, 1, 2)} />);
    expect(element.render().find('tbody tr')).toHaveLength(4);
    expect(element.render().find('tbody td')).toHaveLength(28);
  });
});
