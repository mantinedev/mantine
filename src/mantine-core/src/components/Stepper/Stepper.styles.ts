import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

interface StepperStyles {
  contentPadding: MantineNumberSize;
  color: MantineColor;
}

export default createStyles((theme, { contentPadding, color }: StepperStyles) => ({
  root: {},

  steps: {
    display: 'flex',
    alignItems: 'center',
  },

  separator: {
    flex: 1,
    height: 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
  },

  separatorActive: {
    backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 7 : 6),
  },

  content: {
    ...theme.fn.fontStyles(),
    paddingTop: theme.fn.size({ size: contentPadding, sizes: theme.spacing }),
  },
}));
