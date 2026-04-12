import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Blockquote' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_textWrap = {
  name: '⭐ Demo: textWrap',
  render: renderDemo(demos.textWrap),
};
