import { createStyles } from '@mantine/styles';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleStyles {
  element: HeadingElement;
}

export default createStyles((theme, { element }: TitleStyles) => ({
  root: {
    ...theme.fn.fontStyles(),
    fontFamily: theme.headings.fontFamily,
    fontWeight: theme.headings.fontWeight,
    fontSize: theme.headings.sizes[element].fontSize,
    lineHeight: theme.headings.sizes[element].lineHeight,
    margin: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  },
}));
