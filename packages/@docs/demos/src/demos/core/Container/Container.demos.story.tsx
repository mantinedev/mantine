import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Container' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_sizes = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const Demo_fluid = {
  name: '⭐ Demo: fluid',
  render: renderDemo(demos.fluid),
};

export const Demo_responsive = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};
