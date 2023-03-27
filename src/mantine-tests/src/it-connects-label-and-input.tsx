import React from 'react';
import { render } from '@testing-library/react';

export function itConnectsLabelAndInput<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('connects label and input with given id', () => {
    const { container } = render(
      <Component {...requiredProps} id="secret-test-id" label="Test label" />
    );
    expect(container.querySelector('[for="secret-test-id"]')).toBeInTheDocument();
    expect(container.querySelector('#secret-test-id')).toBeInTheDocument();
  });
}
