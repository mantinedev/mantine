import useStyles from './Button.styles';
import { ButtonVariant } from './Button';

export const Button: Omit<MantineClasses<typeof useStyles>, ButtonVariant> = {
  root: 'Root button element',
  icon: 'Shared icon styles',
  leftIcon: 'Left icon',
  rightIcon: 'Right icon',
  inner: 'Contains label, left and right icons',
  label: 'Contains button children',
};
