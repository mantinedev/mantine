import { createStyles, MantineNumberSize, getSize } from '@mantine/styles';

export interface StackStylesParams {
  spacing: MantineNumberSize;
  align: React.CSSProperties['alignItems'];
  justify: React.CSSProperties['justifyContent'];
}

export default createStyles((theme, { spacing, align, justify }: StackStylesParams) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: align,
    justifyContent: justify,
    gap: getSize({ size: spacing, sizes: theme.spacing }),
  },
}));
