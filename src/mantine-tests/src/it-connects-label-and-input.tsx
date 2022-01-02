import React from 'react';
import { renderWithAct } from './render-with-act';

export function itConnectsLabelAndInput(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('connects label and input with given id', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} id="secret-test-id" label="Test label" />
    );
    expect(container.querySelector('[for="secret-test-id"]')).toBeInTheDocument();
    expect(container.querySelector('#secret-test-id')).toBeInTheDocument();
  });
}
