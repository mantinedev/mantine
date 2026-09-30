import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'useBrowserLanguage' };

export const Demo_usage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const Demo_languages = {
  name: '⭐ Demo: languages',
  render: renderDemo(demos.languages),
};
