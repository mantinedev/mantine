import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Title' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_size = {
  name: '⭐ Demo: size',
  render: renderDemo(demos.size),
};

export const Demo_lineClamp = {
  name: '⭐ Demo: lineClamp',
  render: renderDemo(demos.lineClamp),
};

export const Demo_textWrap = {
  name: '⭐ Demo: textWrap',
  render: renderDemo(demos.textWrap),
};
