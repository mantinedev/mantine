import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Radio' };

export const DemoGroupConfigurator = {
  name: '⭐ Demo: groupConfigurator',
  render: renderDemo(demos.groupConfigurator),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoIcon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoIconColor = {
  name: '⭐ Demo: iconColor',
  render: renderDemo(demos.iconColor),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoTooltip = {
  name: '⭐ Demo: tooltip',
  render: renderDemo(demos.tooltip),
};
