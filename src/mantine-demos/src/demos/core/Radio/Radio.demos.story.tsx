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
