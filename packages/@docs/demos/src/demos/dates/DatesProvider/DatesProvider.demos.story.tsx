import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'DatesProvider' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTimezone = {
  name: '⭐ Demo: timezone',
  render: renderDemo(demos.timezone),
};
