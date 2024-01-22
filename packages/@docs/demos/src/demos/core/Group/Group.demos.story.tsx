import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Group' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_preventGrowOverflow = {
  name: '⭐ Demo: preventGrowOverflow',
  render: renderDemo(demos.preventGrowOverflow),
};
