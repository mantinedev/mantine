import { createStyles } from '@mantine/styles';

export type AccordionChevronPosition = 'right' | 'left';

export interface AccordionStylesParams {
  transitionDuration: number;
  chevronPosition: AccordionChevronPosition;
  chevronSize: number;
}

export default createStyles(
  (theme, { transitionDuration, chevronPosition, chevronSize }: AccordionStylesParams) => ({
    chevron: {
      transition: `transform ${transitionDuration}ms ease`,
      marginRight: chevronPosition === 'right' ? 0 : theme.spacing.sm,
      marginLeft: chevronPosition === 'right' ? theme.spacing.lg : 0,
      width: chevronSize,
      minWidth: chevronSize,

      '&[data-rotate="true"]': {
        transform: 'rotate(180deg)',
      },
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

    itemOpened: {},

    itemTitle: {
      margin: 0,
      padding: 0,
      fontWeight: 'normal',
    },

    control: {
      ...theme.fn.focusStyles(),
      ...theme.fn.fontStyles(),
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: chevronPosition === 'right' ? 'row-reverse' : 'row',
      padding: `${theme.spacing.md}px ${theme.spacing.md / 2}px`,
      paddingLeft: chevronPosition === 'right' ? theme.spacing.sm + 4 : null,
      fontWeight: 500,
      textAlign: 'left',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },

      '&:disabled': {
        opacity: 0.4,
        cursor: 'not-allowed',

        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },

    content: {
      ...theme.fn.fontStyles(),
      wordBreak: 'break-word',
      lineHeight: theme.lineHeight,
    },

    contentInner: {
      padding: theme.spacing.md,
      paddingTop: theme.spacing.xs / 2,
    },
  })
);
