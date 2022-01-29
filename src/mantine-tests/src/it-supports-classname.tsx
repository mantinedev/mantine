import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsClassName(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports className prop', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} className="test-class-name" />
    );
    expect(container.firstChild).toHaveClass('test-class-name');
  });
}
