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
