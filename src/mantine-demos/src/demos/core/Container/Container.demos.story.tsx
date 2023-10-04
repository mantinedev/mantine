import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Container',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoSizes: Story = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const DemoFluid: Story = {
  name: '⭐ Demo: fluid',
  render: renderDemo(demos.fluid),
};

export const DemoResponsive: Story = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};
