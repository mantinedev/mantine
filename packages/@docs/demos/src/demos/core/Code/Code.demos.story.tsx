import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Code' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_colors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const Demo_block = {
  name: '⭐ Demo: block',
  render: renderDemo(demos.block),
};
