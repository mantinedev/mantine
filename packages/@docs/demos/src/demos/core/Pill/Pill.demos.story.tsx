import { renderDemo } from '../../../render-demo';
import * as demos from './index';

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
