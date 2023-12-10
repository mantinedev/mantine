import { renderDemo } from '../../../render-demo';
import * as demos from './index';

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
