import { renderDemo } from '../../render-demo';
import * as demos from './index';

export default { title: 'Notifications' };

export const Demo_autoclose = {
  name: '⭐ Demo: autoclose',
  render: renderDemo(demos.autoclose),
};

export const Demo_base = {
  name: '⭐ Demo: base',
  render: renderDemo(demos.base),
};

export const Demo_clean = {
  name: '⭐ Demo: clean',
  render: renderDemo(demos.clean),
};

export const Demo_limit = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const Demo_update = {
  name: '⭐ Demo: update',
  render: renderDemo(demos.update),
};

export const Demo_customize = {
  name: '⭐ Demo: customize',
  render: renderDemo(demos.customize),
};

export const Demo_position = {
  name: '⭐ Demo: position',
  render: renderDemo(demos.position),
};

export const Demo_store = {
  name: '⭐ Demo: store',
  render: renderDemo(demos.store),
};
