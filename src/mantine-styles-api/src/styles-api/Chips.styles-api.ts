import { ChipStylesNames } from '@mantine/core';

export const Chip: Record<ChipStylesNames, string> = {
  root: 'Root element',
  label: 'Chip label, includes all other elements except input',
  outline: 'Outline chip modifier, added to label',
  filled: 'Filled chip modifier, added to label',
  input: 'Chip input, hidden by default',
  disabled: 'Chip label disabled modifier',
  checked: 'Chip label checked modifier',
  iconWrapper: 'Check icon wrapper',
  checkIcon: 'Check icon, displayed when checkbox or radio is checked',
};

const { root, ...otherNames } = Chip;

export const Chips: Record<Exclude<ChipStylesNames, 'root'>, string> = otherNames;
