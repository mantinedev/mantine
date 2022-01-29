import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsOthers(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports ...others props', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} data-other-attribute="test" />
    );
    expect(container.firstChild).toHaveAttribute('data-other-attribute', 'test');
  });
}
