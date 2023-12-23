import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FileButton' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_multiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const Demo_reset = {
  name: '⭐ Demo: reset',
  render: renderDemo(demos.reset),
};
