import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Sparkline' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_colorSchemeColor = {
  name: '⭐ Demo: colorSchemeColor',
  render: renderDemo(demos.colorSchemeColor),
};

export const Demo_trendColors = {
  name: '⭐ Demo: trendColors',
  render: renderDemo(demos.trendColors),
};
