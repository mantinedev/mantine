import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Loader' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoCustomType = {
  name: '⭐ Demo: customType',
  render: renderDemo(demos.customType),
};

export const DemoCssLoader = {
  name: '⭐ Demo: cssLoader',
  render: renderDemo(demos.cssLoader),
};

export const DemoSize = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};
