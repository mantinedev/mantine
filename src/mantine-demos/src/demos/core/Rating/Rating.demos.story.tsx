import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'Rating' };

export const DemoConfigurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const DemoCustomSymbol = {
  name: '⭐ Demo: customSymbol',
  render: renderDemo(demos.customSymbol),
};

export const DemoReadOnly = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const DemoFractions = {
  name: '⭐ Demo: fractions',
  render: renderDemo(demos.fractions),
};

export const DemoSymbol = {
  name: '⭐ Demo: symbol',
  render: renderDemo(demos.symbol),
};
