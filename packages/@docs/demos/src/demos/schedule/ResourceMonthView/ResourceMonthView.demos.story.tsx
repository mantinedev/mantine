import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'schedule/ResourceMonthView' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_staticMode = {
  name: '⭐ Demo: staticMode',
  render: renderDemo(demos.staticMode),
};

export const Demo_radius = {
  name: '⭐ Demo: radius',
  render: renderDemo(demos.radius),
};
