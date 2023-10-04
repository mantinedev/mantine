import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Overlay',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoGradient: Story = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const DemoBlur: Story = {
  name: '⭐ Demo: blur',
  render: renderDemo(demos.blur),
};
