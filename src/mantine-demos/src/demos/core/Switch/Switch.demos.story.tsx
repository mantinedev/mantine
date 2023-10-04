import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Switch',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoLabels: Story = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const DemoThumbIcon: Story = {
  name: '⭐ Demo: thumbIcon',
  render: renderDemo(demos.thumbIcon),
};

export const DemoIconLabels: Story = {
  name: '⭐ Demo: iconLabels',
  render: renderDemo(demos.iconLabels),
};

export const DemoGroupConfigurator: Story = {
  name: '⭐ Demo: groupConfigurator',
  render: renderDemo(demos.groupConfigurator),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
