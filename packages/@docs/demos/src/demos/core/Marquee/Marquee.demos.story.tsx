import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Marquee' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_vertical = {
  name: '⭐ Demo: vertical',
  render: renderDemo(demos.vertical),
};

export const Demo_pauseOnHover = {
  name: '⭐ Demo: pauseOnHover',
  render: renderDemo(demos.pauseOnHover),
};

export const Demo_multipleRows = {
  name: '⭐ Demo: multipleRows',
  render: renderDemo(demos.multipleRows),
};

export const Demo_fadeEdges = {
  name: '⭐ Demo: fadeEdges',
  render: renderDemo(demos.fadeEdges),
};
