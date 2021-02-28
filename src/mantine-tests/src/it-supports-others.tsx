import React from 'react';
import { shallow } from 'enzyme';

export function itSupportsOthers(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports ...others props', () => {
    const element = shallow(<Component {...requiredProps} data-other-attribute="test" />);
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });
}
