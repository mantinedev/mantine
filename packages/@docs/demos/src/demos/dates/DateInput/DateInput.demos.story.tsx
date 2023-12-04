import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'DateInput' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoClearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoFormat = {
  name: '⭐ Demo: format',
  render: renderDemo(demos.format),
};

export const DemoParser = {
  name: '⭐ Demo: parser',
  render: renderDemo(demos.parser),
};

export const DemoMinMax = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};

export const DemoDeselect = {
  name: '⭐ Demo: deselect',
  render: renderDemo(demos.deselect),
};

export const DemoTime = {
  name: '⭐ Demo: time',
  render: renderDemo(demos.time),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
