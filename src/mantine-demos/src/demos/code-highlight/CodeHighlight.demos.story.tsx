import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'CodeHighlight',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTabs: Story = {
  name: '⭐ Demo: tabs',
  render: renderDemo(demos.tabs),
};

export const DemoTabsIcons: Story = {
  name: '⭐ Demo: tabsIcons',
  render: renderDemo(demos.tabsIcons),
};

export const DemoTabsGetIcons: Story = {
  name: '⭐ Demo: tabsGetIcons',
  render: renderDemo(demos.tabsGetIcons),
};

export const DemoExpand: Story = {
  name: '⭐ Demo: expand',
  render: renderDemo(demos.expand),
};

export const DemoCopy: Story = {
  name: '⭐ Demo: copy',
  render: renderDemo(demos.copy),
};

export const DemoInline: Story = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};
