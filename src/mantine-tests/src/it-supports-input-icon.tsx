import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsInputIcon(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports input icon', async () => {
    const { getByText } = await renderWithAct(<Component {...requiredProps} icon="Test icon" />);
    expect(getByText('Test icon')).toBeInTheDocument();
  });
}
