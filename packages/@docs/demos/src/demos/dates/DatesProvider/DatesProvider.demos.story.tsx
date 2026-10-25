import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'DatesProvider' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_consistentWeeks = {
  name: '⭐ Demo: consistentWeeks',
  render: renderDemo(demos.consistentWeeks),
};

export const Demo_consistentWeeksDisabled = {
  name: '⭐ Demo: consistentWeeksDisabled',
  render: renderDemo(demos.consistentWeeksDisabled),
};

export const Demo_intlFormatting = {
  name: '⭐ Demo: intlFormatting',
  render: renderDemo(demos.intlFormatting),
};

export const Demo_consistentWeeksComparison = {
  name: '⭐ Demo: consistentWeeksComparison',
  render: renderDemo(demos.consistentWeeksComparison),
};
