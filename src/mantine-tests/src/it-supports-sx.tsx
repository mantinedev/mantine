import React from 'react';
import { shallow } from 'enzyme';
import { dive } from './dive';

function isSxIncluded(sxProp: any, comparison: any) {
  if (Array.isArray(sxProp)) {
    return sxProp.some((item) => item === comparison);
  }

  return sxProp === comparison;
}

export function itSupportsSx(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  options?: { dive: number }
) {
  it('supports sx', () => {
    const fn = () => ({ color: 'red' });
    const object = { border: '1px solid orange', background: 'cyan' };
    const withFunction = dive(shallow(<Component {...requiredProps} sx={fn} />), options?.dive);
    const withObject = dive(shallow(<Component {...requiredProps} sx={object} />), options?.dive);

    expect(isSxIncluded(withObject.find('MantineBox').prop('sx'), object)).toBe(true);
    expect(isSxIncluded(withFunction.find('MantineBox').prop('sx'), fn)).toBe(true);
  });
}
