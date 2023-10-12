import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'RingProgress',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoLabel: Story = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const DemoTooltip: Story = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const DemoSectionsProps: Story = {
  name: '⭐ Demo: sectionsProps',
  render: renderDemo(demos.sectionsProps),
};

export const DemoRootColor: Story = {
  name: '⭐ Demo: rootColor',
  render: renderDemo(demos.rootColor),
};
