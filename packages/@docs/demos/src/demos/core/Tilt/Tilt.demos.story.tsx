import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Tilt' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_layers = {
  name: '⭐ Demo: layers',
  render: renderDemo(demos.layers),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_trackWindow = {
  name: '⭐ Demo: trackWindow',
  render: renderDemo(demos.trackWindow),
};
