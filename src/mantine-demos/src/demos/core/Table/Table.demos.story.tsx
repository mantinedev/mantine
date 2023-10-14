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
