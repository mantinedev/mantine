import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Autocomplete' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoReadOnly = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoError = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoSort = {
  name: '⭐ Demo: sort',
  render: renderDemo(demos.sort),
};

export const DemoSearch = {
  name: '⭐ Demo: search',
  render: renderDemo(demos.search),
};

export const DemoLimit = {
  name: '⭐ Demo: limit',
  render: renderDemo(demos.limit),
};

export const DemoScrollArea = {
  name: '⭐ Demo: scrollArea',
  render: renderDemo(demos.scrollArea),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoGroups = {
  name: '⭐ Demo: groups',
  render: renderDemo(demos.groups),
};

export const DemoDisabledOptions = {
  name: '⭐ Demo: disabledOptions',
  render: renderDemo(demos.disabledOptions),
};
