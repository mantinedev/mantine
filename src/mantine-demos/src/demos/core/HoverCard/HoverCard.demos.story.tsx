import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'HoverCard',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoProfile: Story = {
  name: '⭐ Demo: profile',
  render: renderDemo(demos.profile),
};

export const DemoDelay: Story = {
  name: '⭐ Demo: delay',
  render: renderDemo(demos.delay),
};
