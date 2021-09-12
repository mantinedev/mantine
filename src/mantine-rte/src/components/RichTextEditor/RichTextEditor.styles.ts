import { createMemoStyles, MantineTheme, getFontStyles } from '@mantine/core';

interface RichTextEditorStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: ({ theme }: RichTextEditorStyles) => ({
    ...getFontStyles(theme),
    fontSize: theme.fontSizes.sm,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
    }`,
    borderRadius: theme.radius.sm,
    position: 'relative',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '& .ql-container': {
      position: 'relative',
      boxSizing: 'border-box',
      height: '100%',
      margin: 0,
      lineHeight: theme.lineHeight,
    },

    '& .ql-editor': {
      outline: 'none',
      padding: [theme.spacing.sm, theme.spacing.md],
    },

    '& .ql-container.ql-disabled .ql-tooltip': {
      display: 'none',
    },

    '& .ql-tooltip': {
      position: 'absolute',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      padding: [theme.spacing.xs, theme.spacing.md],
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
      boxShadow: theme.shadows.sm,
      borderRadius: theme.radius.sm,
      display: 'flex',
      alignItems: 'center',
    },

    '& .ql-action::before': {
      content: '"Edit"',
      cursor: 'pointer',
      display: 'block',
      height: 28,
      lineHeight: '28px',
      backgroundColor: theme.colors[theme.primaryColor][6],
      color: theme.white,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      padding: [0, theme.spacing.sm],
      marginRight: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },

    '& .ql-remove::before': {
      content: '"Remove"',
      cursor: 'pointer',
      color: theme.colors.red[theme.colorScheme === 'dark' ? 5 : 7],
      fontSize: theme.fontSizes.sm,
      display: 'block',
      height: 34,
      lineHeight: '34px',
    },

    '& .ql-hidden': {
      display: 'none',
    },

    '& .ql-preview': {
      display: 'inline-block',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: 180,
      marginRight: theme.spacing.md,
    },

    '& .ql-editing .ql-preview': {
      display: 'none',
    },

    '& .ql-editing .ql-remove': {
      display: 'none',
    },

    '& .ql-editing .ql-action::before': {
      content: '"Save"',
      marginRight: 0,
    },

    '& .ql-tooltip.ql-editing input': {
      display: 'block',
    },

    '& .ql-tooltip input': {
      display: 'none',
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      WebkitTapHighlightColor: 'transparent',
      height: 34,
      appearance: 'none',
      resize: 'none',
      boxSizing: 'border-box',
      fontSize: theme.fontSizes.sm,
      width: '100%',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      textAlign: 'left',
      paddingLeft: theme.spacing.sm,
      paddingRight: theme.spacing.sm,
      borderRadius: theme.radius.sm,
      marginRight: theme.spacing.md,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,

      '&::placeholder': {
        opacity: 1,
        userSelect: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },

      '&:focus': {
        outline: 'none',
        borderColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 5],
      },
    },

    '& .ql-clipboard': {
      display: 'none',
    },

    '& .ql-align-center': {
      textAlign: 'center',
    },

    '& .ql-align-right': {
      textAlign: 'right',
    },

    '& a': {
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],
      textDecoration: 'none',
    },

    '& h1, & h2, & h3, & h4, & h5, & h6': {
      fontFamily: theme.headings.fontFamily,
      fontWeight: theme.headings.fontWeight,
      marginTop: 0,
    },

    '& h1': {
      fontSize: theme.headings.sizes.h1.fontSize,
      marginBottom: theme.spacing.sm * (theme.headings.sizes.h1.lineHeight as number),
    },

    '& h2': {
      fontSize: theme.headings.sizes.h2.fontSize,
      marginBottom: theme.spacing.sm * (theme.headings.sizes.h2.lineHeight as number),
    },

    '& h3': {
      fontSize: theme.headings.sizes.h3.fontSize,
      marginBottom: theme.spacing.sm * (theme.headings.sizes.h3.lineHeight as number),
    },

    '& h4': {
      fontSize: theme.headings.sizes.h4.fontSize,
      marginBottom: theme.spacing.sm * (theme.headings.sizes.h4.lineHeight as number),
    },

    '& h5': {
      fontSize: theme.headings.sizes.h5.fontSize,
      marginBottom: theme.spacing.sm * (theme.headings.sizes.h5.lineHeight as number),
    },

    '& h6': {
      fontSize: theme.headings.sizes.h6.fontSize,
      marginBottom: theme.spacing.sm * (theme.headings.sizes.h6.lineHeight as number),
    },

    '& p': {
      marginTop: 0,
      marginBottom: theme.spacing.sm,
    },

    '& img': {
      display: 'block',
      position: 'relative',
      maxWidth: '100%',
      marginBottom: theme.spacing.sm,
    },

    '& .ql-image-uploading img': {
      filter: 'blur(10px)',
    },
  }),
});
