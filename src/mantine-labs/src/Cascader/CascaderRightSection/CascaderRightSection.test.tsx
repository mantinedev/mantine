import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CascaderRightSection } from './CascaderRightSection';

describe('@mantine/labs/CascaderRightSection', () => {
  it('renders ChevronIcon when shouldClear is false', () => {
    const { container } = render(<CascaderRightSection shouldClear={false} size="sm" />);
    expect(container.querySelector('[data-chevron]')).toBeInTheDocument();
    expect(container.querySelectorAll('button')).toHaveLength(0);
  });

  it('renders CloseButton when shouldClear is true', () => {
    const { container } = render(<CascaderRightSection shouldClear size="sm" />);
    expect(container.querySelectorAll('[data-chevron]')).toHaveLength(0);
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('sets aria-label and size on CloseButton', () => {
    render(<CascaderRightSection shouldClear size="sm" clearButtonLabel="test-label" />);
    expect(screen.getByLabelText('test-label')).toBeInTheDocument();
  });

  it('calls onClear when CloseButton is clicked', () => {
    const spy = jest.fn();
    render(<CascaderRightSection shouldClear size="sm" onClear={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(CascaderRightSection.displayName).toStrictEqual('@mantine/core/CascaderRightSection');
  });
});
