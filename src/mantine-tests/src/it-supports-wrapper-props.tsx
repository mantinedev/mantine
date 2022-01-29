import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsWrapperProps(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports wrapperProps prop', async () => {
    const { container } = await renderWithAct(
      <Component {...requiredProps} wrapperProps={{ 'data-test-prop': 'test-prop' }} />
    );
    expect(container.firstChild).toHaveAttribute('data-test-prop', 'test-prop');
  });
}
