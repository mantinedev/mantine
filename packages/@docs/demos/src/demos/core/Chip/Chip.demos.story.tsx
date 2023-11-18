import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Chip' };

export const DemoStates = {
  name: '⭐ Demo: states',
  render: renderDemo(demos.states),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoGroup = {
  name: '⭐ Demo: group',
  render: renderDemo(demos.group),
};

export const DemoIcon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoTooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};
