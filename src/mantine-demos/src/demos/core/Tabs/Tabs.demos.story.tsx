import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Tabs',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPosition: Story = {
  name: '⭐ Demo: position',
  render: renderDemo(demos.position),
};

export const DemoPull: Story = {
  name: '⭐ Demo: pull',
  render: renderDemo(demos.pull),
};

export const DemoInverted: Story = {
  name: '⭐ Demo: inverted',
  render: renderDemo(demos.inverted),
};

export const DemoPlacement: Story = {
  name: '⭐ Demo: placement',
  render: renderDemo(demos.placement),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoColors: Story = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const DemoDeactivate: Story = {
  name: '⭐ Demo: deactivate',
  render: renderDemo(demos.deactivate),
};

export const DemoKeyboardActivation: Story = {
  name: '⭐ Demo: keyboardActivation',
  render: renderDemo(demos.keyboardActivation),
};

export const DemoCustomize: Story = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
