import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { Tabs, TabsProps } from './Tabs';

const content = [
  <Tabs.Tab label="tab-1" key="tab-1" icon="test-icon">
    tab-1
  </Tabs.Tab>,
  <Tabs.Tab label="tab-2" key="tab-2">
    tab-2
  </Tabs.Tab>,
  <Tabs.Tab label="tab-3" key="tab-3">
    tab-3
  </Tabs.Tab>,
];

const contentWithTabKeys = [
  <Tabs.Tab label="tab-1" key="tab-1" icon="test-icon" tabKey="tab-1">
    tab-1
  </Tabs.Tab>,
  <Tabs.Tab label="tab-2" key="tab-2">
    tab-2
  </Tabs.Tab>,
  <Tabs.Tab label="tab-3" key="tab-3" tabKey="tab-3">
    tab-3
  </Tabs.Tab>,
];

const defaultProps: TabsProps = {
  children: content,
};

const tabKeyProps: TabsProps = {
  children: contentWithTabKeys,
};

const tabPanelContent = () => screen.getByRole('tabpanel').textContent;
const activateTab = (index: number) => userEvent.click(screen.getAllByRole('tab')[index]);
const tabKeydown = (index: number, payload: string) =>
  userEvent.type(screen.getAllByRole('tab')[index], payload);

describe('@mantine/core/Tabs', () => {
  checkAccessibility([<Tabs>{content}</Tabs>, <Tabs initialTab={2}>{content}</Tabs>]);
  itSupportsSystemProps({
    component: Tabs,
    props: defaultProps,
    displayName: '@mantine/core/Tabs',
    refType: HTMLDivElement,
  });

  it('handles tabs change correctly', () => {
    render(<Tabs initialTab={1}>{content}</Tabs>);
    expect(tabPanelContent()).toBe('tab-2');
    activateTab(0);
    expect(tabPanelContent()).toBe('tab-1');
    activateTab(2);
    expect(tabPanelContent()).toBe('tab-3');
  });

  it('calls onTabChange when tab control is clicked', () => {
    const spy = jest.fn();
    render(<Tabs {...defaultProps} initialTab={1} onTabChange={spy} />);
    activateTab(0);
    expect(spy).toHaveBeenCalledWith(0);
    activateTab(2);
    activateTab(2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('calls onTabChange when tab control is clicked, with mixed tabKey props', () => {
    const spy = jest.fn();
    render(<Tabs {...tabKeyProps} initialTab={1} onTabChange={spy} />);
    activateTab(0);
    expect(spy).toHaveBeenCalledWith(0, 'tab-1');
    activateTab(1);
    expect(spy).toHaveBeenCalledWith(1, undefined);
  });

  it.each([
    ['horizontal' as const, '{arrowright}', '{arrowleft}'],
    ['vertical' as const, '{arrowdown}', '{arrowup}'],
  ])('supports keyboard events (%s)', (orientation, next, previous) => {
    render(<Tabs {...defaultProps} initialTab={1} orientation={orientation} />);
    expect(tabPanelContent()).toBe('tab-2');
    tabKeydown(1, next);
    expect(tabPanelContent()).toBe('tab-3');
    tabKeydown(2, next);
    expect(tabPanelContent()).toBe('tab-3');
    tabKeydown(2, previous);
    expect(tabPanelContent()).toBe('tab-2');
    tabKeydown(1, previous);
    expect(tabPanelContent()).toBe('tab-1');
    tabKeydown(0, previous);
    expect(tabPanelContent()).toBe('tab-1');
  });

  it('does not render tab content wrapper if tab has no content', () => {
    render(
      <Tabs>
        <Tabs.Tab label="With content">test-content</Tabs.Tab>
        <Tabs.Tab label="No content" />
      </Tabs>
    );

    expect(tabPanelContent()).toBe('test-content');
    activateTab(0);
    expect(screen.getAllByRole('tabpanel')).toHaveLength(1);
    activateTab(1);
    expect(screen.queryAllByRole('tabpanel')).toHaveLength(0);
  });

  it('correctly handles initial disabled tab with uncontrolled mode', () => {
    render(
      <Tabs>
        <Tabs.Tab label="1" disabled>
          test-content-1
        </Tabs.Tab>
        <Tabs.Tab label="2">test-content-2</Tabs.Tab>
        <Tabs.Tab label="3">test-content-3</Tabs.Tab>
      </Tabs>
    );

    expect(tabPanelContent()).toBe('test-content-2');
  });

  it('correctly handles disabled tabs keyboard events', () => {
    render(
      <Tabs>
        <Tabs.Tab label="1">test-content-1</Tabs.Tab>
        <Tabs.Tab label="2" disabled>
          test-content-2
        </Tabs.Tab>
        <Tabs.Tab label="3">test-content-3</Tabs.Tab>
      </Tabs>
    );

    tabKeydown(0, '{arrowright}');
    expect(tabPanelContent()).toBe('test-content-3');
    tabKeydown(2, '{arrowleft}');
    expect(tabPanelContent()).toBe('test-content-1');
  });

  it('supports getting tab ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <Tabs>
        <Tabs.Tab ref={ref} label="test" />
      </Tabs>
    );
    expect(ref.current instanceof HTMLButtonElement).toBe(true);
  });
});
