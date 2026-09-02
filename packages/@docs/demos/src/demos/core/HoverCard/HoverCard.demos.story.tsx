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

export const Demo_group = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const Demo_keyboard = {
  name: '⭐ Demo: keyboard',
  render: renderDemo(demos.keyboard),
};

export const Demo_events = {
  name: '⭐ Demo: events',
  render: renderDemo(demos.events),
};

export const Demo_interactive = {
  name: '⭐ Demo: interactive',
  render: renderDemo(demos.interactive),
};

export const Demo_role = {
  name: '⭐ Demo: role',
  render: renderDemo(demos.role),
};
