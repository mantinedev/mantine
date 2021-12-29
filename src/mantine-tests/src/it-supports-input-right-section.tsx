import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsInputRightSection(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports input right section', () => {
    const { getByText } = render(
      <Component {...requiredProps} rightSection="Test right section" />
    );
    expect(getByText('Test right section')).toBeInTheDocument();
  });
}
