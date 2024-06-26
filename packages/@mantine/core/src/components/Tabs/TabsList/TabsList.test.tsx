import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { Tabs } from '../Tabs';
import { TabsList, TabsListProps, TabsListStylesNames } from './TabsList';

const TestContainer = createContextContainer(TabsList, Tabs);

const defaultProps: TabsListProps = {
  children: 'test-list',
};

describe('@mantine/core/TabsList', () => {
  tests.itSupportsSystemProps<TabsListProps, TabsListStylesNames>({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/TabsList',
    mod: true,
    extend: true,
    withProps: true,
    styleProps: true,
    children: true,
    classes: true,
    id: true,
    selector: '[role="tablist"]',
    stylesApiName: 'Tabs',
    stylesApiSelectors: ['list'],
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: TabsList,
    props: defaultProps,
    error: 'Tabs component was not found in the tree',
  });

  it('sets aria-orientation attribute based on context value', () => {
    const Vertical = createContextContainer(TabsList, Tabs, { orientation: 'vertical' });
    const Horizontal = createContextContainer(TabsList, Tabs, { orientation: 'horizontal' });

    const { rerender } = render(<Vertical {...defaultProps} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('aria-orientation', 'vertical');

    rerender(<Horizontal {...defaultProps} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('sets data-orientation attribute based on context value', () => {
    const Vertical = createContextContainer(TabsList, Tabs, { orientation: 'vertical' });
    const Horizontal = createContextContainer(TabsList, Tabs, { orientation: 'horizontal' });

    const { rerender } = render(<Vertical {...defaultProps} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('data-orientation', 'vertical');

    rerender(<Horizontal {...defaultProps} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('sets data-placement attribute based on context value', () => {
    const Container = createContextContainer(TabsList, Tabs, {
      placement: 'right',
      orientation: 'vertical',
    });
    render(<Container {...defaultProps} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('data-placement', 'right');
  });

  it('does not set data-placement attribute if orientation is horizontal', () => {
    const Container = createContextContainer(TabsList, Tabs, {
      placement: 'right',
      orientation: 'horizontal',
    });
    render(<Container {...defaultProps} />);
    expect(screen.getByRole('tablist')).not.toHaveAttribute('data-placement');
  });

  it('sets data-variant based on context value', () => {
    const Container = createContextContainer(TabsList, Tabs, { variant: 'outline' });
    render(<Container {...defaultProps} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('data-variant', 'outline');
  });

  it('sets data-inverted based on context value', () => {
    const Inverted = createContextContainer(TabsList, Tabs, { inverted: true });
    const NotInverted = createContextContainer(TabsList, Tabs, { inverted: false });

    const { rerender } = render(<Inverted {...defaultProps} />);
    expect(screen.getByRole('tablist')).toHaveAttribute('data-inverted');
    rerender(<NotInverted {...defaultProps} />);
    expect(screen.getByRole('tablist')).not.toHaveAttribute('data-inverted');
  });

  it('sets data-grow based on prop value', () => {
    const { rerender } = render(<TestContainer {...defaultProps} grow />);
    expect(screen.getByRole('tablist')).toHaveAttribute('data-grow');

    rerender(<TestContainer {...defaultProps} grow={false} />);
    expect(screen.getByRole('tablist')).not.toHaveAttribute('data-grow');
  });
});
