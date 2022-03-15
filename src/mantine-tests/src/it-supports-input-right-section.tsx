import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsInputRightSection<P>(
  Component: React.ComponentType<P>,
  requiredProps: P
) {
  it('supports input right section', async () => {
    const { getByText } = await renderWithAct(
      <Component {...requiredProps} rightSection="Test right section" />
    );
    expect(getByText('Test right section')).toBeInTheDocument();
  });
}
