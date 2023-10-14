import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'ScrollArea' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoHorizontal = {
  name: '⭐ Demo: horizontal',
  render: renderDemo(demos.horizontal),
};

export const DemoScrollTo = {
  name: '⭐ Demo: scrollTo',
  render: renderDemo(demos.scrollTo),
};

export const DemoScrollPosition = {
  name: '⭐ Demo: scrollPosition',
  render: renderDemo(demos.scrollPosition),
};

export const DemoMaxHeight = {
  name: '⭐ Demo: maxHeight',
  render: renderDemo(demos.maxHeight),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoScrollIntoView = {
  name: '⭐ Demo: scrollIntoView',
  render: renderDemo(demos.scrollIntoView),
};

export const DemoAutosizePopover = {
  name: '⭐ Demo: autosizePopover',
  render: renderDemo(demos.autosizePopover),
};
