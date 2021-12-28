import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsInputIcon(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports input icon', () => {
    const { getByText } = render(<Component {...requiredProps} icon="Test icon" />);
    expect(getByText('Test icon')).toBeInTheDocument();
  });
}
