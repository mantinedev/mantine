import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Kbd' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_size = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};
