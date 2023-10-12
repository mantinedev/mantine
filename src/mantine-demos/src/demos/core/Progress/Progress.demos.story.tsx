import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Progress' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoCompound = {
  name: '⭐ Demo: compound',
  render: renderDemo(demos.compound),
};

export const DemoTooltips = {
  name: '⭐ Demo: tooltips',
  render: renderDemo(demos.tooltips),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
