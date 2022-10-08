import { createStyles, MantineColor } from '@mantine/styles';

export interface BlockquoteStylesParams {
  color: MantineColor;
}

export default createStyles((theme, { color }: BlockquoteStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.lineHeight,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    margin: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
  },

  inner: {
    display: 'flex',
  },

  body: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: {
    color: theme.fn.variant({ variant: 'filled', color }).background,
    marginRight: theme.spacing.lg,
    marginTop: 2,
    width: 22,
  },

  cite: {
    display: 'block',
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
