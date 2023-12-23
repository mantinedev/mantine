import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Loader' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_customType = {
  name: '⭐ Demo: customType',
  render: renderDemo(demos.customType),
};

export const Demo_cssLoader = {
  name: '⭐ Demo: cssLoader',
  render: renderDemo(demos.cssLoader),
};

export const Demo_size = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};
