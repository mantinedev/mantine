import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MantineProvider } from '@mantine/styles';
import { itSupportsSystemProps, itRendersChildren, checkAccessibility } from '@mantine/tests';
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
  itSupportsSystemProps({
    component: Tabs,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Tabs',
    name: 'Tabs',
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<Tabs {...defaultProps} value="tab-1" onTabChange={spy} />);
    expectActiveTab('tab-1');

    clickTab('tab-2');
    expectActiveTab('tab-1');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('tab-2');
  });

  it('supports uncontrolled state', () => {
    const spy = jest.fn();
    render(<Tabs {...defaultProps} defaultValue="tab-1" onTabChange={spy} />);
    expectActiveTab('tab-1');

    clickTab('tab-2');
    expectActiveTab('tab-2');

    expect(spy).not.toHaveBeenCalled();
  });

  it('handles arrow events correctly (default)', () => {
    render(<Tabs {...defaultProps} defaultValue="tab-1" />);

    userEvent.type(getTab('tab-1'), '{arrowright}');
    expectActiveTab('tab-2');

    userEvent.type(getTab('tab-2'), '{arrowright}');
    expectActiveTab('tab-3');

    userEvent.type(getTab('tab-3'), '{arrowright}');
    expectActiveTab('tab-1');

    userEvent.type(getTab('tab-1'), '{arrowleft}');
    expectActiveTab('tab-3');

    userEvent.type(getTab('tab-2'), '{arrowleft}');
    expectActiveTab('tab-1');
  });

  it('handles arrows events correctly (loop = false)', () => {
    render(<Tabs {...defaultProps} defaultValue="tab-3" loop={false} />);

    userEvent.type(getTab('tab-3'), '{arrowright}');
    expectActiveTab('tab-3');

    clickTab('tab-1');
    userEvent.type(getTab('tab-1'), '{arrowleft}');
    expectActiveTab('tab-1');
  });

  it('handles arrow events correctly (RTL direction)', () => {
    render(
      <MantineProvider theme={{ dir: 'rtl' }}>
        <Tabs {...defaultProps} defaultValue="tab-2" loop={false} />
      </MantineProvider>
    );

    userEvent.type(getTab('tab-2'), '{arrowright}');
    expectActiveTab('tab-1');

    userEvent.type(getTab('tab-1'), '{arrowleft}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (vertical orientation, loop = true)', () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" orientation="vertical" />);

    userEvent.type(getTab('tab-2'), '{arrowup}');
    expectActiveTab('tab-1');

    userEvent.type(getTab('tab-1'), '{arrowup}');
    expectActiveTab('tab-3');

    userEvent.type(getTab('tab-3'), '{arrowdown}');
    expectActiveTab('tab-1');

    userEvent.type(getTab('tab-1'), '{arrowdown}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (vertical orientation, loop = false)', () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" orientation="vertical" loop={false} />);

    userEvent.type(getTab('tab-1'), '{arrowup}');
    expectActiveTab('tab-1');

    userEvent.type(getTab('tab-1'), '{arrowdown}');
    expectActiveTab('tab-2');

    userEvent.type(getTab('tab-3'), '{arrowdown}');
    expectActiveTab('tab-3');

    userEvent.type(getTab('tab-3'), '{arrowup}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (activateTabWithKeyboard = false)', () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" activateTabWithKeyboard={false} />);

    userEvent.type(getTab('tab-2'), '{arrowright}');
    expectActiveTab('tab-2');

    userEvent.type(getTab('tab-2'), '{arrowleft}');
    expectActiveTab('tab-2');
  });

  it('handles arrow events correctly (disabled tab)', () => {
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

    userEvent.type(getTab('tab-1'), '{arrowright}');
    expectActiveTab('tab-3');

    userEvent.type(getTab('tab-3'), '{arrowleft}');
    expectActiveTab('tab-1');
  });

  it('does not display any tab if value in null', () => {
    render(<Tabs {...defaultProps} value={null} />);
    expectActiveTab(null);
  });

  it('does not display any tab if defaultValue in null', () => {
    render(<Tabs {...defaultProps} defaultValue={null} />);
    expectActiveTab(null);

    clickTab('tab-1');
    expectActiveTab('tab-1');
  });

  it('allows to deactivate tab when allowTabDeactivation is true', () => {
    render(<Tabs {...defaultProps} defaultValue="tab-1" allowTabDeactivation />);
    expectActiveTab('tab-1');
    clickTab('tab-1');
    expectActiveTab(null);
  });

  it('allows to set root element id', () => {
    const view = render(<Tabs {...defaultProps} defaultValue="tab-1" id="test-id" />);
    expect(view.container.querySelector('#test-id')).toBeInTheDocument();
  });

  it('handles tab key correctly (with selected tab)', () => {
    render(<Tabs {...defaultProps} defaultValue="tab-2" />);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(getTab('tab-2')).toHaveFocus();

    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('handles tab key correctly (without selected tab)', () => {
    render(<Tabs {...defaultProps} />);
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(getTab('tab-1')).toHaveFocus();

    userEvent.tab();
    expect(getTab('tab-2')).toHaveFocus();

    userEvent.tab();
    expect(getTab('tab-3')).toHaveFocus();

    userEvent.tab();
    expect(document.body).toHaveFocus();
  });

  it('exposes TabsList, Tab and TabsPanel component with as static properties', () => {
    expect(Tabs.Tab).toBe(Tab);
    expect(Tabs.List).toBe(TabsList);
    expect(Tabs.Panel).toBe(TabsPanel);
  });
});
