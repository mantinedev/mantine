import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Rating',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoCustomSymbol: Story = {
  name: '⭐ Demo: customSymbol',
  render: renderDemo(demos.customSymbol),
};

export const DemoReadOnly: Story = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const DemoFractions: Story = {
  name: '⭐ Demo: fractions',
  render: renderDemo(demos.fractions),
};

export const DemoSymbol: Story = {
  name: '⭐ Demo: symbol',
  render: renderDemo(demos.symbol),
};
