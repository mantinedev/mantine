import React from 'react';
import { shallow } from 'enzyme';

export function itSupportsClassName(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('accepts className from props', () => {
    const element = shallow(<Component {...requiredProps} className="test-class-name" />);
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });
}
