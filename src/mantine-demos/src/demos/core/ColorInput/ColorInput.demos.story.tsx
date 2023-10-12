import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'ColorInput' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoError = {
  name: '⭐ Demo: error',
  render: renderDemo(demos.error),
};

export const DemoDisabled = {
  name: '⭐ Demo: disabled',
  render: renderDemo(demos.disabled),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};

export const DemoFormatsConfigurator = {
  name: '⭐ Demo: formatsConfigurator',
  render: renderDemo(demos.formatsConfigurator),
};

export const DemoReadOnly = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const DemoRightSection = {
  name: '⭐ Demo: rightSection',
  render: renderDemo(demos.rightSection),
};

export const DemoSwatches = {
  name: '⭐ Demo: swatches',
  render: renderDemo(demos.swatches),
};

export const DemoSwatchesOnly = {
  name: '⭐ Demo: swatchesOnly',
  render: renderDemo(demos.swatchesOnly),
};
