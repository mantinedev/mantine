import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Timeline' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_bullet = {
  name: '⭐ Demo: bullet',
  render: renderDemo(demos.bullet),
};
