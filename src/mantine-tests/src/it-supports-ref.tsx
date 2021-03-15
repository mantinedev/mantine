import React from 'react';
import { mount } from 'enzyme';

export function itSupportsRef(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  refType: any,
  refProp: string = 'ref'
) {
  it('supports ref', () => {
    const ref = React.createRef<typeof refType>();
    mount(<Component {...requiredProps} {...{ [refProp]: ref }} />);
    expect(ref.current instanceof refType).toBe(true);
  });
}
