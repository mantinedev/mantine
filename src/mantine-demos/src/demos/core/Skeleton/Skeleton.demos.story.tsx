import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Skeleton',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoContent: Story = {
  name: '⭐ Demo: content',
  render: renderDemo(demos.content),
};
