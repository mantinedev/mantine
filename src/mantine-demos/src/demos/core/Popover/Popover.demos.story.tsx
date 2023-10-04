import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Popover',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoForm: Story = {
  name: '⭐ Demo: form',
  render: renderDemo(demos.form),
};

export const DemoHover: Story = {
  name: '⭐ Demo: hover',
  render: renderDemo(demos.hover),
};

export const DemoSameWidth: Story = {
  name: '⭐ Demo: sameWidth',
  render: renderDemo(demos.sameWidth),
};

export const DemoInline: Story = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};

export const DemoOffsetAxis: Story = {
  name: '⭐ Demo: offsetAxis',
  render: renderDemo(demos.offsetAxis),
};

export const DemoOffset: Story = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoArrow: Story = {
  name: '⭐ Demo: arrow',
  render: renderDemo(demos.arrow),
};

export const DemoClickOutsideEvents: Story = {
  name: '⭐ Demo: clickOutsideEvents',
  render: renderDemo(demos.clickOutsideEvents),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
