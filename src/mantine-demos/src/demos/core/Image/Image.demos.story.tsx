import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Image',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoHeight: Story = {
  name: '⭐ Demo: height',
  render: renderDemo(demos.height),
};

export const DemoContain: Story = {
  name: '⭐ Demo: contain',
  render: renderDemo(demos.contain),
};

export const DemoFallback: Story = {
  name: '⭐ Demo: fallback',
  render: renderDemo(demos.fallback),
};
