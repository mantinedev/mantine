import { Meta, StoryObj } from '@storybook/react';
import * as demos from './index';
import { renderDemo } from '../../../render-demo';

const meta: Meta = {
  title: 'Combobox',
};
export default meta;

type Story = StoryObj;

export const DemoAutocomplete: Story = {
  name: '⭐ Demo: autocomplete',
  render: renderDemo(demos.autocomplete),
};

export const DemoHiddenDropdown: Story = {
  name: '⭐ Demo: hiddenDropdown',
  render: renderDemo(demos.hiddenDropdown),
};

export const DemoSelect: Story = {
  name: '⭐ Demo: select',
  render: renderDemo(demos.select),
};

export const DemoSearchableSelect: Story = {
  name: '⭐ Demo: searchableSelect',
  render: renderDemo(demos.searchableSelect),
};

export const DemoButton: Story = {
  name: '⭐ Demo: button',
  render: renderDemo(demos.button),
};

export const DemoButtonSearch: Story = {
  name: '⭐ Demo: buttonSearch',
  render: renderDemo(demos.buttonSearch),
};

export const DemoSelectFirstOption: Story = {
  name: '⭐ Demo: selectFirstOption',
  render: renderDemo(demos.selectFirstOption),
};

export const DemoControlledDropdown: Story = {
  name: '⭐ Demo: controlledDropdown',
  render: renderDemo(demos.controlledDropdown),
};

export const DemoActiveOption: Story = {
  name: '⭐ Demo: activeOption',
  render: renderDemo(demos.activeOption),
};

export const DemoNativeScroll: Story = {
  name: '⭐ Demo: nativeScroll',
  render: renderDemo(demos.nativeScroll),
};

export const DemoScrollArea: Story = {
  name: '⭐ Demo: scrollArea',
  render: renderDemo(demos.scrollArea),
};

export const DemoMultiselect: Story = {
  name: '⭐ Demo: multiselect',
  render: renderDemo(demos.multiselect),
};

export const DemoSearchableMultiselect: Story = {
  name: '⭐ Demo: searchableMultiselect',
  render: renderDemo(demos.searchableMultiselect),
};

export const DemoNoDropdown: Story = {
  name: '⭐ Demo: noDropdown',
  render: renderDemo(demos.noDropdown),
};

export const DemoGroups: Story = {
  name: '⭐ Demo: groups',
  render: renderDemo(demos.groups),
};

export const DemoStylesApi: Story = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
