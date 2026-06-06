import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Menubar' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_hover = {
  name: '⭐ Demo: hover',
  render: renderDemo(demos.hover),
};

export const Demo_selectable = {
  name: '⭐ Demo: selectable',
  render: renderDemo(demos.selectable),
};

export const Demo_controlled = {
  name: '⭐ Demo: controlled',
  render: renderDemo(demos.controlled),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
