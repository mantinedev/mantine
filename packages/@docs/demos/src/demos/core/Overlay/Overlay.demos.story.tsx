import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Overlay' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoGradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const DemoBlur = {
  name: '⭐ Demo: blur',
  render: renderDemo(demos.blur),
};
