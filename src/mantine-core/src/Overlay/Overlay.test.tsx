import React from 'react';
import { shallow } from 'enzyme';
import { itSupportsOthers, itSupportsClassName, itSupportsStyle } from '@mantine/tests';
import { Overlay } from './Overlay';

describe('@mantine/core/Overlay', () => {
  itSupportsStyle(Overlay, {});
  itSupportsClassName(Overlay, {});
  itSupportsOthers(Overlay, {});

  it('has correct displayName', () => {
    expect(Overlay.displayName).toEqual('@mantine/core/Overlay');
  });

  it('sets background-color and opacity from props', () => {
    const element = shallow(<Overlay opacity={0.99} color="#cecece" />);
    expect(element.render().css('background-color')).toBe('#cecece');
    expect(element.render().css('opacity')).toBe('0.99');
  });
});
