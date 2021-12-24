import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsClassName(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('accepts className from props', () => {
    const { container } = render(<Component {...requiredProps} className="test-class-name" />);
    expect(container.firstChild).toHaveClass('test-class-name');
  });
}
