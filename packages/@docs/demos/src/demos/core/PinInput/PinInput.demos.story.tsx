import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'PinInput' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_regexp = {
  name: '⭐ Demo: regexp',
  render: renderDemo(demos.regexp),
};
