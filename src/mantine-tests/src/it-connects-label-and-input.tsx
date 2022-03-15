import React from 'react';
import { renderWithAct } from './render-with-act';

export function itConnectsLabelAndInput<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('connects label and input with given id', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} id="secret-test-id" label="Test label" />
    );
    expect(container.querySelector('[for="secret-test-id"]')).toBeInTheDocument();
    expect(container.querySelector('#secret-test-id')).toBeInTheDocument();
  });
}
