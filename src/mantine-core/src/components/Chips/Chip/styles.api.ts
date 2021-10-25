import { ChipStylesNames } from './Chip';

export const Chip: Record<ChipStylesNames, string> = {
  root: 'Root element',
  label: 'Chip label, includes all other elements except input',
  input: 'Chip input, hidden by default',
  disabled: 'Chip label disabled modifier',
  checked: 'Chip label checked modifier',
  iconWrapper: 'Check icon wrapper',
  checkIcon: 'Check icon, displayed when checkbox or radio is checked',
};
