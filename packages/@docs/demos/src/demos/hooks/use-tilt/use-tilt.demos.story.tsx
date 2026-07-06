import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useTilt' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_card = {
  name: '⭐ Demo: card',
  render: renderDemo(demos.card),
};

export const Demo_page = {
  name: '⭐ Demo: page',
  render: renderDemo(demos.page),
};

export const Demo_adjust = {
  name: '⭐ Demo: adjust',
  render: renderDemo(demos.adjust),
};
