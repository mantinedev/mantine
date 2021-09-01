import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { Dots } from './Dots';

describe('@mantine/decorations/Dots', () => {
  itSupportsClassName(Dots, {});
  itSupportsOthers(Dots, {});
  itSupportsStyle(Dots, {});

  it('passes width and height to svg', () => {
    const element = shallow(<Dots size={105} />);
    expect(element.prop('width')).toBe(105);
    expect(element.prop('height')).toBe(105);
  });

  it('has correct displayName', () => {
    expect(Dots.displayName).toEqual('@mantine/decorations/Dots');
  });
});
