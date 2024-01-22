import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Overlay' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_gradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const Demo_blur = {
  name: '⭐ Demo: blur',
  render: renderDemo(demos.blur),
};
