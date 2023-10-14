import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'List' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoIcon = {
  name: '⭐ Demo: icon',
  render: renderDemo(demos.icon),
};

export const DemoNested = {
  name: '⭐ Demo: nested',
  render: renderDemo(demos.nested),
};
