import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useHotkeys' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_index = {
  name: '⭐ Demo: index',
  render: renderDemo(demos.index),
};
