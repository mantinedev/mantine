import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsStyle(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports style property', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} style={{ border: '1px solid cyan' }} />
    );
    expect(container.firstElementChild).toHaveStyle({ border: '1px solid cyan' });
  });
}
