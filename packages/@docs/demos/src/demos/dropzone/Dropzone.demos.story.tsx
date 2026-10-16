import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Dropzone' };

export const Demo_disabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const Demo_enableChildPointerEvent = {
  name: '⭐ Demo: enableChildPointerEvent',
  render: renderDemo(demos.enableChildPointerEvent),
};

export const Demo_fullScreen = {
  name: '⭐ Demo: fullScreen',
  render: renderDemo(demos.fullScreen),
};

export const Demo_loading = {
  name: '⭐ Demo: loading',
  render: renderDemo(demos.loading),
};

export const Demo_manual = {
  name: '⭐ Demo: manual',
  render: renderDemo(demos.manual),
};

export const Demo_preview = {
  name: '⭐ Demo: preview',
  render: renderDemo(demos.preview),
};

export const Demo_progress = {
  name: '⭐ Demo: progress',
  render: renderDemo(demos.progress),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};
