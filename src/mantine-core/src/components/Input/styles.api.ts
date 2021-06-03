import useStyles from './Input.styles';

export const Input: MantineClasses<typeof useStyles> = {
  root: 'Root element',
  icon: 'Input icon wrapper on the left side of the input, controlled by icon prop',
  withIcon: 'Input element styles when used with icon, controlled by icon prop',
  default: 'Default input variant',
  filled: 'Filled input variant',
  unstyled: 'Unstyled input variant',
  input: 'Main input element',
  invalid: 'Invalid input modified',
  rightSection: 'Input right section, controlled by rightSection prop',
};
