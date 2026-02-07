import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'schedule/Schedule' };

export const Demo_usage = { name: '⭐ Demo: usage', render: renderDemo(demos.usage) };
export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};
export const Demo_viewProps = { name: '⭐ Demo: viewProps', render: renderDemo(demos.viewProps) };
export const Demo_defaultView = {
  name: '⭐ Demo: defaultView',
  render: renderDemo(demos.defaultView),
};

export const Demo_eventForm = {
  name: '⭐ Demo: eventForm',
  render: renderDemo(demos.eventForm),
};
