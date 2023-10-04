import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'FileButton',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoMultiple: Story = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoReset: Story = {
  name: '⭐ Demo: reset',
  render: renderDemo(demos.reset),
};
