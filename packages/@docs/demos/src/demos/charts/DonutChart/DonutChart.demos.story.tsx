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

export const Demo_size = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};

export const Demo_paddingAngle = {
  name: '⭐ Demo: paddingAngle',
  render: renderDemo(demos.paddingAngle),
};
