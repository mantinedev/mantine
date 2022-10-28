import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  checkAccessibility,
} from '@mantine/tests';
import { DefaultValue, MultiSelectValueProps } from './DefaultValue';

const defaultProps: MultiSelectValueProps = {
  label: 'test-label',
  onRemove: () => {},
  disabled: false,
  size: 'sm',
  radius: 'sm',
  readOnly: false,
  variant: 'filled',
};

describe('@mantine/core/MultiSelect/DefaultValue', () => {
  checkAccessibility([<DefaultValue {...defaultProps} />]);
  itSupportsClassName(DefaultValue, defaultProps);
  itSupportsStyle(DefaultValue, defaultProps);
  itSupportsOthers(DefaultValue, defaultProps);

  it('renders given label', () => {
    render(<DefaultValue {...defaultProps} />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('does not render delete button if disabled', () => {
    const { container: disabled } = render(<DefaultValue {...defaultProps} disabled />);
    const { container: notDisabled } = render(<DefaultValue {...defaultProps} disabled={false} />);
    expect(disabled.querySelectorAll('button')).toHaveLength(0);
    expect(notDisabled.querySelectorAll('button')).toHaveLength(1);
  });

  it('calls onRemove when CloseButton is clicked', async () => {
    const spy = jest.fn();
    render(<DefaultValue {...defaultProps} onRemove={spy} />);
    await userEvent.click(screen.getByRole('button', { hidden: true }));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(DefaultValue.displayName).toStrictEqual('@mantine/core/MultiSelect/DefaultValue');
  });
});
