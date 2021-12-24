import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itIsPolymorphic,
  itSupportsSx,
} from '@mantine/tests';
import { ColorSwatch } from './ColorSwatch';

const defaultProps = { color: '#fff' };

describe('@mantine/core/ColorSwatch', () => {
  itSupportsOthers(ColorSwatch, defaultProps);
  itSupportsClassName(ColorSwatch, defaultProps);
  itSupportsStyle(ColorSwatch, defaultProps);
  itSupportsSx(ColorSwatch, defaultProps);
  itSupportsMargins(ColorSwatch, defaultProps);
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsRef(ColorSwatch, defaultProps, HTMLDivElement);

  it('sets correct background-color based on color property', () => {
    const element = shallow(<ColorSwatch color="red" />);
    expect(
      element.find('.mantine-ColorSwatch-overlay').at(2).render().css('background-color')
    ).toBe('red');
  });

  it('has correct displayName', () => {
    expect(ColorSwatch.displayName).toEqual('@mantine/core/ColorSwatch');
  });
});
