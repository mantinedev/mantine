import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'schedule/MonthView' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
export const Demo_withWeekNumbers = {
  name: '⭐ Demo: withWeekNumbers',
  render: renderDemo(demos.withWeekNumbers),
};
export const Demo_withoutWeekDays = {
  name: '⭐ Demo: withoutWeekDays',
  render: renderDemo(demos.withoutWeekDays),
};
export const Demo_firstDayOfWeek = {
  name: '⭐ Demo: firstDayOfWeek',
  render: renderDemo(demos.firstDayOfWeek),
};
export const Demo_weekdayFormat = {
  name: '⭐ Demo: weekdayFormat',
  render: renderDemo(demos.weekdayFormat),
};
export const Demo_consistentWeeks = {
  name: '⭐ Demo: consistentWeeks',
  render: renderDemo(demos.consistentWeeks),
};
export const Demo_highlightToday = {
  name: '⭐ Demo: highlightToday',
  render: renderDemo(demos.highlightToday),
};
export const Demo_withoutOutsideDays = {
  name: '⭐ Demo: withoutOutsideDays',
  render: renderDemo(demos.withoutOutsideDays),
};
export const Demo_withoutHeader = {
  name: '⭐ Demo: withoutHeader',
  render: renderDemo(demos.withoutHeader),
};
export const Demo_manyEvents = {
  name: '⭐ Demo: manyEvents',
  render: renderDemo(demos.manyEvents),
};
export const Demo_dragDrop = { name: '⭐ Demo: dragDrop', render: renderDemo(demos.dragDrop) };
export const Demo_staticMode = {
  name: '⭐ Demo: staticMode',
  render: renderDemo(demos.staticMode),
};
