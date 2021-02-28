import React from 'react';
import { shallow } from 'enzyme';

export function itSupportsStyle(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('accepts style property', () => {
    const element = shallow(
      <Component {...requiredProps} style={{ border: '1px solid red', lineHeight: 1 }} />
    ).render();
    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });
}
