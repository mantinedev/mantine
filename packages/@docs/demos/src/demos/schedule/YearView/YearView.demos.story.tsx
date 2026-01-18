import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'schedule/YearView' };

export const Demo_usage = { name: '⭐ Demo: usage', render: renderDemo(demos.usage) };
export const Demo_withWeekNumbers = { name: '⭐ Demo: withWeekNumbers', render: renderDemo(demos.withWeekNumbers) };
export const Demo_withoutWeekDays = { name: '⭐ Demo: withoutWeekDays', render: renderDemo(demos.withoutWeekDays) };
export const Demo_firstDayOfWeek = { name: '⭐ Demo: firstDayOfWeek', render: renderDemo(demos.firstDayOfWeek) };
export const Demo_weekdayFormat = { name: '⭐ Demo: weekdayFormat', render: renderDemo(demos.weekdayFormat) };
export const Demo_highlightToday = { name: '⭐ Demo: highlightToday', render: renderDemo(demos.highlightToday) };
export const Demo_withoutHeader = { name: '⭐ Demo: withoutHeader', render: renderDemo(demos.withoutHeader) };
export const Demo_staticMode = { name: '⭐ Demo: staticMode', render: renderDemo(demos.staticMode) };
export const Demo_stylesApi = { name: '⭐ Demo: stylesApi', render: renderDemo(demos.stylesApi) };
