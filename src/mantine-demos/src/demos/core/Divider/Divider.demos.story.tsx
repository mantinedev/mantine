import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Divider' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLabels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const DemoSizes = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const DemoOrientation = {
  name: '⭐ Demo: orientation',
  render: renderDemo(demos.orientation),
};
