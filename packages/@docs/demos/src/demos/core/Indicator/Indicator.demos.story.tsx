import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Indicator' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoInline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};

export const DemoOffset = {
  name: '⭐ Demo: offset',
  render: renderDemo(demos.offset),
};

export const DemoProcessing = {
  name: '⭐ Demo: processing',
  render: renderDemo(demos.processing),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
