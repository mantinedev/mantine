import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'PinInput' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoRegexp = {
  name: '⭐ Demo: regexp',
  render: renderDemo(demos.regexp),
};
