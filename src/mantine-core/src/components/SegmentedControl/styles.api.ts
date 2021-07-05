import { SegmentedControlStylesNames } from './SegmentedControl';

export const SegmentedControl: Record<SegmentedControlStylesNames, string> = {
  root: 'Root element',
  label: 'Input label element',
  labelActive: 'Label of active element',
  input: 'Radio input (visually hidden)',
  control: 'Control wrapper, contains input and label',
  controlActive: 'Active control wrapper',
  active: 'Element which indicates current active item, positioned below controls',
};
