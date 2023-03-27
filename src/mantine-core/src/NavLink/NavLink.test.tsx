import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsFocusEvents,
  itIsPolymorphic,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavLink, NavLinkProps } from './NavLink';

const defaultProps: NavLinkProps = {
  label: 'test-link',
};

describe('@mantine/core/NavLink', () => {
  checkAccessibility([
    <NavLink {...defaultProps} />,
    <NavLink {...defaultProps}>
      <NavLink {...defaultProps} />
      <NavLink {...defaultProps} />
    </NavLink>,
  ]);

  itSupportsSystemProps({
    component: NavLink,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/NavLink',
    providerName: 'NavLink',
  });

  itSupportsProviderVariant(NavLink, defaultProps, 'NavLink');
  itRendersChildren(NavLink, defaultProps);
  itIsPolymorphic(NavLink, defaultProps);
  itSupportsFocusEvents(NavLink, defaultProps, 'button');

  it('supports onClick handler (without children)', async () => {
    const spy = jest.fn();
    render(<NavLink {...defaultProps} onClick={spy} />);
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalled();
  });

  it('supports onClick handler (with children)', async () => {
    const spy = jest.fn();
    render(
      <NavLink {...defaultProps} onClick={spy}>
        <NavLink {...defaultProps} />
        <NavLink {...defaultProps} />
      </NavLink>
    );
    await userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalled();
  });

  it('sets correct data-expanded attribute on link (uncontrolled)', async () => {
    render(
      <NavLink {...defaultProps}>
        <div>test-dropdown</div>
      </NavLink>
    );

    expect(screen.getByRole('button')).not.toHaveAttribute('data-expanded');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on link based on defaultOpened prop (uncontrolled)', async () => {
    render(
      <NavLink {...defaultProps} defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('button')).toHaveAttribute('data-expanded');
  });

  it('sets correct data-expanded attribute on link based on opened prop (controlled)', async () => {
    render(
      <NavLink {...defaultProps} opened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByRole('button')).toHaveAttribute('data-expanded');
  });

  it('renders given icon', () => {
    render(<NavLink {...defaultProps} icon="test-icon" />);
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });

  it('renders given description', () => {
    render(<NavLink {...defaultProps} description="test-description" />);
    expect(screen.getByText('test-description')).toBeInTheDocument();
  });

  it('renders given rightSection (without children)', () => {
    render(<NavLink {...defaultProps} rightSection="test-right-section" />);
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });

  it('renders given rightSection (with children)', () => {
    render(
      <NavLink {...defaultProps} rightSection="test-right-section">
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });

  it('adds data-rotate attribute to rightSection when collapse is opened', async () => {
    render(
      <NavLink {...defaultProps} rightSection="test-right-section" defaultOpened>
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).toHaveAttribute('data-rotate');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
  });

  it('does not add data-rotate attribute to rightSection if disableRightSectionRotation is set', async () => {
    render(
      <NavLink
        {...defaultProps}
        rightSection="test-right-section"
        defaultOpened
        disableRightSectionRotation
      >
        <div>test-dropdown</div>
      </NavLink>
    );
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('test-right-section')).not.toHaveAttribute('data-rotate');
  });
});
