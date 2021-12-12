import React from 'react';
import { shallow } from 'enzyme';
import { dive } from './dive';

export function itSupportsSx(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  options?: { dive: number }
) {
  it('supports sx', () => {
    const fn = () => ({ color: 'red' });
    const withFunction = dive(shallow(<Component {...requiredProps} sx={fn} />), options?.dive);
    const withObject = dive(
      shallow(
        <Component {...requiredProps} sx={{ border: '1px solid orange', background: 'cyan' }} />
      ),
      options?.dive
    );

    expect(withObject.find('MantineBox').prop('sx')).toEqual({
      border: '1px solid orange',
      background: 'cyan',
    });
    expect(withFunction.find('MantineBox').prop('sx')).toBe(fn);
  });
}
