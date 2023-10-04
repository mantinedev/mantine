import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Code',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoColors: Story = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const DemoBlock: Story = {
  name: '⭐ Demo: block',
  render: renderDemo(demos.block),
};
