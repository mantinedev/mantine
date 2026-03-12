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

export const Demo_responsiveLayout = {
  name: '⭐ Demo: responsiveLayout',
  render: renderDemo(demos.responsiveLayout),
};

export const Demo_externalDragDrop = {
  name: '⭐ Demo: externalDragDrop',
  render: renderDemo(demos.externalDragDrop),
};

export const Demo_bidirectionalDragDrop = {
  name: '⭐ Demo: bidirectionalDragDrop',
  render: renderDemo(demos.bidirectionalDragDrop),
};

export const Demo_eventResize = {
  name: '⭐ Demo: eventResize',
  render: renderDemo(demos.eventResize),
};
