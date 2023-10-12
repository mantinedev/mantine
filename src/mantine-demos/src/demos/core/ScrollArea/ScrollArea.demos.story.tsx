import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'ScrollArea',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoHorizontal: Story = {
  name: '⭐ Demo: horizontal',
  render: renderDemo(demos.horizontal),
};

export const DemoScrollTo: Story = {
  name: '⭐ Demo: scrollTo',
  render: renderDemo(demos.scrollTo),
};

export const DemoScrollPosition: Story = {
  name: '⭐ Demo: scrollPosition',
  render: renderDemo(demos.scrollPosition),
};

export const DemoMaxHeight: Story = {
  name: '⭐ Demo: maxHeight',
  render: renderDemo(demos.maxHeight),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoScrollIntoView: Story = {
  name: '⭐ Demo: scrollIntoView',
  render: renderDemo(demos.scrollIntoView),
};

export const DemoAutosizePopover: Story = {
  name: '⭐ Demo: autosizePopover',
  render: renderDemo(demos.autosizePopover),
};
