import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../render-demo';

const meta: Meta = {
  title: 'Guides',
};
export default meta;

type Story = StoryObj;

export const DemoPolymorphic: Story = {
  name: '⭐ Demo: polymorphic',
  render: renderDemo(demos.polymorphic),
};

export const DemoCreatePolymorphic: Story = {
  name: '⭐ Demo: createPolymorphic',
  render: renderDemo(demos.createPolymorphic),
};

export const DemoStaticPolymorphic: Story = {
  name: '⭐ Demo: staticPolymorphic',
  render: renderDemo(demos.staticPolymorphic),
};

export const DemoNewPolymorphic: Story = {
  name: '⭐ Demo: newPolymorphic',
  render: renderDemo(demos.newPolymorphic),
};

export const DemoLogo: Story = {
  name: '⭐ Demo: logo',
  render: renderDemo(demos.logo),
};

export const DemoIcon: Story = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoCustomIcon: Story = {
  name: '⭐ Demo: customIcon',
  render: renderDemo(demos.customIcon),
};
