import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Accodrion',
};
export default meta;

type Story = StoryObj;

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoChevron: Story = {
  name: '⭐ Demo: chevron',
  render: renderDemo(demos.chevron),
};

export const DemoIcons: Story = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoLabel: Story = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const DemoSideControls: Story = {
  name: '⭐ Demo: sideControls',
  render: renderDemo(demos.sideControls),
};

export const DemoCustomize: Story = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const DemoDisableTransitions: Story = {
  name: '⭐ Demo: disableTransitions',
  render: renderDemo(demos.disableTransitions),
};

export const DemoCustomTransitions: Story = {
  name: '⭐ Demo: customTransitions',
  render: renderDemo(demos.customTransitions),
};

export const DemoUnstyled: Story = {
  name: '⭐ Demo: unstyled',
  render: renderDemo(demos.unstyled),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
