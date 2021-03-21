import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/theme';

interface InnerHtmlStylesProps {
  theme: MantineTheme;
}

export default createUseStyles({
  innerHtml: ({ theme }: InnerHtmlStylesProps) => {
    const headings = Object.keys(theme.headings.sizes).reduce((acc, h) => {
      acc[`& ${h}`] = {
        fontFamily: theme.headings.fontFamily,
        fontWeight: theme.headings.fontWeight,
        marginTop: theme.spacing.md * theme.headings.sizes[h].lineHeight,
        marginBottom: theme.spacing.sm * theme.headings.sizes[h].lineHeight,
        ...theme.headings.sizes[h],
      };

      return acc;
    }, {});

    return {
      ...getFontStyles(theme),
      lineHeight: theme.lineHeight,

      ...headings,

      '& img': {
        maxWidth: '100%',
      },

      '& p': {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm,
      },

      '& hr': {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: `1px solid ${theme.colors.gray[5]}`,
      },

      '& a': {
        color: theme.colors[theme.primaryColor][6],
        textDecoration: 'none',

        '&:hover': {
          textDecoration: 'underline',
        },
      },

      '& ul, & ol': {
        marginTop: theme.spacing.sm,
        paddingLeft: theme.spacing.lg * 2,

        '& li': {
          marginTop: theme.spacing.xs / 2,
        },
      },

      '& table': {
        width: '100%',
        borderCollapse: 'collapse',

        '& caption': {
          fontWeight: 700,
          marginBottom: theme.spacing.xs,
        },

        '& th': {
          textAlign: 'left',
          fontWeight: 'bold',
          color: theme.colors.gray[7],
          fontSize: 14,
          padding: [7, 10],
          borderBottom: `1px solid ${theme.colors.gray[3]}`,
        },

        '& td': {
          padding: [7, 10],
          borderBottom: `1px solid ${theme.colors.gray[3]}`,
          fontSize: 14,
        },

        '& tr:last-of-type > td': {
          borderBottom: 'none',
        },
      },

      '& blockquote': {
        fontSize: theme.fontSizes.lg,
        lineHeight: theme.lineHeight,
        backgroundColor: theme.colors.gray[0],
        margin: [theme.spacing.md, 0],
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        borderLeft: `3px solid ${theme.colors[theme.primaryColor][6]}`,
        padding: [theme.spacing.md, theme.spacing.lg],

        '& cite': {
          display: 'block',
          fontSize: theme.fontSizes.sm,
          marginTop: theme.spacing.xs,
          color: theme.colors.gray[6],
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    };
  },
});
