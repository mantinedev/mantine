import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsInputContainer<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  name: string
) {
  it('supports inputContainer prop', () => {
    const { container } = render(
      <Component
        {...requiredProps}
        required
        id="invalid-test-id"
        error
        inputContainer={(children: React.ReactNode) => (
          <div className="test-input-container">{children}</div>
        )}
      />
    );

    expect(container.querySelector('.test-input-container')).toBeInTheDocument();
    expect(
      container.querySelector(`.test-input-container .mantine-${name}-input`)
    ).toBeInTheDocument();
  });
}
