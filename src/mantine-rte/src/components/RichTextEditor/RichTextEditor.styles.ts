import { createMemoStyles, MantineTheme, getFontStyles } from '@mantine/core';

interface RichTextEditorStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: ({ theme }: RichTextEditorStyles) => ({
    ...getFontStyles(theme),
    fontSize: theme.fontSizes.sm,

    '& .ql-container': {
      position: 'relative',
      boxSizing: 'border-box',
      height: '100%',
      margin: 0,
      lineHeight: theme.lineHeight,
    },

    '& .ql-editor': {
      outline: 'none',
      padding: [theme.spacing.md, theme.spacing.sm],
    },

    '& a': {
      color: theme.colors[theme.primaryColor][7],
      textDecoration: 'none',
    },

    '& h1': {
      fontFamily: theme.headings.fontFamily,
      fontWeight: theme.headings.fontWeight,
      fontSize: theme.headings.sizes.h1.fontSize,
      marginTop: 0,
      marginBottom: theme.spacing.sm * (theme.headings.sizes.h1.lineHeight as number),
    },

    '& p': {
      marginTop: 0,
      marginBottom: theme.spacing.sm / 2,
    },
  }),
});
