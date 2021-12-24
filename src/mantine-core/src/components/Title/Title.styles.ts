import { createStyles } from '@mantine/styles';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleStyles {
  element: HeadingElement;
  align: 'right' | 'left' | 'center' | 'justify';
}

export default createStyles((theme, { element, align }: TitleStyles) => ({
  root: {
    ...theme.fn.fontStyles(),
    fontFamily: theme.headings.fontFamily,
    fontWeight: theme.headings.fontWeight,
    fontSize: theme.headings.sizes[element].fontSize,
    lineHeight: theme.headings.sizes[element].lineHeight,
    margin: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    textAlign: align,
  },
}));
