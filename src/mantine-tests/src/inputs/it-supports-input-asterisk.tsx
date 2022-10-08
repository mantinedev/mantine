import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsInputAsterisk<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string
) {
  it('supports withAsterisk prop', () => {
    const { container } = render(
      <Component {...requiredProps} required={false} withAsterisk label="test-label" />
    );
    expect(container.querySelector(`.mantine-${name}-required`)).toBeInTheDocument();
  });
}
