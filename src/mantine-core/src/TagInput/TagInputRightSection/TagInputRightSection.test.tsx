import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TagInputRightSection } from './TagInputRightSection';

describe('@mantine/core/TagInputRightSection', () => {
  it('renders CloseButton when shouldClear is true', () => {
    const { container } = render(<TagInputRightSection shouldClear size="sm" />);
    expect(container.querySelectorAll('[data-chevron]')).toHaveLength(0);
    expect(container.querySelector('button')).toBeInTheDocument();
  });

  it('sets aria-label and size on CloseButton', () => {
    render(
      <TagInputRightSection
        shouldClear
        size="sm"
        clearButtonProps={{ 'aria-label': 'test-label' }}
      />
    );
    expect(screen.getByLabelText('test-label')).toBeInTheDocument();
  });

  it('calls onClear when CloseButton is clicked', async () => {
    const spy = jest.fn();
    render(<TagInputRightSection shouldClear size="sm" onClear={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(TagInputRightSection.displayName).toStrictEqual('@mantine/core/TagInputRightSection');
  });
});
