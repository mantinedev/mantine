import useStyles from './Input.styles';
import { InputVariant } from './Input';

export const Input: Omit<MantineClasses<typeof useStyles>, InputVariant> = {
  root: 'Root element',
  icon: 'Input icon wrapper on the left side of the input, controlled by icon prop',
  withIcon: 'Input element styles when used with icon, controlled by icon prop',
  input: 'Main input element',
  invalid: 'Invalid input modified',
  rightSection: 'Input right section, controlled by rightSection prop',
};
