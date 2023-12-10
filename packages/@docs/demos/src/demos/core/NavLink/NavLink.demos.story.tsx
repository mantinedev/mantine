import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'NavLink' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoActive = {
  name: '⭐ Demo: active',
  render: renderDemo(demos.active),
};

export const DemoNested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};
