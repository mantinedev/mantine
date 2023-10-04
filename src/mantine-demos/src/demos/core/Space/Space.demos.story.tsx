import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Space',
};
export default meta;

type Story = StoryObj;

export const DemoHorizontal: Story = {
  name: '⭐ Demo: horizontal',
  render: renderDemo(demos.horizontal),
};

export const DemoVertical: Story = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};
