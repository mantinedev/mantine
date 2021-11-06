import { createStyles, getFocusStyles } from '@mantine/styles';

export type AccordionIconPosition = 'right' | 'left';

interface AccordionItemStyles {
  transitionDuration: number;
  disableIconRotation: boolean;
  iconPosition: AccordionIconPosition;
}

const ICON_SIZE = 24;

export default createStyles(
  (
    theme,
    { transitionDuration, disableIconRotation, iconPosition }: AccordionItemStyles,
    getRef
  ) => {
    const icon = {
      ref: getRef('icon'),
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: iconPosition === 'right' ? 0 : theme.spacing.sm,
      marginLeft: iconPosition === 'right' ? theme.spacing.lg : 0,
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
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
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
        ...theme.fn.fontStyles(),
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
        padding: `${theme.spacing.sm}px ${theme.spacing.md / 2}px`,
        paddingLeft: iconPosition === 'right' ? theme.spacing.sm + 4 : null,
        fontWeight: 500,
        textAlign: 'left',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
      },

      content: {
        ...theme.fn.fontStyles(),
        lineHeight: theme.lineHeight,
        paddingLeft: iconPosition === 'right' ? 0 : ICON_SIZE + theme.spacing.xs / 2,
      },

      contentInner: {
        padding: theme.spacing.md,
        paddingTop: theme.spacing.xs / 2,
      },
    };
  }
);
