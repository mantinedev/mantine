import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useScrollIntoView' };

export const Demo_axis = {
  name: '⭐ Demo: axis',
  render: renderDemo(demos.axis),
};

export const Demo_parent = {
  name: '⭐ Demo: parent',
  render: renderDemo(demos.parent),
};

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
