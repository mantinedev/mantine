import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Chip' };

export const Demo_states = {
  name: '⭐ Demo: states',
  render: renderDemo(demos.states),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_group = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const Demo_icon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const Demo_tooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const Demo_deselect = {
  name: '⭐ Demo: deselect',
  render: renderDemo(demos.deselect),
};
