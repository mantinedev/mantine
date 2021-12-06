import { createStyles, MantineNumberSize } from '@mantine/styles';

interface GridStyles {
  gutter: MantineNumberSize;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignContent'];
}

export default createStyles((theme, { justify, align, gutter }: GridStyles) => ({
  root: {
    margin: -theme.fn.size({ size: gutter, sizes: theme.spacing }) / 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
  },
}));
