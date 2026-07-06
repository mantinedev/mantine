import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'DownloadTrigger' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_async = {
  name: '⭐ Demo: async',
  render: renderDemo(demos.async),
};

export const Demo_error = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const Demo_customTrigger = {
  name: '⭐ Demo: customTrigger',
  render: renderDemo(demos.customTrigger),
};
