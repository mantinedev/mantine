import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsOthers<P>(Component: React.ComponentType<P>, requiredProps: P) {
  it('supports ...others props', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} data-other-attribute="test" />
    );
    expect(container.firstChild).toHaveAttribute('data-other-attribute', 'test');
  });
}
