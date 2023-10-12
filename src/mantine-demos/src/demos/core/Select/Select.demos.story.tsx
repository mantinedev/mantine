import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Select',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoSearchable: Story = {
  name: '⭐ Demo: searchable',
  render: renderDemo(demos.searchable),
};

export const DemoNothingFound: Story = {
  name: '⭐ Demo: nothingFound',
  render: renderDemo(demos.nothingFound),
};

export const DemoCheckIcon: Story = {
  name: '⭐ Demo: checkIcon',
  render: renderDemo(demos.checkIcon),
};

export const DemoConfigurator: Story = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoDisabled: Story = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoDisabledOptions: Story = {
  name: '⭐ Demo: disabledOptions',
  render: renderDemo(demos.disabledOptions),
};

export const DemoError: Story = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoGroups: Story = {
  name: '⭐ Demo: groups',
  render: renderDemo(demos.groups),
};

export const DemoLimit: Story = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const DemoReadOnly: Story = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const DemoScrollArea: Story = {
  name: '⭐ Demo: scrollArea',
  render: renderDemo(demos.scrollArea),
};

export const DemoSearch: Story = {
  name: '⭐ Demo: search',
  render: renderDemo(demos.search),
};

export const DemoSort: Story = {
  name: '⭐ Demo: sort',
  render: renderDemo(demos.sort),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoAllowDeselect: Story = {
  name: '⭐ Demo: allowDeselect',
  render: renderDemo(demos.allowDeselect),
};

export const DemoClearable: Story = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};
