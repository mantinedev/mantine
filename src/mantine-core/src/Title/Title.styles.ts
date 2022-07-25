import { createStyles } from '@mantine/styles';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleStylesParams {
  element: HeadingElement;
  align: React.CSSProperties['textAlign'];
}

export default createStyles((theme, { element, align }: TitleStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    fontFamily: theme.headings.fontFamily,
    fontWeight: theme.headings.sizes[element].fontWeight || theme.headings.fontWeight,
    fontSize: theme.headings.sizes[element].fontSize,
    lineHeight: theme.headings.sizes[element].lineHeight,
    margin: 0,
    color: 'inherit',
    textAlign: align,
  },
}));
