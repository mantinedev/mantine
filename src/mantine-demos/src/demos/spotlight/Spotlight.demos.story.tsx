import * as demos from './index';
import { renderDemo } from '../../render-demo';

export default { title: 'Spotlight' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoCompound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const DemoScrollable = {
  name: '⭐ Demo: scrollable',
  render: renderDemo(demos.scrollable),
};

export const DemoLimit = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const DemoCustomAction = {
  name: '⭐ Demo: customAction',
  render: renderDemo(demos.customAction),
};

export const DemoGroups = {
  name: '⭐ Demo: groups',
  render: renderDemo(demos.groups),
};
