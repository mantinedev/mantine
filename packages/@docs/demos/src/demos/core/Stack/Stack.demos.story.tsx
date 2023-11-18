import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Stack' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};
