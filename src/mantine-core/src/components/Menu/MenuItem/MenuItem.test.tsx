import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { MenuItem, MenuItemProps } from './MenuItem';

const defaultProps: MenuItemProps<'button'> = {
  onHover: () => {},
  hovered: false,
  children: 'test-item',
};

describe('@mantine/core/MenuItem', () => {
  itRendersChildren(MenuItem, defaultProps);
  itSupportsSystemProps({
    component: MenuItem,
    props: defaultProps,
    displayName: '@mantine/core/MenuItem',
    refType: HTMLButtonElement,
  });

  it('sets disabled attribute based on disabled prop', () => {
    const { container: disabled } = render(<MenuItem {...defaultProps} disabled />);
    const { container: notDisabled } = render(<MenuItem {...defaultProps} />);
    expect(disabled.querySelector('button')).toBeDisabled();
    expect(notDisabled.querySelector('button')).not.toBeDisabled();
  });

  it('trigger onHover function on mouse enter', () => {
    const spy = jest.fn();
    render(<MenuItem {...defaultProps} onHover={spy} />);
    userEvent.hover(screen.getByRole('menuitem'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders icon based on icon prop', () => {
    const { container: withoutIcon } = render(<MenuItem {...defaultProps} />);
    const { container: withIcon } = render(<MenuItem {...defaultProps} icon="test-icon" />);
    expect(withoutIcon.querySelectorAll('.mantine-Menu-itemIcon')).toHaveLength(0);
    expect(withIcon.querySelector('.mantine-Menu-itemIcon').textContent).toBe('test-icon');
  });

  it('renders given right section', () => {
    render(<MenuItem {...defaultProps} rightSection="test-right-section" />);
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });
});
