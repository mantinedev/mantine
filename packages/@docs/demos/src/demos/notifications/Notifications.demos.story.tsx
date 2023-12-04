import * as demos from './index';
import { renderDemo } from '../../render-demo';

export default { title: 'Notifications' };

export const DemoAutoclose = {
  name: '⭐ Demo: autoclose',
  render: renderDemo(demos.autoclose),
};

export const DemoBase = {
  name: '⭐ Demo: base',
  render: renderDemo(demos.base),
};

export const DemoClean = {
  name: '⭐ Demo: clean',
  render: renderDemo(demos.clean),
};

export const DemoLimit = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const DemoUpdate = {
  name: '⭐ Demo: update',
  render: renderDemo(demos.update),
};

export const DemoCustomize = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};
