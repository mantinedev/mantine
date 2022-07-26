import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsOthers<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  selector?: string
) {
  it('supports ...others props', () => {
    const { container } = render(<Component {...requiredProps} data-other-attribute="test" />);
    const target = selector ? container.querySelector(selector) : container.firstChild;
    expect(target).toHaveAttribute('data-other-attribute', 'test');
  });
}
