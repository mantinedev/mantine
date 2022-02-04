import { createStyles, MantineNumberSize } from '@mantine/styles';

export interface GridStylesParams {
  gutter: MantineNumberSize;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignContent'];
}

export default createStyles((theme, { justify, align, gutter }: GridStylesParams) => ({
  root: {
    margin: -theme.fn.size({ size: gutter, sizes: theme.spacing }) / 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
  },
}));
