import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useRovingIndex' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_grid = {
  name: '⭐ Demo: grid',
  render: renderDemo(demos.grid),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_loop = {
  name: '⭐ Demo: loop',
  render: renderDemo(demos.loop),
};
