import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, getFontStyles, getFocusStyles } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    tagEdit: {
      paddingTop: 10,
      paddingBottom: 10,
      position: 'absolute',
      top: 0,
      width: 240,
      left: 240,
      zIndex: 5,
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },

    input: {
      flex: 1,
      marginRight: 10,
    },

    deleteControl: {
      ...getFontStyles(theme),
      border: 0,
      width: '100%',
      backgroundColor: 'transparent',
      textAlign: 'left',
      height: 32,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      cursor: 'pointer',
      marginTop: 10,
      outline: 0,

      '&:hover, &:focus': {
        backgroundColor: theme.colors.red[0],
        color: theme.colors.red[7],
      },
    },

    deleteIcon: {
      marginRight: 10,
    },

    colorsList: {
      marginTop: 5,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
      paddingTop: 10,
    },

    colorControl: {
      ...getFontStyles(theme),
      ...getFocusStyles(theme),
      textTransform: 'capitalize',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: '1px dotted transparent',
      paddingLeft: 10,
      paddingRight: 10,
      height: 28,
      cursor: 'pointer',
      outline: 0,

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
      },
    },

    colorLabel: {
      marginLeft: 10,
    },

    colorControlBody: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },
  }),
  { theming }
);
