import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'TableOfContents' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_depthOffset = {
  name: '⭐ Demo: depthOffset',
  render: renderDemo(demos.depthOffset),
};

export const Demo_autoContrast = {
  name: '⭐ Demo: autoContrast',
  render: renderDemo(demos.autoContrast),
};

export const Demo_styles = {
  name: '⭐ Demo: styles',
  render: renderDemo(demos.styles),
};
