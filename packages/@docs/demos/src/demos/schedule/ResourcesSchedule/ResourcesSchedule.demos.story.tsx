import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'schedule/ResourcesSchedule' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_dragDrop = {
  name: '⭐ Demo: dragDrop',
  render: renderDemo(demos.dragDrop),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const Demo_viewProps = {
  name: '⭐ Demo: viewProps',
  render: renderDemo(demos.viewProps),
};

export const Demo_eventForm = {
  name: '⭐ Demo: eventForm',
  render: renderDemo(demos.eventForm),
};

export const Demo_eventResize = {
  name: '⭐ Demo: eventResize',
  render: renderDemo(demos.eventResize),
};

export const Demo_staticMode = {
  name: '⭐ Demo: staticMode',
  render: renderDemo(demos.staticMode),
};

export const Demo_weekView = {
  name: '⭐ Demo: weekView',
  render: renderDemo(demos.weekView),
};

export const Demo_externalDragDrop = {
  name: '⭐ Demo: externalDragDrop',
  render: renderDemo(demos.externalDragDrop),
};
