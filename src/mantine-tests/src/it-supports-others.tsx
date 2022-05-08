import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsOthers<P>(
  Component: React.ComponentType<P>,
  requiredProps: P,
  selector?: string
) {
  it('supports ...others props', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} data-other-attribute="test" />
    );
    const target = selector ? container.querySelector(selector) : container.firstChild;
    expect(target).toHaveAttribute('data-other-attribute', 'test');
  });
}
