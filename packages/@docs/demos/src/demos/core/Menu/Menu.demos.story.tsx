import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Menu' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoTransitions = {
  name: '⭐ Demo: transitions',
  render: renderDemo(demos.transitions),
};

export const DemoComponent = {
  name: '⭐ Demo: component',
  render: renderDemo(demos.component),
};

export const DemoHover = {
  name: '⭐ Demo: hover',
  render: renderDemo(demos.hover),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoPositionConfigurator = {
  name: '⭐ Demo: positionConfigurator',
  render: renderDemo(demos.positionConfigurator),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoCustomControl = {
  name: '⭐ Demo: customControl',
  render: renderDemo(demos.customControl),
};
