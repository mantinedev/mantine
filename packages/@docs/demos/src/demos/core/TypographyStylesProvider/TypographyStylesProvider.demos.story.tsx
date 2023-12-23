import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'TypographyStylesProvider' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_all = {
  name: '⭐ Demo: all',
  render: renderDemo(demos.all),
};
