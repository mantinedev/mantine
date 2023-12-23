import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'List' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_icon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const Demo_nested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};
