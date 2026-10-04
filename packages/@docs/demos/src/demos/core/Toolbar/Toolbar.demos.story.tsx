import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Toolbar' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_toggleGroup = {
  name: '⭐ Demo: toggleGroup',
  render: renderDemo(demos.toggleGroup),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_autoWidth = {
  name: '⭐ Demo: autoWidth',
  render: renderDemo(demos.autoWidth),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};
