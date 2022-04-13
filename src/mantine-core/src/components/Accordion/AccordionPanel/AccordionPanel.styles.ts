import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  panel: {
    ...theme.fn.fontStyles(),
    wordBreak: 'break-word',
    lineHeight: theme.lineHeight,
  },

  content: {
    padding: theme.spacing.md,
    paddingTop: theme.spacing.xs / 2,
  },
}));
