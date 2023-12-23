import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Stack' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};
