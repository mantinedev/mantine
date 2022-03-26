import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsClassName<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports className prop', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} className="test-class-name" />
    );
    expect(container.firstChild).toHaveClass('test-class-name');
  });
}
