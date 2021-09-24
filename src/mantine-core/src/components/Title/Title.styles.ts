import { createStyles, getFontStyles } from '@mantine/styles';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleStyles {
  element: HeadingElement;
}

export default createStyles((theme, { element }: TitleStyles) => ({
  title: {
    ...getFontStyles(theme),
    fontFamily: theme.headings.fontFamily,
    fontWeight: theme.headings.fontWeight,
    fontSize: theme.headings.sizes[element].fontSize,
    lineHeight: theme.headings.sizes[element].lineHeight,
    margin: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '@media (max-width: 755px)': {
      fontSize:
        typeof theme.headings.sizes[element].fontSize === 'number' &&
        (theme.headings.sizes[element].fontSize as number) / 1.3,
    },
  },
}));
