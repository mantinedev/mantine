import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'LoadingOverlay' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLoaderProps = {
  name: '⭐ Demo: loaderProps',
  render: renderDemo(demos.loaderProps),
};

export const DemoCustomLoader = {
  name: '⭐ Demo: customLoader',
  render: renderDemo(demos.customLoader),
};
