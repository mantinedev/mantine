import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsStyle<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports style property', async () => {
    const { container } = render(
      <Component {...requiredProps} style={{ border: '1rem solid cyan' }} />
    );
    expect(container.firstElementChild).toHaveStyle({ border: '1rem solid cyan' });
  });
}
