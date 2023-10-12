import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Divider',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLabels: Story = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const DemoSizes: Story = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const DemoOrientation: Story = {
  name: '⭐ Demo: orientation',
  render: renderDemo(demos.orientation),
};
