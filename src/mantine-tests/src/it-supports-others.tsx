import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsOthers(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports ...others props', () => {
    const { container } = render(<Component {...requiredProps} data-other-attribute="test" />);
    expect(container.firstChild).toHaveAttribute('data-other-attribute', 'test');
  });
}
