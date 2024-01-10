import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'DonutChart' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_withLabels = {
  name: '⭐ Demo: withLabels',
  render: renderDemo(demos.withLabels),
};
