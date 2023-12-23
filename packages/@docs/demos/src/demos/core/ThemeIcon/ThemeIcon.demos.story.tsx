import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'ThemeIcon' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_gradient = {
  name: '⭐ Demo: gradient',
  render: renderDemo(demos.gradient),
};

export const Demo_variantColorsResolver = {
  name: '⭐ Demo: variantColorsResolver',
  render: renderDemo(demos.variantColorsResolver),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};
