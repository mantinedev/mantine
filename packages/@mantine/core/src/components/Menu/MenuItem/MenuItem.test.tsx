import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuItem, MenuItemProps, MenuItemStylesNames } from './MenuItem';

const TestContainer = createContextContainer<any>(MenuItem, Menu, { opened: true });

const defaultProps: MenuItemProps = {
  children: 'test-menu-item',
  description: 'test-description',
  leftSection: '$$',
};

describe('@mantine/core/MenuItem', () => {
  tests.itSupportsSystemProps<MenuItemProps, MenuItemStylesNames>({
    component: TestContainer as any,
    props: defaultProps,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/MenuItem',
    stylesApiSelectors: ['item', 'itemSection', 'itemLabel', 'itemBody', 'itemDescription'],
    stylesApiName: 'Menu',
    compound: true,
    providerStylesApi: false,
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

  it('renders description outside of the type-ahead label', () => {
    render(<TestContainer {...defaultProps} />);
    const label = screen.getByText('test-menu-item');
    expect(label).toHaveAttribute('data-menu-item-label');
    expect(label).not.toHaveTextContent('test-description');
    expect(screen.getByText('test-description')).toHaveClass('mantine-Menu-itemDescription');
    expect(document.querySelector('.mantine-Menu-itemBody')).toContainElement(label);
  });

  it('keeps an empty type-ahead label for description-only items', () => {
    const { children, ...withoutChildren } = defaultProps;
    render(<TestContainer {...withoutChildren} />);
    const label = document.querySelector('[data-menu-item-label]');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('');
    expect(screen.getByText('test-description')).toBeInTheDocument();
  });

  it('does not render item body without description', () => {
    render(<TestContainer {...defaultProps} description={undefined} />);
    expect(document.querySelector('.mantine-Menu-itemBody')).not.toBeInTheDocument();
    expect(screen.getByText('test-menu-item')).toHaveClass('mantine-Menu-itemLabel');
  });

  it('renders given leftSection and rightSection', () => {
    render(<TestContainer leftSection="test-left-section" rightSection="test-right-section" />);
    expect(screen.getByText('test-left-section')).toBeInTheDocument();
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
  });
});
