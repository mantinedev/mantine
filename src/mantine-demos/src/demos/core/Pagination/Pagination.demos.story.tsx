import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Pagination',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoSiblings: Story = {
  name: '⭐ Demo: siblings',
  render: renderDemo(demos.siblings),
};

export const DemoBoundaries: Story = {
  name: '⭐ Demo: boundaries',
  render: renderDemo(demos.boundaries),
};

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoComposition: Story = {
  name: '⭐ Demo: composition',
  render: renderDemo(demos.composition),
};

export const DemoIcons: Story = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoLinks: Story = {
  name: '⭐ Demo: links',
  render: renderDemo(demos.links),
};
