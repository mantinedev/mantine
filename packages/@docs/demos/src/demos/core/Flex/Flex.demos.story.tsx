import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Flex' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoResponsive = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};
