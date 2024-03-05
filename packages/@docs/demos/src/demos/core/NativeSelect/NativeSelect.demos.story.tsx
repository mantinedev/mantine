import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'NativeSelect' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_options = {
  name: '⭐ Demo: options',
  render: renderDemo(demos.options),
};

export const Demo_data = {
  name: '⭐ Demo: data',
  render: renderDemo(demos.data),
};

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_error = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const Demo_sections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_dividers = {
  name: '⭐ Demo: dividers',
  render: renderDemo(demos.dividers),
};
