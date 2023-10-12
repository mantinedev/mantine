import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'ColorSwatch',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoComponent: Story = {
  name: '⭐ Demo: component',
  render: renderDemo(demos.component),
};

export const DemoShadow: Story = {
  name: '⭐ Demo: shadow',
  render: renderDemo(demos.shadow),
};
