import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'NavLink' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_active = {
  name: '⭐ Demo: active',
  render: renderDemo(demos.active),
};

export const Demo_nested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};

export const Demo_sizes = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const Demo_rail = {
  name: '⭐ Demo: rail',
  render: renderDemo(demos.rail),
};

export const Demo_guideline = {
  name: '⭐ Demo: guideline',
  render: renderDemo(demos.guideline),
};

export const Demo_radius = {
  name: '⭐ Demo: radius',
  render: renderDemo(demos.radius),
};
