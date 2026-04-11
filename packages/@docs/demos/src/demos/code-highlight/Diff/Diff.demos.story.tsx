import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Diff' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_split = {
  name: '⭐ Demo: split',
  render: renderDemo(demos.split),
};

export const Demo_diffMethod = {
  name: '⭐ Demo: diffMethod',
  render: renderDemo(demos.diffMethod),
};

export const Demo_contextLines = {
  name: '⭐ Demo: contextLines',
  render: renderDemo(demos.contextLines),
};

export const Demo_colors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};
