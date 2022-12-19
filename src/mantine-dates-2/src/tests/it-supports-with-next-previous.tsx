import React from 'react';
import { render, screen } from '@testing-library/react';

export interface HeaderTestProps {
  withNext?: boolean;
  withPrevious?: boolean;
}

export function itSupportsWithNextPrevious(
  Component: React.FC<HeaderTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports withNext prop', () => {
    const { rerender } = render(<Component {...requiredProps} withNext />);
    expect(screen.getByLabelText('next')).toBeInTheDocument();

    rerender(<Component {...requiredProps} withNext={false} />);
    expect(screen.queryAllByLabelText('next')).toHaveLength(0);
  });

  it('supports withPrevious prop', () => {
    const { rerender } = render(<Component {...requiredProps} withPrevious />);
    expect(screen.getByLabelText('prev')).toBeInTheDocument();

    rerender(<Component {...requiredProps} withPrevious={false} />);
    expect(screen.queryAllByLabelText('prev')).toHaveLength(0);
  });
}
