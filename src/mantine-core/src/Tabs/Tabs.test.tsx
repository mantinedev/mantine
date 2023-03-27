import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MantineProvider } from '@mantine/styles';
import {
  itSupportsSystemProps,
  itRendersChildren,
  checkAccessibility,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Tab } from './Tab/Tab';
import { TabsList } from './TabsList/TabsList';
import { TabsPanel } from './TabsPanel/TabsPanel';
import { Tabs, TabsProps } from './Tabs';

const defaultProps: TabsProps = {
  children: (
    <>
      <Tabs.List aria-label="test-tabs">
        <Tabs.Tab value="tab-1">tab-1</Tabs.Tab>
        <Tabs.Tab value="tab-2">tab-2</Tabs.Tab>
        <Tabs.Tab value="tab-3">tab-3</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="tab-1">tab-1 panel</Tabs.Panel>
      <Tabs.Panel value="tab-2">tab-2 panel</Tabs.Panel>
      <Tabs.Panel value="tab-3">tab-3 panel</Tabs.Panel>
    </>
  ),
};

const TAB_VALUES = ['tab-1', 'tab-2', 'tab-3'] as const;
type TabValue = typeof TAB_VALUES[number];

const expectActiveTab = (value: TabValue | null) => {
  const hidden = ['tab-1', 'tab-2', 'tab-3'].filter((panel) => panel !== value);
  hidden.forEach((panel) => {
    expect(screen.getByText(`${panel} panel`)).not.toBeVisible();
  });

  if (value) {
    expect(screen.getByText(`${value} panel`)).toBeVisible();
  }
};

const getTab = (value: TabValue) => {
  const index = TAB_VALUES.indexOf(value);
  const tabs = screen.getAllByRole('tab');
  return tabs[index];
};

const clickTab = (value: TabValue) => userEvent.click(getTab(value));

describe('@mantine/core/Tabs', () => {
  checkAccessibility([<Tabs {...defaultProps} defaultValue="tab-1" />]);
  itRendersChildren(Tabs, defaultProps);
  itSupportsProviderVariant(Tabs, defaultProps, 'Tabs', ['root', 'panel', 'tabsList', 'tab']);
  itSupportsSystemProps({
    component: Tabs,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Tabs',
    providerName: 'Tabs',
  });

  it('supports controlled state', async () => {
    const spy = jest.fn();
    render(<Tabs {...defaultProps} value="tab-1" onTabChange={spy} />);
    expectActiveTab('tab-1');

    await clickTab('tab-2');
    expectActiveTab('tab-1');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('tab-2');
  });

  it('supports uncontrolled state', async () => {
    const spy = jest.fn();
    render(<Tabs {...defaultProps} defaultValue="tab-1" onTabChange={spy} />);
    expectActiveTab('tab-1');

    await clickTab('tab-2');
    expectActiveTab('tab-2');

    expect(spy).toHaveBeenCalledWith('tab-2');
  });

  it('handles arrow events correctly (default)', async () => {
    render(<Tabs {...defaultProps} defaultValue="tab-1" />);

    await userEvent.type(getTab('tab-1'), '{arrowright}');
    expectActiveTab('tab-2');

    await userEvent.type(getTab('tab-2'), '{arrowright}');
    expectActiveTab('tab-3');

    await userEvent.type(getTab('tab-3'), '{arrowright}');
    expectActiveTab('tab-1');

    await userEvent.type(getTab('tab-1'), '{arrowleft}');
    expectActiveTab('tab-3');

    await userEvent.type(getTab('tab-2'), '{arrowleft}');
    expectActiveTab('tab-1');
  });

  it('handles arrows events correctly (loop = false)', async () => {
    render(<Tabs {...defaultProps} defaultValue="tab-3" loop={false} />);

    await userEvent.type(getTab('tab-3'), '{arrowright}');
    expectActiveTab('tab-3');

    await clickTab('tab-1');
    await userEvent.type(getTab('tab-1'), '{arrowleft}');
    expectActiveTab('tab-1');
  });

  it('handles arrow events correctly (RTL direction)', async () => {
    render(
      <MantineProvider theme={{ dir: 'rtl' }}>
        <Tabs {...defaultProps} defaultValue="tab-2" loop={false} />
      </MantineProvider>
    );

    await userEvent.type(getTab('tab-2'), '{arrowright}');
    expectActiveTab('tab-1');

    await userEvent.type(getTab('tab-1'), '{arrowleft}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (vertical orientation, loop = true)', async () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" orientation="vertical" />);

    await userEvent.type(getTab('tab-2'), '{arrowup}');
    expectActiveTab('tab-1');

    await userEvent.type(getTab('tab-1'), '{arrowup}');
    expectActiveTab('tab-3');

    await userEvent.type(getTab('tab-3'), '{arrowdown}');
    expectActiveTab('tab-1');

    await userEvent.type(getTab('tab-1'), '{arrowdown}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (vertical orientation, loop = false)', async () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" orientation="vertical" loop={false} />);

    await userEvent.type(getTab('tab-1'), '{arrowup}');
    expectActiveTab('tab-1');

    await userEvent.type(getTab('tab-1'), '{arrowdown}');
    expectActiveTab('tab-2');

    await userEvent.type(getTab('tab-3'), '{arrowdown}');
    expectActiveTab('tab-3');

    await userEvent.type(getTab('tab-3'), '{arrowup}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (activateTabWithKeyboard = false)', async () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" activateTabWithKeyboard={false} />);

    await userEvent.type(getTab('tab-2'), '{arrowright}');
    expectActiveTab('tab-2');

    await userEvent.type(getTab('tab-2'), '{arrowleft}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (disabled tab)', async () => {
    render(
      <Tabs defaultValue="tab-1">
        <Tabs.List aria-label="test-tabs">
          <Tabs.Tab value="tab-1">tab-1</Tabs.Tab>
          <Tabs.Tab value="tab-2" disabled>
            tab-2
          </Tabs.Tab>
          <Tabs.Tab value="tab-3">tab-3</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="tab-1">tab-1 panel</Tabs.Panel>
        <Tabs.Panel value="tab-2">tab-2 panel</Tabs.Panel>
        <Tabs.Panel value="tab-3">tab-3 panel</Tabs.Panel>
      </Tabs>
    );

    await userEvent.type(getTab('tab-1'), '{arrowright}');
    expectActiveTab('tab-3');

    await userEvent.type(getTab('tab-3'), '{arrowleft}');
    expectActiveTab('tab-1');
  });

  it('does not display any tab if value in null', async () => {
    render(<Tabs {...defaultProps} value={null} />);
    expectActiveTab(null);
  });

  it('does not display any tab if defaultValue in null', async () => {
    render(<Tabs {...defaultProps} defaultValue={null} />);
    expectActiveTab(null);

    await clickTab('tab-1');
    expectActiveTab('tab-1');
  });

  it('allows to deactivate tab when allowTabDeactivation is true', async () => {
    render(<Tabs {...defaultProps} defaultValue="tab-1" allowTabDeactivation />);
    expectActiveTab('tab-1');
    await clickTab('tab-1');
    expectActiveTab(null);
  });

  it('allows to set root element id', () => {
    const view = render(<Tabs {...defaultProps} defaultValue="tab-1" id="test-id" />);
    expect(view.container.querySelector('#test-id')).toBeInTheDocument();
  });

  it('handles tab key correctly (with selected tab)', async () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" />);
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(getTab('tab-2')).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('handles tab key correctly (without selected tab)', async () => {
    render(<Tabs {...defaultProps} />);
    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(getTab('tab-1')).toHaveFocus();

    await userEvent.tab();
    expect(getTab('tab-2')).toHaveFocus();

    await userEvent.tab();
    expect(getTab('tab-3')).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('unmounts Tab.Panel content if keepMounted is set to false', () => {
    const { container } = render(
      <Tabs {...defaultProps} keepMounted={false} defaultValue="tab-1" />
    );
    expect(container.querySelectorAll('.mantine-Tabs-panel')[1].textContent).toBe('');
  });

  it('exposes TabsList, Tab and TabsPanel component with as static properties', () => {
    expect(Tabs.Tab).toBe(Tab);
    expect(Tabs.List).toBe(TabsList);
    expect(Tabs.Panel).toBe(TabsPanel);
  });
});
