import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'MobileMonthView' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_withWeekNumbers = {
  name: '⭐ Demo: withWeekNumbers',
  render: renderDemo(demos.withWeekNumbers),
};

export const Demo_withOutsideDays = {
  name: '⭐ Demo: withOutsideDays',
  render: renderDemo(demos.withOutsideDays),
};

export const Demo_staticMode = {
  name: '⭐ Demo: staticMode',
  render: renderDemo(demos.staticMode),
};

export const Demo_localization = {
  name: '⭐ Demo: localization',
  render: renderDemo(demos.localization),
};

export const Demo_highlightToday = {
  name: '⭐ Demo: highlightToday',
  render: renderDemo(demos.highlightToday),
};

export const Demo_firstDayOfWeek = {
  name: '⭐ Demo: firstDayOfWeek',
  render: renderDemo(demos.firstDayOfWeek),
};

export const Demo_renderHeader = {
  name: '⭐ Demo: renderHeader',
  render: renderDemo(demos.renderHeader),
};

export const Demo_consistentWeeks = {
  name: '⭐ Demo: consistentWeeks',
  render: renderDemo(demos.consistentWeeks),
};

export const Demo_weekdayFormat = {
  name: '⭐ Demo: weekdayFormat',
  render: renderDemo(demos.weekdayFormat),
};

export const Demo_withoutWeekDays = {
  name: '⭐ Demo: withoutWeekDays',
  render: renderDemo(demos.withoutWeekDays),
};
