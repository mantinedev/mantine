import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles, getThemeColor, getFocusStyles } from '@mantine/theme';

interface InnerHtmlStylesProps {
  theme: MantineTheme;
}

export default createUseStyles(
  {
    innerHtml: ({ theme }: InnerHtmlStylesProps) => {
      const headings = Object.keys(theme.headings.sizes).reduce((acc, h) => {
        acc[`& ${h}`] = {
          fontFamily: theme.headings.fontFamily,
          fontWeight: theme.headings.fontWeight,
          marginTop: theme.spacing.lg * theme.headings.sizes[h].lineHeight,
          marginBottom: theme.spacing.xs * theme.headings.sizes[h].lineHeight,
          ...theme.headings.sizes[h],

          '@media (max-width: 755px)': {
            fontSize:
              typeof theme.headings.sizes[h].fontSize === 'number' &&
              (theme.headings.sizes[h].fontSize as number) / 1.3,
          },
        };

        return acc;
      }, {});

      return {
        ...getFontStyles(theme),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
        fontSize: theme.fontSizes.md,

        '@media (max-width: 755px)': {
          fontSize: theme.fontSizes.sm,
        },

        ...headings,

        '& img': {
          maxWidth: '100%',
          marginBottom: theme.spacing.xs,
        },

        '& p': {
          marginTop: 0,
          marginBottom: theme.spacing.sm,
        },

        '& hr': {
          marginTop: theme.spacing.md,
          marginBottom: theme.spacing.sm,
          borderBottom: 0,
          borderLeft: 0,
          borderRight: 0,
          borderTop: `1px dashed ${theme.colors.gray[theme.colorScheme === 'dark' ? 4 : 6]}`,
        },

        '& a': {
          ...getFocusStyles(theme),
          color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
          textDecoration: 'none',

          '&:hover': {
            textDecoration: 'underline',
          },
        },

        '& pre': {
          padding: theme.spacing.xs,
          lineHeight: theme.lineHeight,
          margin: 0,
          marginTop: theme.spacing.md,
          marginBottom: theme.spacing.md,
          overflowX: 'auto',
          fontFamily: theme.fontFamilyMonospace,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
        },

        '& code': {
          lineHeight: theme.lineHeight,
          padding: [1, theme.spacing.xs / 2],
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
          fontFamily: theme.fontFamilyMonospace,
          fontSize: theme.fontSizes.xs,
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
          }`,
        },

        '& ul, & ol': {
          marginBottom: theme.spacing.md,
          paddingLeft: theme.spacing.lg * 2,

          '& li': {
            marginTop: theme.spacing.xs,
          },
        },

        '& table': {
          width: '100%',
          borderCollapse: 'collapse',
          captionSide: 'bottom',
          marginBottom: theme.spacing.md,

          '& > caption': {
            marginTop: theme.spacing.xs,
            fontSize: theme.fontSizes.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
          },

          '& th': {
            textAlign: 'left',
            fontWeight: 'bold',
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
            fontSize: 14,
            padding: [7, 10],
          },

          '& thead th': {
            borderBottom: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
          },

          '& tfoot th': {
            borderTop: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
          },

          '& td': {
            padding: [7, 10],
            borderBottom: `1px solid ${
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
            fontSize: 14,
          },

          '& tr:last-of-type td': {
            borderBottom: 'none',
          },
        },

        '& blockquote': {
          fontSize: theme.fontSizes.lg,
          lineHeight: theme.lineHeight,
          margin: [theme.spacing.md, 0],
          borderTopRightRadius: theme.radius.sm,
          borderBottomRightRadius: theme.radius.sm,
          padding: [theme.spacing.md, theme.spacing.lg],
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          borderLeft: `3px solid ${getThemeColor({
            theme,
            color: theme.primaryColor,
            shade: theme.colorScheme === 'dark' ? 4 : 6,
          })}`,

          '& cite': {
            display: 'block',
            fontSize: theme.fontSizes.sm,
            marginTop: theme.spacing.xs,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
      };
    },
  },
  { link: true }
);
