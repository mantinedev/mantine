import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itIsPolymorphic,
} from '@mantine/tests';
import { ColorSwatch } from './ColorSwatch';

describe('@mantine/core/ColorSwatch', () => {
  itSupportsOthers(ColorSwatch, { color: '#fff' });
  itSupportsClassName(ColorSwatch, { color: '#fff' });
  itSupportsStyle(ColorSwatch, { color: '#fff' });
  itSupportsMargins(ColorSwatch, { color: '#fff' });
  itIsPolymorphic(ColorSwatch, { color: '#fff' });
  itSupportsRef(ColorSwatch, { color: '#fff' }, HTMLDivElement);

  it('sets correct background-color based on color property', () => {
    const element = shallow(<ColorSwatch color="red" />);
    expect(
      element.find('.mantine-ColorSwatch-overlay').at(2).render().css('background-color')
    ).toBe('red');
  });

  it('allows size and color props override with style property', () => {
    const element = shallow(
      <ColorSwatch
        color="red"
        size={51}
        style={{ width: 41, height: 41, backgroundColor: 'blue' }}
      />
    ).render();

    expect(element.css('width')).toBe('41px');
    expect(element.css('height')).toBe('41px');
    expect(element.css('background-color')).toBe('blue');
  });

  it('has correct displayName', () => {
    expect(ColorSwatch.displayName).toEqual('@mantine/core/ColorSwatch');
  });
});
