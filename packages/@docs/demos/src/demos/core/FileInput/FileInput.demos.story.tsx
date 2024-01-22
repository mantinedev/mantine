import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'FileInput' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_error = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_clearable = {
  name: '⭐ Demo: clearable',
  render: renderDemo(demos.clearable),
};

export const Demo_accept = {
  name: '⭐ Demo: accept',
  render: renderDemo(demos.accept),
};

export const Demo_multiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const Demo_valueComponent = {
  name: '⭐ Demo: valueComponent',
  render: renderDemo(demos.valueComponent),
};

export const Demo_sections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};
