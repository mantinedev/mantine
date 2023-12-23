import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Spotlight' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_compound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const Demo_scrollable = {
  name: '⭐ Demo: scrollable',
  render: renderDemo(demos.scrollable),
};

export const Demo_limit = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const Demo_customAction = {
  name: '⭐ Demo: customAction',
  render: renderDemo(demos.customAction),
};

export const Demo_groups = {
  name: '⭐ Demo: groups',
  render: renderDemo(demos.groups),
};
