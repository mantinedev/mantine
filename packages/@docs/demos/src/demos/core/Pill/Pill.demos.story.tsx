import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Pill' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoWithinInput = {
  name: '⭐ Demo: withinInput',
  render: renderDemo(demos.withinInput),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
