import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'FileButton' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoMultiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoReset = {
  name: '⭐ Demo: reset',
  render: renderDemo(demos.reset),
};
