import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsStyle(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports style property', () => {
    const { container } = render(
      <Component {...requiredProps} style={{ border: '1px solid cyan' }} />
    );
    expect(container.firstElementChild).toHaveStyle({ border: '1px solid cyan' });
  });
}
