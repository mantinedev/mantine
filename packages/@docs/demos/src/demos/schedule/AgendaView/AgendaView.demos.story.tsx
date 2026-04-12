import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'schedule/AgendaView' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_allDayAndMultiday = {
  name: '⭐ Demo: allDayAndMultiday',
  render: renderDemo(demos.allDayAndMultiday),
};

export const Demo_dateFormats = {
  name: '⭐ Demo: dateFormats',
  render: renderDemo(demos.dateFormats),
};

export const Demo_renderEvent = {
  name: '⭐ Demo: renderEvent',
  render: renderDemo(demos.renderEvent),
};

export const Demo_eventClick = {
  name: '⭐ Demo: eventClick',
  render: renderDemo(demos.eventClick),
};

export const Demo_localization = {
  name: '⭐ Demo: localization',
  render: renderDemo(demos.localization),
};

export const Demo_staticMode = {
  name: '⭐ Demo: staticMode',
  render: renderDemo(demos.staticMode),
};
