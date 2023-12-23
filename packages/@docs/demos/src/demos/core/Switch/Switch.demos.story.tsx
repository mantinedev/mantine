import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Switch' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_labels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const Demo_thumbIcon = {
  name: '⭐ Demo: thumbIcon',
  render: renderDemo(demos.thumbIcon),
};

export const Demo_iconLabels = {
  name: '⭐ Demo: iconLabels',
  render: renderDemo(demos.iconLabels),
};

export const Demo_groupConfigurator = {
  name: '⭐ Demo: groupConfigurator',
  render: renderDemo(demos.groupConfigurator),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_tooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};
