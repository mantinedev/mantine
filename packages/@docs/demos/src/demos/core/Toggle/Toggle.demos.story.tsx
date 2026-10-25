import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Toggle' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_autoWidth = {
  name: '⭐ Demo: autoWidth',
  render: renderDemo(demos.autoWidth),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};
