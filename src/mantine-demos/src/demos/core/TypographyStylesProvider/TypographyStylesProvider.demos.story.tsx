import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'TypographyStylesProvider' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoAll = {
  name: '⭐ Demo: all',
  render: renderDemo(demos.all),
};
