import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Table' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoCaptions = {
  name: '⭐ Demo: captions',
  render: renderDemo(demos.captions),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoSpacingConfigurator = {
  name: '⭐ Demo: spacingConfigurator',
  render: renderDemo(demos.spacingConfigurator),
};

export const DemoScrollContainer = {
  name: '⭐ Demo: scrollContainer',
  render: renderDemo(demos.scrollContainer),
};

export const DemoScrollContainerNative = {
  name: '⭐ Demo: scrollContainerNative',
  render: renderDemo(demos.scrollContainerNative),
};

export const DemoScrollRowSelection = {
  name: '⭐ Demo: rowSelection',
  render: renderDemo(demos.rowSelection),
};

export const DemoData = {
  name: '⭐ Demo: data',
  render: renderDemo(demos.data),
};

export const DemoStickyHeader = {
  name: '⭐ Demo: stickyHeader',
  render: renderDemo(demos.stickyHeader),
};
