import { createStyles, MantineNumberSize, MantineColor } from '@mantine/styles';

interface StepperStyles {
  contentPadding: MantineNumberSize;
  color: MantineColor;
  orientation?: 'vertical' | 'horizontal';
}

export default createStyles((theme, { contentPadding, color, orientation }: StepperStyles) => ({
  root: {},

  steps: {
    display: 'flex',
    flexDirection: orientation === 'horizontal' ? 'row' : 'column',
    alignItems: orientation === 'horizontal' ? 'center' : 'flex-start',
  },

  separator: {
    flex: 1,
    height: 2,
    minHeight: orientation === 'vertical' ? theme.spacing.xl : undefined,
    width: orientation === 'vertical' ? 2 : undefined,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    marginLeft: orientation === 'horizontal' ? theme.spacing.md : 19,
    marginRight: orientation === 'horizontal' ? theme.spacing.md : 0,
    marginTop: orientation === 'vertical' ? theme.spacing.xs : 0,
    marginBottom: orientation === 'vertical' ? theme.spacing.xs : 0,
  },

  separatorActive: {
    backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 7 : 6),
  },

  content: {
    ...theme.fn.fontStyles(),
    paddingTop: theme.fn.size({ size: contentPadding, sizes: theme.spacing }),
  },
}));
