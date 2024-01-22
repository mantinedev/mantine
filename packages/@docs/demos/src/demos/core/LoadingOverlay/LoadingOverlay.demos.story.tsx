import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'LoadingOverlay' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_loaderProps = {
  name: '⭐ Demo: loaderProps',
  render: renderDemo(demos.loaderProps),
};

export const Demo_customLoader = {
  name: '⭐ Demo: customLoader',
  render: renderDemo(demos.customLoader),
};
