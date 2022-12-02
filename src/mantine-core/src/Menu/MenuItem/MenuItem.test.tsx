import React from 'react';
import {
  createContextContainer,
  itSupportsSystemProps,
  itRendersChildren,
  itIsPolymorphic,
  itThrowsContextError,
} from '@mantine/tests';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuItem, MenuItemProps } from './MenuItem';
import { Menu } from '../Menu';
import { MENU_ERRORS } from '../Menu.errors';

const defaultProps: MenuItemProps = {};

const TestContainer = createContextContainer<any>(MenuItem, Menu, { opened: true });

describe('@mantine/core/MenuItem', () => {
  itThrowsContextError(MenuItem, defaultProps, MENU_ERRORS.context);
  itRendersChildren(TestContainer, defaultProps);
  itIsPolymorphic(TestContainer, defaultProps);
  itSupportsSystemProps({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/MenuItem',
    providerName: 'MenuItem',
  });

  it('allows to add onMouseEnter and onMouseLeave events', async () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();
    render(<TestContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />);

    await userEvent.hover(screen.getByRole('menuitem'));
    expect(onMouseEnter).toHaveBeenCalled();
    expect(onMouseLeave).not.toHaveBeenCalled();

    await userEvent.unhover(screen.getByRole('menuitem'));
    expect(onMouseLeave).toHaveBeenCalled();
  });

  it('allows to add onClick event', async () => {
    const spy = jest.fn();
    render(<TestContainer onClick={spy} />);
    expect(spy).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('menuitem'));
    expect(spy).toHaveBeenCalled();
  });

  it('renders given icon and rightSection', () => {
    render(<TestContainer icon="test-icon" rightSection="test-right-section" />);
    expect(screen.getByText('test-icon')).toBeInTheDocument();
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });
});
