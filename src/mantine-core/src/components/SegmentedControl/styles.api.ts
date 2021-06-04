import useStyles from './SegmentedControl.styles';

export const SegmentedControl: MantineClasses<typeof useStyles> = {
  root: 'Root element',
  label: 'Input label element',
  labelActive: 'Label of active element',
  input: 'Radio input (visually hidden)',
  control: 'Control wrapper, contains input and label',
  controlActive: 'Active control wrapper',
  active: 'Element which indicates current active item, positioned below controls',
};
