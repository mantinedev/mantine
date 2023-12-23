import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'DateInput' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_clearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_format = {
  name: '⭐ Demo: format',
  render: renderDemo(demos.format),
};

export const Demo_parser = {
  name: '⭐ Demo: parser',
  render: renderDemo(demos.parser),
};

export const Demo_minMax = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};

export const Demo_deselect = {
  name: '⭐ Demo: deselect',
  render: renderDemo(demos.deselect),
};

export const Demo_time = {
  name: '⭐ Demo: time',
  render: renderDemo(demos.time),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};
