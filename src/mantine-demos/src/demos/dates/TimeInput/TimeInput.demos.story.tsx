import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'TimeInput' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoWithSeconds = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const DemoIcon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoPicker = {
  name: '⭐ Demo: picker',
  render: renderDemo(demos.picker),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
