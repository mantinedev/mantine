import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Badge' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_fullWidth = {
  name: '⭐ Demo: fullWidth',
  render: renderDemo(demos.fullWidth),
};

export const Demo_sections = {
  name: '⭐ Demo: sections',
  render: renderDemo(demos.sections),
};

export const Demo_gradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_rounded = {
  name: '⭐ Demo: rounded',
  render: renderDemo(demos.rounded),
};

export const Demo_variantColorsResolver = {
  name: '⭐ Demo: variantColorsResolver',
  render: renderDemo(demos.variantColorsResolver),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};
