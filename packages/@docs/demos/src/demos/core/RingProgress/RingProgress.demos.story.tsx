import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'RingProgress' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_label = {
  name: '⭐ Demo: label',
  render: renderDemo(demos.label),
};

export const Demo_tooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};

export const Demo_sectionsProps = {
  name: '⭐ Demo: sectionsProps',
  render: renderDemo(demos.sectionsProps),
};

export const Demo_rootColor = {
  name: '⭐ Demo: rootColor',
  render: renderDemo(demos.rootColor),
};

export const Demo_transitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};
