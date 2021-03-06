import { createUseStyles } from 'react-jss';
import { getFontStyles, MantineTheme } from '@mantine/theme';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export default createUseStyles({
  title: ({ theme, element }: { theme: MantineTheme; element: HeadingElement }) => ({
    ...getFontStyles(theme),
    fontFamily: theme.headings.fontFamily,
    fontWeight: theme.headings.fontWeight,
    fontSize: theme.headings.sizes[element].fontSize,
    lineHeight: theme.headings.sizes[element].lineHeight,
    margin: 0,
  }),
});
