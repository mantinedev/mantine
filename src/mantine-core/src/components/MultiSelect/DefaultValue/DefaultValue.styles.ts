import { createMemoStyles, MantineTheme } from '../../../theme';

interface DefaultLabelStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  defaultLabel: ({ theme }: DefaultLabelStyles) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors[theme.primaryColor][1],
    color: theme.colors[theme.primaryColor][9],
    lineHeight: 1,
    padding: [0, theme.spacing.xs],
    height: 22,
    paddingRight: 0,
    fontWeight: 500,
    fontSize: theme.fontSizes.xs,
    borderRadius: theme.radius.sm,
    cursor: 'default',
    userSelect: 'none',
  }),

  defaultLabelRemove: ({ theme }: DefaultLabelStyles) => ({
    color: theme.colors[theme.primaryColor][9],
  }),
});
