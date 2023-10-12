import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'TipTap',
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

export const DemoCodeHighlight: Story = {
  name: '⭐ Demo: codeHighlight',
  render: renderDemo(demos.codeHighlight),
};

export const DemoBubbleMenu: Story = {
  name: '⭐ Demo: bubbleMenu',
  render: renderDemo(demos.bubbleMenu),
};

export const DemoFloatingMenu: Story = {
  name: '⭐ Demo: floatingMenu',
  render: renderDemo(demos.floatingMenu),
};

export const DemoCustomControl: Story = {
  name: '⭐ Demo: customControl',
  render: renderDemo(demos.customControl),
};

export const DemoIcons: Story = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoPlaceholder: Story = {
  name: '⭐ Demo: placeholder',
  render: renderDemo(demos.placeholder),
};
