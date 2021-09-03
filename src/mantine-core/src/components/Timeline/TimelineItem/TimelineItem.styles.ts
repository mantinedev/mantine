import { createMemoStyles, MantineTheme } from '../../../theme';

interface TimelineItemStyles {
  theme: MantineTheme;
  bulletSize: number;
}

export default createMemoStyles({
  item: ({ theme }: TimelineItemStyles) => ({
    position: 'relative',
    boxSizing: 'border-box',
    color: theme.colors.gray[7],
    paddingLeft: theme.spacing.xl,

    '&:not(:last-of-type)::before': {
      display: 'block',
    },

    '&:not(:first-of-type)': {
      marginTop: theme.spacing.xl,
    },

    '&::before': {
      position: 'absolute',
      top: 0,
      left: -4,
      bottom: -theme.spacing.xl,
      width: 4,
      backgroundColor: theme.colors.gray[3],
      content: '""',
      display: 'none',
    },
  }),

  itemBullet: ({ theme, bulletSize }: TimelineItemStyles) => ({
    boxSizing: 'border-box',
    width: bulletSize,
    height: bulletSize,
    borderRadius: bulletSize,
    border: `4px solid ${theme.colors.gray[3]}`,
    backgroundColor: theme.white,
    position: 'absolute',
    top: 0,
    left: -bulletSize / 2 - 2,
  }),

  itemTitle: ({ theme }: TimelineItemStyles) => ({
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: theme.spacing.xs / 2,
  }),
});
