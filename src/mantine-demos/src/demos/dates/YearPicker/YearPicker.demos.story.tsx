import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'YearPicker',
};
export default meta;

type Story = StoryObj;

export const DemoUsage: Story = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoMultiple: Story = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoDeselect: Story = {
  name: '⭐ Demo: deselect',
  render: renderDemo(demos.deselect),
};

export const DemoRange: Story = {
  name: '⭐ Demo: range',
  render: renderDemo(demos.range),
};

export const DemoSingleRange: Story = {
  name: '⭐ Demo: singleRange',
  render: renderDemo(demos.singleRange),
};

export const DemoNumberOfColumns: Story = {
  name: '⭐ Demo: numberOfColumns',
  render: renderDemo(demos.numberOfColumns),
};

export const DemoSizeConfigurator: Story = {
  name: '⭐ Demo: sizeConfigurator',
  render: renderDemo(demos.sizeConfigurator),
};

export const DemoMinMax: Story = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};

export const DemoControlProps: Story = {
  name: '⭐ Demo: controlProps',
  render: renderDemo(demos.controlProps),
};

export const DemoYearsListFormat: Story = {
  name: '⭐ Demo: yearsListFormat',
  render: renderDemo(demos.yearsListFormat),
};

export const DemoDecadeLabelFormat: Story = {
  name: '⭐ Demo: decadeLabelFormat',
  render: renderDemo(demos.decadeLabelFormat),
};

export const DemoDefaultDate: Story = {
  name: '⭐ Demo: defaultDate',
  render: renderDemo(demos.defaultDate),
};

export const DemoControlledDate: Story = {
  name: '⭐ Demo: controlledDate',
  render: renderDemo(demos.controlledDate),
};
