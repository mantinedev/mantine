import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Textarea' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_autosize = {
  name: '⭐ Demo: autosize',
  render: renderDemo(demos.autosize),
};

export const Demo_error = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_resize = {
  name: '⭐ Demo: resize',
  render: renderDemo(demos.resize),
};
