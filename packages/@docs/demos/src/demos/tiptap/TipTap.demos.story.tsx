import * as demos from './index';
import { renderDemo } from '../../render-demo';

export default { title: 'TipTap' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoColors = {
  name: '⭐ Demo: colors',
  render: renderDemo(demos.colors),
};

export const DemoCodeHighlight = {
  name: '⭐ Demo: codeHighlight',
  render: renderDemo(demos.codeHighlight),
};

export const DemoBubbleMenu = {
  name: '⭐ Demo: bubbleMenu',
  render: renderDemo(demos.bubbleMenu),
};

export const DemoFloatingMenu = {
  name: '⭐ Demo: floatingMenu',
  render: renderDemo(demos.floatingMenu),
};

export const DemoCustomControl = {
  name: '⭐ Demo: customControl',
  render: renderDemo(demos.customControl),
};

export const DemoIcons = {
  name: '⭐ Demo: icons',
  render: renderDemo(demos.icons),
};

export const DemoPlaceholder = {
  name: '⭐ Demo: placeholder',
  render: renderDemo(demos.placeholder),
};
