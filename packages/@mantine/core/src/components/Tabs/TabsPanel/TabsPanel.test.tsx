import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { Tabs } from '../Tabs';
import { TabsPanel, TabsPanelProps, TabsPanelStylesNames } from './TabsPanel';

const TestContainer = createContextContainer(TabsPanel, Tabs);

const defaultProps: TabsPanelProps = {
  children: 'test-panel',
  value: 'test',
};

describe('@mantine/core/TabsPanel', () => {
  tests.itSupportsSystemProps<TabsPanelProps, TabsPanelStylesNames>({
    component: TestContainer,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/TabsPanel',
    mod: true,
    extend: true,
    withProps: true,
    styleProps: true,
    children: true,
    classes: true,
    selector: '[role="tabpanel"]',
    stylesApiName: 'Tabs',
    stylesApiSelectors: ['panel'],
    providerStylesApi: false,
  });

  tests.itThrowsContextError({
    component: TabsPanel,
    props: defaultProps,
    error: 'Tabs component was not found in the tree',
  });

  it('sets data-orientation attribute based on context value', () => {
    const Vertical = createContextContainer(TabsPanel, Tabs, {
      orientation: 'vertical',
      defaultValue: 'test',
    });
    const Horizontal = createContextContainer(TabsPanel, Tabs, {
      orientation: 'horizontal',
      defaultValue: 'test',
    });

    const { rerender } = render(<Vertical {...defaultProps} />);
    expect(screen.getByRole('tabpanel')).toHaveAttribute('data-orientation', 'vertical');

    rerender(<Horizontal {...defaultProps} />);
    expect(screen.getByRole('tabpanel')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('sets data-hidden attribute based on context value if tab is not active', () => {
    const Hidden = createContextContainer(TabsPanel, Tabs, { value: 'test2' });
    const Visible = createContextContainer(TabsPanel, Tabs, { value: 'test' });

    const { rerender } = render(<Hidden {...defaultProps} value="test" />);
    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();

    rerender(<Visible {...defaultProps} value="test" />);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
});
