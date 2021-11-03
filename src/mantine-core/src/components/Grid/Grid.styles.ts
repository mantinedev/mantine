import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

interface GridStyles {
  gutter: MantineNumberSize;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignContent'];
}

export default createStyles((theme, { justify, align, gutter }: GridStyles) => ({
  root: {
    margin: -getSizeValue({ size: gutter, sizes: theme.spacing }) / 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
  },
}));
