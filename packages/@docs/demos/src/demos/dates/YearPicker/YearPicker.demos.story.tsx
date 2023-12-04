import * as demos from './index';
import { renderDemo } from '../../../render-demo';

export default { title: 'YearPicker' };

export const DemoUsage = {
  name: '⭐ Demo: usage',
  render: renderDemo(demos.usage),
};

export const DemoMultiple = {
  name: '⭐ Demo: multiple',
  render: renderDemo(demos.multiple),
};

export const DemoDeselect = {
  name: '⭐ Demo: deselect',
  render: renderDemo(demos.deselect),
};

export const DemoRange = {
  name: '⭐ Demo: range',
  render: renderDemo(demos.range),
};

export const DemoSingleRange = {
  name: '⭐ Demo: singleRange',
  render: renderDemo(demos.singleRange),
};

export const DemoNumberOfColumns = {
  name: '⭐ Demo: numberOfColumns',
  render: renderDemo(demos.numberOfColumns),
};

export const DemoSizeConfigurator = {
  name: '⭐ Demo: sizeConfigurator',
  render: renderDemo(demos.sizeConfigurator),
};

export const DemoMinMax = {
  name: '⭐ Demo: minMax',
  render: renderDemo(demos.minMax),
};

export const DemoControlProps = {
  name: '⭐ Demo: controlProps',
  render: renderDemo(demos.controlProps),
};

export const DemoYearsListFormat = {
  name: '⭐ Demo: yearsListFormat',
  render: renderDemo(demos.yearsListFormat),
};

export const DemoDecadeLabelFormat = {
  name: '⭐ Demo: decadeLabelFormat',
  render: renderDemo(demos.decadeLabelFormat),
};

export const DemoDefaultDate = {
  name: '⭐ Demo: defaultDate',
  render: renderDemo(demos.defaultDate),
};

export const DemoControlledDate = {
  name: '⭐ Demo: controlledDate',
  render: renderDemo(demos.controlledDate),
};
