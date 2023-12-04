import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Card' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoLink = {
  name: '⭐ Demo: link',
  render: renderDemo(demos.link),
};

export const DemoLinkSection = {
  name: '⭐ Demo: linkSection',
  render: renderDemo(demos.linkSection),
};

export const DemoSection = {
  name: '⭐ Demo: section',
  render: renderDemo(demos.section),
};
