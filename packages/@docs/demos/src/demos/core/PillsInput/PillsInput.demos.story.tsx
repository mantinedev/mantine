import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'PillsInput' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};
