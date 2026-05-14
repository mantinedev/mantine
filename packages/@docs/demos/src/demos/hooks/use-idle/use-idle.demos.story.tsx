import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useIdle' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_events = {
  name: '⭐ Demo: events',
  render: renderDemo(demos.events),
};

export const Demo_state = {
  name: '⭐ Demo: state',
  render: renderDemo(demos.state),
};
