import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsWrapperProps<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports wrapperProps prop', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} wrapperProps={{ 'data-test-prop': 'test-prop' }} />
    );
    expect(container.firstChild).toHaveAttribute('data-test-prop', 'test-prop');
  });
}
