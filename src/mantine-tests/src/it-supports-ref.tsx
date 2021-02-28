import React from 'react';
import { mount } from 'enzyme';

export function itSupportsRef(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  refType: any
) {
  it('supports ref', () => {
    const ref = React.createRef<typeof refType>();
    mount(<Component {...requiredProps} ref={ref} />);
    expect(ref.current instanceof refType).toBe(true);
  });
}
