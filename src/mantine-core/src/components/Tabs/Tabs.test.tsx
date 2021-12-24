import React from 'react';
import { mount, shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { TabControl } from './TabControl/TabControl';
import { Tabs } from './Tabs';

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

const defaultProps = { children: content };

const tabContent = (element: any) => element.render().find('.mantine-Tabs-body').text();
const activateTab = (element: any, position: number) =>
  element.find(TabControl).at(position).simulate('click');

describe('@mantine/core/Tabs', () => {
  checkAccessibility([
    render(<Tabs>{content}</Tabs>),
    render(<Tabs initialTab={2}>{content}</Tabs>),
  ]);
  itSupportsOthers(Tabs, defaultProps);
  itSupportsStyle(Tabs, defaultProps);
  itSupportsMargins(Tabs, defaultProps);
  itSupportsClassName(Tabs, defaultProps);
  itSupportsSx(Tabs, defaultProps);
  itSupportsRef(Tabs, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Tabs.displayName).toEqual('@mantine/core/Tabs');
  });

  it('handles tabs change correctly', () => {
    const element = shallow(<Tabs initialTab={1}>{content}</Tabs>);
    expect(tabContent(element)).toBe('tab-2');

    activateTab(element, 0);
    expect(tabContent(element)).toBe('tab-1');

    activateTab(element, 2);
    expect(tabContent(element)).toBe('tab-3');
  });

  it('calls onTabChange when tab control is clicked', () => {
    const spy = jest.fn();
    const element = shallow(
      <Tabs initialTab={1} onTabChange={spy}>
        {content}
      </Tabs>
    );

    activateTab(element, 0);
    expect(spy).toHaveBeenCalledWith(0);

    activateTab(element, 2);
    activateTab(element, 2);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it.each([
    ['horizontal' as const, 'ArrowRight', 'ArrowLeft'],
    ['vertical' as const, 'ArrowDown', 'ArrowUp'],
  ])('supports keyboard events (%s)', (orientation, next, previous) => {
    const element = mount(
      <Tabs initialTab={1} orientation={orientation}>
        {content}
      </Tabs>
    );
    expect(tabContent(element)).toBe('tab-2');

    const keydown = (position: number, code: string) =>
      element.find(TabControl).at(position).simulate('keydown', { nativeEvent: { code } });

    keydown(1, next);
    expect(tabContent(element)).toBe('tab-3');

    keydown(2, next);
    expect(tabContent(element)).toBe('tab-3');

    keydown(2, previous);
    expect(tabContent(element)).toBe('tab-2');

    keydown(1, previous);
    expect(tabContent(element)).toBe('tab-1');

    keydown(0, previous);
    expect(tabContent(element)).toBe('tab-1');
  });

  it('does not render tab content wrapper if tab has no content', () => {
    const element = shallow(
      <Tabs>
        <Tabs.Tab label="With content">test-content</Tabs.Tab>
        <Tabs.Tab label="No content" />
      </Tabs>
    );

    expect(tabContent(element)).toBe('test-content');

    activateTab(element, 0);
    expect(element.render().find('[role="tabpanel"]')).toHaveLength(1);

    activateTab(element, 1);
    expect(element.render().find('[role="tabpanel"]')).toHaveLength(0);
  });

  it('correctly handles initial disabled tabs with uncontrolled mode', () => {
    const firstDisabled = shallow(
      <Tabs>
        <Tabs.Tab label="1" disabled>
          test-content-1
        </Tabs.Tab>
        <Tabs.Tab label="2">test-content-2</Tabs.Tab>
        <Tabs.Tab label="3">test-content-3</Tabs.Tab>
      </Tabs>
    );

    const first2Disabled = shallow(
      <Tabs>
        <Tabs.Tab label="1" disabled>
          test-content-1
        </Tabs.Tab>
        <Tabs.Tab label="2" disabled>
          test-content-2
        </Tabs.Tab>
        <Tabs.Tab label="3">test-content-3</Tabs.Tab>
        <Tabs.Tab label="4">test-content-4</Tabs.Tab>
      </Tabs>
    );

    expect(tabContent(firstDisabled)).toBe('test-content-2');
    expect(tabContent(first2Disabled)).toBe('test-content-3');
  });

  it('correctly handles disabled tabs keyboard events', () => {
    const element = mount(
      <Tabs>
        <Tabs.Tab label="1">test-content-1</Tabs.Tab>
        <Tabs.Tab label="2" disabled>
          test-content-2
        </Tabs.Tab>
        <Tabs.Tab label="3">test-content-3</Tabs.Tab>
      </Tabs>
    );

    const keydown = (position: number, code: string) =>
      element.find(TabControl).at(position).simulate('keydown', { nativeEvent: { code } });

    keydown(0, 'ArrowRight');
    expect(tabContent(element)).toBe('test-content-3');

    keydown(2, 'ArrowLeft');
    expect(tabContent(element)).toBe('test-content-1');
  });

  it('supports getting tab ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    mount(
      <Tabs>
        <Tabs.Tab ref={ref} label="test" />
      </Tabs>
    );
    expect(ref.current instanceof HTMLButtonElement).toBe(true);
  });
});
