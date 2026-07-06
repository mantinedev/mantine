import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useHoldRepeatHandlers' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_events = {
  name: '⭐ Demo: events',
  render: renderDemo(demos.events),
};
