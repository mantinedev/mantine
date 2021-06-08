import useStyles from './Drawer.styles';

export const Drawer: Omit<MantineClasses<typeof useStyles>, 'noOverlay'> = {
  root: 'Root element',
  drawer: 'Drawer body element',
};
