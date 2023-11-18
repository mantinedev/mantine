import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'NumberFormatter' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoPrefixSuffix = {
  name: '⭐ Demo: prefixSuffix',
  render: renderDemo(demos.prefixSuffix),
};

export const DemoThousandsSeparator = {
  name: '⭐ Demo: thousandsSeparator',
  render: renderDemo(demos.thousandsSeparator),
};

export const DemoDecimalScale = {
  name: '⭐ Demo: decimalScale',
  render: renderDemo(demos.decimalScale),
};
