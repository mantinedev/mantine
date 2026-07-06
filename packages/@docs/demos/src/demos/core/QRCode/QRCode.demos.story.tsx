import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'QRCode' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_sizes = {
  name: '⭐ Demo: sizes',
  render: renderDemo(demos.sizes),
};

export const Demo_colors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const Demo_errorCorrection = {
  name: '⭐ Demo: errorCorrection',
  render: renderDemo(demos.errorCorrection),
};

export const Demo_logo = {
  name: '⭐ Demo: logo',
  render: renderDemo(demos.logo),
};

export const Demo_customRender = {
  name: '⭐ Demo: customRender',
  render: renderDemo(demos.customRender),
};
