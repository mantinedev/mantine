import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Textarea' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoAutosize = {
  name: '⭐ Demo: autosize',
  render: renderDemo(demos.autosize),
};

export const DemoError = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
