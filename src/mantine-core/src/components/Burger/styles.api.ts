import useStyles from './Burger.styles';

export const Burger: Omit<MantineClasses<typeof useStyles>, 'opened'> = {
  root: 'Root button element',
  burger: 'Burger icon',
};
