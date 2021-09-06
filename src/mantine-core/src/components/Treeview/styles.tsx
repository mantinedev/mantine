import { createUseStyles } from 'react-jss';
import { theming } from '../../theme';

export const useTreeStyles = createUseStyles(
  {
    item: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      paddingTop: 3,
      paddingBottom: 3,
      paddingRight: '.5rem',
      gap: 2,
      minHeight: 28,
    },
    title: { display: 'block', width: '100%' },
    selected: {
      backgroundColor: 'rgba(92, 95, 102, 0.35)',
    },
    highlighted: {
      backgroundColor: 'rgba(92, 95, 92, 0.15)',
    },
  },
  { theming },
);
