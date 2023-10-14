import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Flex' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoResponsive = {
  name: '⭐ Demo: responsive',
  render: renderDemo(demos.responsive),
};
