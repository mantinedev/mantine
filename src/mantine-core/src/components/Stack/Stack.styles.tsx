import { createStyles, MantineNumberSize } from '@mantine/styles';

interface StackStyles {
  spacing?: MantineNumberSize;
  direction: React.CSSProperties['flexDirection'];
}

export default createStyles((theme, { direction, spacing = 'md' }: StackStyles) => {
  const formattedSpacing = theme.fn.size({ size: spacing, sizes: theme.spacing });

  return {
    root: {
      '& > *:not(:first-child)': {
        ...(direction === 'column'
          ? { marginTop: formattedSpacing }
          : { marginLeft: formattedSpacing }),
      },
      display: 'flex',
      flexDirection: direction,
    },
  };
});
