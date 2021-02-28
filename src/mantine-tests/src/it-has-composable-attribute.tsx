import React from 'react';
import { shallow } from 'enzyme';

export function isHasComposableAttribute(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('has data-mantine-composable attribute', () => {
    const element = shallow(<Component {...requiredProps} />);
    expect(element.render().attr('data-mantine-composable')).toBe('true');
  });
}
