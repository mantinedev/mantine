import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'List',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoIcon: Story = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoNested: Story = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};
