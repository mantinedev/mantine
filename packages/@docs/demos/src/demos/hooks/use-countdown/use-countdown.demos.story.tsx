import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useCountdown' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_targetDate = {
  name: '⭐ Demo: targetDate',
  render: renderDemo(demos.targetDate),
};
