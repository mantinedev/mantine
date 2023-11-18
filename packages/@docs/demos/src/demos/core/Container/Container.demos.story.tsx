import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Container' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoSizes = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const DemoFluid = {
  name: '⭐ Demo: fluid',
  render: renderDemo(demos.fluid),
};

export const DemoResponsive = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};
