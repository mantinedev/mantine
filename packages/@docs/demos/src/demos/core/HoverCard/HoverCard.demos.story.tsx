import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'HoverCard' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_profile = {
  name: '⭐ Demo: profile',
  render: renderDemo(demos.profile),
};

export const Demo_delay = {
  name: '⭐ Demo: delay',
  render: renderDemo(demos.delay),
};
