import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Divider' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_labels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const Demo_sizes = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const Demo_orientation = {
  name: '⭐ Demo: orientation',
  render: renderDemo(demos.orientation),
};

export const Demo_variants = {
  name: '⭐ Demo: variants',
  render: renderDemo(demos.variants),
};
