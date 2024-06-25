import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Tabs } from '../Tabs';
import { TabsTab, TabsTabProps, TabsTabStylesNames } from './TabsTab';

const defaultProps: TabsTabProps = {
  value: 'test',
  children: 'Test tab',
  rightSection: 'r',
  leftSection: 'l',
};

const TestContainer = createContextContainer(TabsTab, Tabs);

describe('@mantine/core/TabsTab', () => {
  tests.itSupportsSystemProps<TabsTabProps, TabsTabStylesNames>({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLButtonElement,
    displayName: '@mantine/core/TabsTab',
    mod: true,
    extend: true,
    withProps: true,
    styleProps: true,
    children: true,
    classes: true,
    selector: '[role="tab"]',
    stylesApiName: 'Tabs',
    stylesApiSelectors: ['tab', 'tabLabel', 'tabSection'],
    providerStylesApi: false,
  });

  tests.itSupportsFocusEvents({
    component: TestContainer,
    props: defaultProps,
    selector: '[role="tab"]',
  });

  tests.itThrowsContextError({
    component: TabsTab,
    props: defaultProps,
    error: 'Tabs component was not found in the tree',
  });

  it('calls onClick function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onClick={spy} />);
    await userEvent.click(screen.getByRole('tab'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown function from props', async () => {
    const spy = jest.fn();
    render(<TestContainer {...defaultProps} onKeyDown={spy} />);
    await userEvent.type(screen.getByRole('tab'), 'R');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders given right and left sections', () => {
    render(
      <TestContainer {...defaultProps} rightSection="test-right-section" leftSection="test-icon" />
    );
    expect(screen.getByText('test-right-section')).toBeInTheDocument();
    expect(screen.getByText('test-icon')).toBeInTheDocument();
  });

  it('sets data-active attribute to true if tab is active', () => {
    const ActiveContainer = createContextContainer(TabsTab, Tabs, { value: 'test' });
    const InactiveContainer = createContextContainer(TabsTab, Tabs, { value: 'test2' });

    const { rerender } = render(<ActiveContainer {...defaultProps} value="test" />);
    expect(screen.getByRole('tab')).toHaveAttribute('data-active', 'true');

    rerender(<InactiveContainer {...defaultProps} value="test" />);
  });

  it('sets data-disabled attribute to true if tab is disabled', () => {
    const { rerender } = render(<TestContainer {...defaultProps} disabled />);
    expect(screen.getByRole('tab')).toHaveAttribute('data-disabled', 'true');

    rerender(<TestContainer {...defaultProps} disabled={false} />);
    expect(screen.getByRole('tab')).not.toHaveAttribute('data-disabled');
  });

  it('sets disabled attribute to true if tab is disabled', () => {
    const { rerender } = render(<TestContainer {...defaultProps} disabled />);
    expect(screen.getByRole('tab')).toHaveAttribute('disabled');

    rerender(<TestContainer {...defaultProps} disabled={false} />);
    expect(screen.getByRole('tab')).not.toHaveAttribute('disabled');
  });

  it('sets data-variant attribute based on context value', () => {
    const Container = createContextContainer(TabsTab, Tabs, { variant: 'test-variant' });
    render(<Container {...defaultProps} />);
    expect(screen.getByRole('tab')).toHaveAttribute('data-variant', 'test-variant');
  });

  it('sets data-orientation attribute based on context value', () => {
    const Container = createContextContainer(TabsTab, Tabs, { orientation: 'vertical' });
    render(<Container {...defaultProps} />);
    expect(screen.getByRole('tab')).toHaveAttribute('data-orientation', 'vertical');
  });

  it('sets data-placement attribute based on context value', () => {
    const Container = createContextContainer(TabsTab, Tabs, {
      placement: 'right',
      orientation: 'vertical',
    });
    render(<Container {...defaultProps} />);
    expect(screen.getByRole('tab')).toHaveAttribute('data-placement', 'right');
  });

  it('does not set data-placement attribute if orientation is horizontal', () => {
    const Container = createContextContainer(TabsTab, Tabs, {
      placement: 'right',
      orientation: 'horizontal',
    });
    render(<Container {...defaultProps} />);
    expect(screen.getByRole('tab')).not.toHaveAttribute('data-placement');
  });
});
