import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Switch' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoLabels = {
  name: '⭐ Demo: labels',
  render: renderDemo(demos.labels),
};

export const DemoThumbIcon = {
  name: '⭐ Demo: thumbIcon',
  render: renderDemo(demos.thumbIcon),
};

export const DemoIconLabels = {
  name: '⭐ Demo: iconLabels',
  render: renderDemo(demos.iconLabels),
};

export const DemoGroupConfigurator = {
  name: '⭐ Demo: groupConfigurator',
  render: renderDemo(demos.groupConfigurator),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoTooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};
