import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Mentions' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_multipleTriggers = {
  name: '⭐ Demo: multipleTriggers',
  render: renderDemo(demos.multipleTriggers),
};

export const Demo_async = {
  name: '⭐ Demo: async',
  render: renderDemo(demos.async),
};

export const Demo_showTrigger = {
  name: '⭐ Demo: showTrigger',
  render: renderDemo(demos.showTrigger),
};

export const Demo_renderMention = {
  name: '⭐ Demo: renderMention',
  render: renderDemo(demos.renderMention),
};

export const Demo_inline = {
  name: '⭐ Demo: inline',
  render: renderDemo(demos.inline),
};

export const Demo_caretStyling = {
  name: '⭐ Demo: caretStyling',
  render: renderDemo(demos.caretStyling),
};

export const Demo_stylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
