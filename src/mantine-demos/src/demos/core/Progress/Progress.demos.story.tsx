import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Progress',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoCompound: Story = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const DemoTooltips: Story = {
  name: '⭐ Demo: tooltips',
  render: renderDemo(demos.tooltips),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
