import {
  createStyles,
  getFontStyles,
  getFocusStyles,
  MantineSize,
  getSizeValue,
  getSharedColorScheme,
} from '@mantine/styles';

interface NavbarLinkStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: NavbarLinkStyles) => {
  const spacing = getSizeValue({ size, sizes: theme.spacing });
  const activeColors = getSharedColorScheme({ color: theme.primaryColor, theme, variant: 'light' });

  return {
    link: {
      ...getFontStyles(theme),
      ...getFocusStyles(theme),
      backgroundColor: 'transparent',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      textDecoration: 'none',
      border: 'none',
      padding: `${spacing / 1.5}px ${spacing}px`,
      cursor: 'pointer',
      borderRadius: theme.radius.sm,
      overflow: 'hidden',
      userSelect: 'none',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      },
    },

    linkActive: {
      backgroundColor: activeColors.background,
      color: activeColors.color,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: activeColors.background,
      },
    },

    linkBody: {
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    },

    linkLabel: {
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    linkIcon: {
      marginRight: theme.spacing.sm,
    },

    linkRightSection: {
      '& > svg': {
        display: 'block !important',
      },
    },
  };
});
