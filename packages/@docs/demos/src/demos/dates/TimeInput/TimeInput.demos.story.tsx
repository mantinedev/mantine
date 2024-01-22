import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'TimeInput' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_withSeconds = {
  name: '⭐ Demo: withSeconds',
  render: renderDemo(demos.withSeconds),
};

export const Demo_icon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const Demo_picker = {
  name: '⭐ Demo: picker',
  render: renderDemo(demos.picker),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
