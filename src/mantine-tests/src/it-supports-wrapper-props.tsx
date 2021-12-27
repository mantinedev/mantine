import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsWrapperProps(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports wrapperProps prop', () => {
    const { container } = render(
      <Component {...requiredProps} wrapperProps={{ 'data-test-prop': 'test-prop' }} />
    );
    expect(container.firstChild).toHaveAttribute('data-test-prop', 'test-prop');
  });
}
