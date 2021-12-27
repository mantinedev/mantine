import React from 'react';
import { render } from '@testing-library/react';

export function itConnectsLabelAndInput(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('connects label and input with given id', () => {
    const { container } = render(
      <Component {...requiredProps} id="secret-test-id" label="Test label" />
    );
    expect(container.querySelector('[for="secret-test-id"]')).toBeInTheDocument();
    expect(container.querySelector('#secret-test-id')).toBeInTheDocument();
  });
}
