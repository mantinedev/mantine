import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsStyle<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports style property', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} style={{ border: '1px solid cyan' }} />
    );
    expect(container.firstElementChild).toHaveStyle({ border: '1px solid cyan' });
  });
}
