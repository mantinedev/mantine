import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'ColorSwatch' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_component = {
  name: '⭐ Demo: component',
  render: renderDemo(demos.component),
};

export const Demo_shadow = {
  name: '⭐ Demo: shadow',
  render: renderDemo(demos.shadow),
};
