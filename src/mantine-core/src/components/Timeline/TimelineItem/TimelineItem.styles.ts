import { createMemoStyles, getThemeColor, MantineTheme, MantineColor } from '../../../theme';

interface TimelineItemStyles {
  theme: MantineTheme;
  bulletSize: number;
  color: MantineColor;
  align: 'right' | 'left';
  lineVariant: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
}

export default createMemoStyles({
  itemBody: {},
  itemContent: {},

  item: ({ theme, align, lineVariant, lineWidth }: TimelineItemStyles) => ({
    position: 'relative',
    boxSizing: 'border-box',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    paddingLeft: align === 'left' ? theme.spacing.xl : 0,
    paddingRight: align === 'right' ? theme.spacing.xl : 0,
    textAlign: align,

    '&:not(:last-of-type)::before': {
      display: 'block',
    },

    '&:not(:first-of-type)': {
      marginTop: theme.spacing.xl,
    },

    '&::before': {
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      left: align === 'left' ? -lineWidth : 'auto',
      right: align === 'right' ? -lineWidth : 'auto',
      bottom: -theme.spacing.xl,
      borderLeft: `${lineWidth}px ${lineVariant} ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      content: '""',
      display: 'none',
    },
  }),

  itemLineActive: ({ theme, color }: TimelineItemStyles) => ({
    '&::before': {
      borderLeftColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'light' ? 6 : 7,
      }),
    },
  }),

  itemActive: ({ theme, color }: TimelineItemStyles) => ({
    '& $itemBullet': {
      borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'light' ? 6 : 7 }),
      backgroundColor: theme.white,
    },

    '& $itemBulletWithChild': {
      backgroundColor: getThemeColor({
        theme,
        color,
        shade: theme.colorScheme === 'light' ? 6 : 7,
      }),
      color: theme.white,
    },
  }),

  itemBullet: ({ theme, bulletSize, align, lineWidth }: TimelineItemStyles) => ({
    boxSizing: 'border-box',
    width: bulletSize,
    height: bulletSize,
    borderRadius: bulletSize,
    border: `${lineWidth}px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    position: 'absolute',
    top: 0,
    left: align === 'left' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
    right: align === 'right' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
  }),

  itemBulletWithChild: ({ theme }: TimelineItemStyles) => ({
    borderWidth: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  }),

  itemTitle: ({ theme, align }: TimelineItemStyles) => ({
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: theme.spacing.xs / 2,
    textAlign: align,
  }),
});
