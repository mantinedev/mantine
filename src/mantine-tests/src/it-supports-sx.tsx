import React from 'react';
import { shallow } from 'enzyme';

export function itSupportsSx(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports sx', () => {
    const fn = () => ({ color: 'red' });
    const withFunction = shallow(<Component {...requiredProps} sx={fn} />);
    const withObject = shallow(
      <Component {...requiredProps} sx={{ border: '1px solid orange', background: 'cyan' }} />
    );

    expect(withObject.find('MantineBox').prop('sx')).toEqual({
      border: '1px solid orange',
      background: 'cyan',
    });
    expect(withFunction.find('MantineBox').prop('sx')).toBe(fn);
  });
}
