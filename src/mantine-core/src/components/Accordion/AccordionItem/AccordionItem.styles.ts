import { createStyles } from '@mantine/styles';

export type AccordionIconPosition = 'right' | 'left';

export interface AccordionStylesParams {
  transitionDuration: number;
  disableIconRotation: boolean;
  iconPosition: AccordionIconPosition;
  offsetIcon: boolean;
  iconSize: number;
}

export default createStyles(
  (
    theme,
    {
      transitionDuration,
      disableIconRotation,
      iconPosition,
      offsetIcon,
      iconSize,
    }: AccordionStylesParams,
    getRef
  ) => ({
    icon: {
      ref: getRef('icon'),
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: iconPosition === 'right' ? 0 : theme.spacing.sm,
      marginLeft: iconPosition === 'right' ? theme.spacing.lg : 0,
      width: iconSize,
      minWidth: iconSize,
    },

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
      [`& > .${getRef('itemTitle')} > .${getRef('control')} .${getRef('icon')}`]: {
        transform: disableIconRotation ? 'none' : 'rotate(180deg)',
      },
    },

    itemTitle: {
      ref: getRef('itemTitle'),
      margin: 0,
      padding: 0,
      fontWeight: 'normal',
    },

    control: {
      ...theme.fn.focusStyles(),
      ...theme.fn.fontStyles(),
      ref: getRef('control'),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
      padding: `${theme.spacing.md}px ${theme.spacing.md / 2}px`,
      paddingLeft: iconPosition === 'right' ? theme.spacing.sm + 4 : null,
      fontWeight: 500,
      textAlign: 'left',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      }),
    },

    content: {
      ...theme.fn.fontStyles(),
      wordBreak: 'break-word',
      lineHeight: theme.lineHeight,
      paddingLeft: iconPosition === 'right' ? 0 : offsetIcon ? iconSize + theme.spacing.xs / 2 : 0,
    },

    contentInner: {
      padding: theme.spacing.md,
      paddingTop: theme.spacing.xs / 2,
    },
  })
);
