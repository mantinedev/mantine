import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Table' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_captions = {
  name: '⭐ Demo: captions',
  render: renderDemo(demos.captions),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_spacingConfigurator = {
  name: '⭐ Demo: spacingConfigurator',
  render: renderDemo(demos.spacingConfigurator),
};

export const Demo_scrollContainer = {
  name: '⭐ Demo: scrollContainer',
  render: renderDemo(demos.scrollContainer),
};

export const Demo_scrollContainerNative = {
  name: '⭐ Demo: scrollContainerNative',
  render: renderDemo(demos.scrollContainerNative),
};

export const Demo_scrollRowSelection = {
  name: '⭐ Demo: rowSelection',
  render: renderDemo(demos.rowSelection),
};

export const Demo_data = {
  name: '⭐ Demo: data',
  render: renderDemo(demos.data),
};

export const Demo_stickyHeader = {
  name: '⭐ Demo: stickyHeader',
  render: renderDemo(demos.stickyHeader),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_tabularNums = {
  name: '⭐ Demo: tabularNums',
  render: renderDemo(demos.tabularNums),
};
