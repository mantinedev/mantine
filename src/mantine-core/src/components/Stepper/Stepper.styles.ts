import { createStyles, MantineNumberSize } from '@mantine/styles';

interface StepperStyles {
  contentPadding: MantineNumberSize;
}

export default createStyles((theme, { contentPadding }: StepperStyles) => ({
  root: {},

  steps: {
    alignItems: 'center',
  },

  separator: {
    flex: 1,
    height: 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
  },

  content: {
    ...theme.fn.fontStyles(),
    paddingTop: theme.fn.size({ size: contentPadding, sizes: theme.spacing }),
  },
}));
