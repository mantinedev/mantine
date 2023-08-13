import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectRightSection } from './SelectRightSection';

describe('@mantine/core/SelectRightSection', () => {
  it('renders ChevronIcon when shouldClear is false', () => {
    const { container } = render(<SelectRightSection shouldClear={false} size="sm" />);
    expect(container.querySelector('[data-chevron]')).toBeInTheDocument();
    expect(container.querySelectorAll('button')).toHaveLength(0);
  });

  it('renders CloseButton when shouldClear is true', () => {
    const { container } = render(<SelectRightSection shouldClear size="sm" />);
    expect(container.querySelectorAll('[data-chevron]')).toHaveLength(0);
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('sets aria-label and size on CloseButton', () => {
    render(
      <SelectRightSection shouldClear size="sm" clearButtonProps={{ 'aria-label': 'test-label' }} />
    );
    expect(screen.getByLabelText('test-label')).toBeInTheDocument();
  });

  it('calls onClear when CloseButton is clicked', async () => {
    const spy = jest.fn();
    render(<SelectRightSection shouldClear size="sm" onClear={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(SelectRightSection.displayName).toStrictEqual('@mantine/core/SelectRightSection');
  });
});
