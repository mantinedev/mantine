import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Checkbox',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoIndeterminate: Story = {
  name: '⭐ Demo: indeterminate',
  render: renderDemo(demos.indeterminate),
};

export const DemoStates: Story = {
  name: '⭐ Demo: states',
  render: renderDemo(demos.states),
};

export const DemoIcon: Story = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoGroupConfigurator: Story = {
  name: '⭐ Demo: groupConfigurator',
  render: renderDemo(demos.groupConfigurator),
};

export const DemoAnchor: Story = {
  name: '⭐ Demo: anchor',
  render: renderDemo(demos.anchor),
};
