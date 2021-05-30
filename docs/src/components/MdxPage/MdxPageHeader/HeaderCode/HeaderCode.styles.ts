import { createUseStyles } from 'react-jss';
import { theming, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',

      '& + &': {
        marginTop: 5,
      },
    },

    icon: {
      marginRight: theme.spacing.sm,
      marginTop: 1,
    },

    code: {
      marginBottom: 0,
      cursor: 'pointer',
      paddingLeft: 0,
      marginLeft: 0,
    },

    copy: {
      ...getFocusStyles(theme),
      padding: 0,
      border: 0,
      appearance: 'none',
      backgroundColor: 'transparent',
    },
  }),
  { theming }
);
