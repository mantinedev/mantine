import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Group' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPreventGrowOverflow = {
  name: '⭐ Demo: preventGrowOverflow',
  render: renderDemo(demos.preventGrowOverflow),
};
