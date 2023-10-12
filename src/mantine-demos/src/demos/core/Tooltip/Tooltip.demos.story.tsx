import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Tooltip',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoControlled: Story = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const DemoArrow: Story = {
  name: '⭐ Demo: arrow',
  render: renderDemo(demos.arrow),
};

export const DemoMultiline: Story = {
  name: '⭐ Demo: multiline',
  render: renderDemo(demos.multiline),
};

export const DemoTransitions: Story = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const DemoDelay: Story = {
  name: '⭐ Demo: delay',
  render: renderDemo(demos.delay),
};

export const DemoFloating: Story = {
  name: '⭐ Demo: floating',
  render: renderDemo(demos.floating),
};

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoGroup: Story = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const DemoOffset: Story = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoInline: Story = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};

export const DemoNested: Story = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};

export const DemoOffsetAxis: Story = {
  name: '⭐ Demo: offsetAxis',
  render: renderDemo(demos.offsetAxis),
};
