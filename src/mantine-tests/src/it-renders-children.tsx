import React from 'react';
import { shallow } from 'enzyme';

export function itRendersChildren(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('renders children', () => {
    const element = shallow(
      <Component {...requiredProps}>
        <span className="test-children">test-children</span>
      </Component>
    );
    expect(element.render().find('.test-children')).toHaveLength(1);
  });
}
