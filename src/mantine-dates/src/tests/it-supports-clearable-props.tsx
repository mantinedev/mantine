import React from 'react';
import { render, screen } from '@testing-library/react';

export interface MonthTestProps {
  clearable?: boolean;
  clearButtonProps?: Record<string, any>;
  rightSection?: React.ReactNode;
}

export function itSupportsClearableProps(
  Component: React.FC<MonthTestProps>,
  requiredProps?: Record<string, any>
) {
  it('renders given rightSection instead of clear button', () => {
    render(
      <Component
        {...requiredProps}
        clearable
        clearButtonProps={{ 'aria-label': 'test-clear' }}
        rightSection={<span>test-right-section</span>}
      />
    );

    expect(screen.queryAllByLabelText('test-clear')).toHaveLength(0);
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });

  it('supports clearButtonProps', () => {
    render(
      <Component
        {...requiredProps}
        clearable
        clearButtonProps={{ 'aria-label': 'test-clear', 'data-test-attr': true } as any}
      />
    );

    expect(screen.getByLabelText('test-clear')).toHaveAttribute('data-test-attr');
  });
}
