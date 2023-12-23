import { renderDemo } from '../../../render-demo';
import * as demos from './index';

export default { title: 'Rating' };

export const Demo_configurator = {
  name: '⭐ Demo: configurator',
  render: renderDemo(demos.configurator),
};

export const Demo_customSymbol = {
  name: '⭐ Demo: customSymbol',
  render: renderDemo(demos.customSymbol),
};

export const Demo_readOnly = {
  name: '⭐ Demo: readOnly',
  render: renderDemo(demos.readOnly),
};

export const Demo_fractions = {
  name: '⭐ Demo: fractions',
  render: renderDemo(demos.fractions),
};

export const Demo_symbol = {
  name: '⭐ Demo: symbol',
  render: renderDemo(demos.symbol),
};
