import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'ColorPicker' };

export const DemoFormatsConfigurator = {
  name: '⭐ Demo: formatsConfigurator',
  render: renderDemo(demos.formatsConfigurator),
};

export const DemoSizeConfigurator = {
  name: '⭐ Demo: sizeConfigurator',
  render: renderDemo(demos.sizeConfigurator),
};

export const DemoSwatchesConfigurator = {
  name: '⭐ Demo: swatchesConfigurator',
  render: renderDemo(demos.swatchesConfigurator),
};

export const DemoSwatches = {
  name: '⭐ Demo: swatches',
  render: renderDemo(demos.swatches),
};

export const DemoSwatchesOnly = {
  name: '⭐ Demo: swatchesOnly',
  render: renderDemo(demos.swatchesOnly),
};

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoFullWidth = {
  name: '⭐ Demo: fullWidth',
  render: renderDemo(demos.fullWidth),
};

export const DemoStylesApi = {
  name: '⭐ Demo: stylesApi',
  render: renderDemo(demos.stylesApi),
};
