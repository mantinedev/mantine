import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
} from '@mantine/tests';
import { TabControl } from './TabControl/TabControl';
import { Tabs, Tab } from './Tabs';

const content = [
  <Tab label="tab-1" key="tab-1">
    tab-1
  </Tab>,
  <Tab label="tab-2" key="tab-2">
    tab-2
  </Tab>,
  <Tab label="tab-3" key="tab-3">
    tab-3
  </Tab>,
];

const defaultProps = { children: content };

const tabContent = (element: any) => element.render().find('[data-mantine-tab-content]').text();
const activateTab = (element: any, position: number) =>
  element.find(TabControl).at(position).simulate('click');

describe('@mantine/core/Tabs', () => {
  checkAccessibility([mount(<Tabs>{content}</Tabs>), mount(<Tabs initialTab={2}>{content}</Tabs>)]);
  itSupportsOthers(Tabs, defaultProps);
  itSupportsStyle(Tabs, defaultProps);
  itSupportsClassName(Tabs, defaultProps);

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

  it('supports keyboard events', () => {
    const element = mount(<Tabs initialTab={1}>{content}</Tabs>);
    expect(tabContent(element)).toBe('tab-2');

    const keydown = (position: number, code: string) =>
      element.find(TabControl).at(position).simulate('keydown', { nativeEvent: { code } });

    keydown(1, 'ArrowRight');
    expect(tabContent(element)).toBe('tab-3');

    keydown(2, 'ArrowRight');
    expect(tabContent(element)).toBe('tab-3');

    keydown(2, 'ArrowLeft');
    expect(tabContent(element)).toBe('tab-2');

    keydown(1, 'ArrowLeft');
    expect(tabContent(element)).toBe('tab-1');

    keydown(0, 'ArrowLeft');
    expect(tabContent(element)).toBe('tab-1');
  });

  it('does not render tab content wrapper if tab has no content', () => {
    const element = shallow(
      <Tabs>
        <Tab label="With content">test-content</Tab>
        <Tab label="No content" />
      </Tabs>
    );

    expect(tabContent(element)).toBe('test-content');

    activateTab(element, 1);
    expect(element.render().find('[data-mantine-tab-content]')).toHaveLength(0);
  });

  it('correctly handles initial disabled tabs with uncontrolled mode', () => {
    const firstDisabled = shallow(
      <Tabs>
        <Tab label="1" disabled>
          test-content-1
        </Tab>
        <Tab label="2">test-content-2</Tab>
        <Tab label="3">test-content-3</Tab>
      </Tabs>
    );

    const first2Disabled = shallow(
      <Tabs>
        <Tab label="1" disabled>
          test-content-1
        </Tab>
        <Tab label="2" disabled>
          test-content-2
        </Tab>
        <Tab label="3">test-content-3</Tab>
        <Tab label="4">test-content-4</Tab>
      </Tabs>
    );

    expect(tabContent(firstDisabled)).toBe('test-content-2');
    expect(tabContent(first2Disabled)).toBe('test-content-3');
  });

  it('correctly handles disabled tabs keyboard events', () => {
    const element = mount(
      <Tabs>
        <Tab label="1">test-content-1</Tab>
        <Tab label="2" disabled>
          test-content-2
        </Tab>
        <Tab label="3">test-content-3</Tab>
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
        <Tab elementRef={ref} label="test" />
      </Tabs>
    );
    expect(ref.current instanceof HTMLButtonElement).toBe(true);
  });
});
