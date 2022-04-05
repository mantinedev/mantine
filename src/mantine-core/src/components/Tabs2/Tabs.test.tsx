import React from 'react';
import { upperFirst } from '@mantine/hooks';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itSupportsSystemProps, itRendersChildren, checkAccessibility } from '@mantine/tests';
import { Tabs, TabsProps } from './Tabs';

const defaultProps: TabsProps = {
  children: (
    <>
      <Tabs.List>
        <Tabs.Tab value="apple">Apple tab</Tabs.Tab>
        <Tabs.Tab value="orange">Orange tab</Tabs.Tab>
        <Tabs.Tab value="banana">Banana tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="apple">Apple panel</Tabs.Panel>
      <Tabs.Panel value="orange">Orange panel</Tabs.Panel>
      <Tabs.Panel value="banana">Banana panel</Tabs.Panel>
    </>
  ),
};

const TAB_VALUES = ['apple', 'orange', 'banana'] as const;
type TabValue = typeof TAB_VALUES[number];

const expectActiveTab = (value: TabValue) => {
  const hidden = ['apple', 'orange', 'banana'].filter((panel) => panel !== value);
  hidden.forEach((panel) => {
    expect(screen.getByText(`${upperFirst(panel)} panel`)).not.toBeVisible();
  });

  expect(screen.getByText(`${upperFirst(value)} panel`)).toBeVisible();
};

const activateTab = (value: TabValue) => {
  const index = TAB_VALUES.indexOf(value);
  const tabs = screen.getAllByRole('tab');
  userEvent.click(tabs[index]);
};

describe('@mantine/core/Tabs', () => {
  checkAccessibility([<Tabs {...defaultProps} defaultValue="apple" />]);
  itRendersChildren(Tabs, defaultProps);
  itSupportsSystemProps({
    component: Tabs,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Tabs',
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    render(<Tabs {...defaultProps} value="apple" onTabChange={spy} />);
    expectActiveTab('apple');

    activateTab('orange');
    expectActiveTab('apple');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('orange');
  });
});
