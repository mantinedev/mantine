import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Menu',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTransitions: Story = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const DemoComponent: Story = {
  name: '⭐ Demo: component',
  render: renderDemo(demos.component),
};

export const DemoHover: Story = {
  name: '⭐ Demo: hover',
  render: renderDemo(demos.hover),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoPositionConfigurator: Story = {
  name: '⭐ Demo: positionConfigurator',
  render: renderDemo(demos.positionConfigurator),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoCustomControl: Story = {
  name: '⭐ Demo: customControl',
  render: renderDemo(demos.customControl),
};
