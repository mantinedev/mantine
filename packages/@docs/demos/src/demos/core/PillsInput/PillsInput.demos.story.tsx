import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'PillsInput' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};
