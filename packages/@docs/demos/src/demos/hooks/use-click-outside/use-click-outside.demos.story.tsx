import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useClickOutside' };

export const Demo_events = {
  name: '⭐ Demo: events',
  render: renderDemo(demos.events),
};

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
