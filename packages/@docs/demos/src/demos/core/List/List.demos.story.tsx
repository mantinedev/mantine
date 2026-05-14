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

export const Demo_start = {
  name: '⭐ Demo: start',
  render: renderDemo(demos.start),
};

export const Demo_reversed = {
  name: '⭐ Demo: reversed',
  render: renderDemo(demos.reversed),
};

export const Demo_value = {
  name: '⭐ Demo: value',
  render: renderDemo(demos.value),
};
