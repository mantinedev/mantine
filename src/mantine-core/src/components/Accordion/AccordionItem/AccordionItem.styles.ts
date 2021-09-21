import { createStyles, getFocusStyles, getFontStyles } from '@mantine/styles';

interface AccordionItemStyles {
  transitionDuration: number;
  disableIconRotation: boolean;
}

const ICON_SIZE = 24;

export default createStyles(
  (theme, { transitionDuration, disableIconRotation }: AccordionItemStyles, getRef) => {
    const icon = {
      ref: getRef('icon'),
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: theme.spacing.sm,
      width: ICON_SIZE,
      minWidth: ICON_SIZE,
      height: ICON_SIZE,
      borderRadius: ICON_SIZE,
    } as const;

    return {
      icon,

      label: {
        color: 'inherit',
        fontWeight: 500,
      },

      item: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },

      itemOpened: {
        [`& .${icon.ref}`]: {
          transform: disableIconRotation ? 'none' : 'rotate(180deg)',
        },
      },

      control: {
        ...getFocusStyles(theme),
        ...getFontStyles(theme),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: `${theme.spacing.sm}px ${theme.spacing.md / 2}px`,
        fontWeight: 500,
        textAlign: 'left',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
      },

      content: {
        ...getFontStyles(theme),
        lineHeight: theme.lineHeight,
        paddingLeft: ICON_SIZE + theme.spacing.xs / 2,
      },

      contentInner: {
        padding: theme.spacing.md,
        paddingTop: theme.spacing.xs / 2,
      },
    };
  }
);
