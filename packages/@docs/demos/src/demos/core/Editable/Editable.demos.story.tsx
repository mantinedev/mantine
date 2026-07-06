import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Editable' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_activation = {
  name: '⭐ Demo: activation',
  render: renderDemo(demos.activation),
};

export const Demo_submitMode = {
  name: '⭐ Demo: submitMode',
  render: renderDemo(demos.submitMode),
};

export const Demo_placeholder = {
  name: '⭐ Demo: placeholder',
  render: renderDemo(demos.placeholder),
};

export const Demo_multiline = {
  name: '⭐ Demo: multiline',
  render: renderDemo(demos.multiline),
};

export const Demo_triggers = {
  name: '⭐ Demo: triggers',
  render: renderDemo(demos.triggers),
};

export const Demo_controller = {
  name: '⭐ Demo: controller',
  render: renderDemo(demos.controller),
};
