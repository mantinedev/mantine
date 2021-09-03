import { createMemoStyles, getThemeColor, MantineTheme } from '../../../theme';

interface TimelineItemStyles {
  theme: MantineTheme;
  bulletSize: number;
  color: string;
  align: 'right' | 'left';
}

export default createMemoStyles({
  itemBody: {},
  itemContent: {},

  item: ({ theme, align }: TimelineItemStyles) => ({
    position: 'relative',
    boxSizing: 'border-box',
    color: theme.colors.gray[7],
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
      position: 'absolute',
      top: 0,
      left: align === 'left' ? -4 : 'auto',
      right: align === 'right' ? -4 : 'auto',
      bottom: -theme.spacing.xl,
      width: 4,
      backgroundColor: theme.colors.gray[3],
      content: '""',
      display: 'none',
    },
  }),

  itemLineActive: ({ theme, color }: TimelineItemStyles) => ({
    '&::before': {
      backgroundColor: getThemeColor({ theme, color, shade: 6 }),
    },
  }),

  itemActive: ({ theme, color }: TimelineItemStyles) => ({
    '& $itemBullet': {
      borderColor: getThemeColor({ theme, color, shade: 6 }),
    },
  }),

  itemBullet: ({ theme, bulletSize, align }: TimelineItemStyles) => ({
    boxSizing: 'border-box',
    width: bulletSize,
    height: bulletSize,
    borderRadius: bulletSize,
    border: `4px solid ${theme.colors.gray[3]}`,
    backgroundColor: theme.white,
    position: 'absolute',
    top: 0,
    left: align === 'left' ? -bulletSize / 2 - 2 : 'auto',
    right: align === 'right' ? -bulletSize / 2 - 2 : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
  }),

  itemBulletWithChild: ({ theme, color }: TimelineItemStyles) => ({
    borderWidth: 1,
    backgroundColor: getThemeColor({ theme, color, shade: 6 }),
  }),

  itemTitle: ({ theme, align }: TimelineItemStyles) => ({
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: theme.spacing.xs / 2,
    textAlign: align,
  }),
});
