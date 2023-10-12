import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Loader',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoCustomType: Story = {
  name: '⭐ Demo: customType',
  render: renderDemo(demos.customType),
};

export const DemoCssLoader: Story = {
  name: '⭐ Demo: cssLoader',
  render: renderDemo(demos.cssLoader),
};

export const DemoSize: Story = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};
