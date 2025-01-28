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
