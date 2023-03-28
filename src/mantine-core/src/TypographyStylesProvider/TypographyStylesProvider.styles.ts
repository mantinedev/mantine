import { createStyles, rem } from '@mantine/styles';
import { keys } from '@mantine/utils';

export default createStyles((theme) => {
  const headings = keys(theme.headings.sizes).reduce((acc, h) => {
    const values = theme.headings.sizes[h];
    acc[`& ${h}`] = {
      fontFamily: theme.headings.fontFamily,
      fontWeight: values.fontWeight || theme.headings.fontWeight,
      marginTop:
        typeof values.lineHeight === 'number'
          ? `calc(${theme.spacing.xl} * ${values.lineHeight})`
          : theme.spacing.xl,
      marginBottom: theme.spacing.sm,
      ...values,

      [theme.fn.smallerThan('sm')]: {
        fontSize: `calc(${rem(values.fontSize)} / 1.3)`,
      },
    };

    return acc;
  }, {});

  return {
    root: {
      ...theme.fn.fontStyles(),
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,
      fontSize: theme.fontSizes.md,

      [theme.fn.smallerThan('sm')]: {
        fontSize: theme.fontSizes.sm,
      },

      ...headings,

      '& img': {
        maxWidth: '100%',
        marginBottom: theme.spacing.xs,
      },

      '& p': {
        marginTop: 0,
        marginBottom: theme.spacing.lg,
      },

      '& mark': {
        backgroundColor: theme.fn.themeColor('yellow', theme.colorScheme === 'dark' ? 5 : 2),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
      },

      '& hr': {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: `${rem(1)} dashed ${theme.colors.gray[theme.colorScheme === 'dark' ? 4 : 6]}`,
      },

      '& a': {
        ...theme.fn.focusStyles(),
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
        fontSize: theme.fontSizes.sm,
        borderRadius: theme.radius.sm,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],

        '& code': {
          backgroundColor: 'transparent',
          padding: 0,
          borderRadius: 0,
          color: 'inherit',
          border: 0,
        },
      },

      '& code': {
        lineHeight: theme.lineHeight,
        padding: `${rem(1)} ${rem(5)}`,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
        fontFamily: theme.fontFamilyMonospace,
        fontSize: theme.fontSizes.xs,
        border: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[3]
        }`,
      },

      '& ul, & ol': {
        marginBottom: theme.spacing.md,
        paddingLeft: 38,

        '& li': {
          marginTop: theme.spacing.xs,
        },
      },

      '& table': {
        width: '100%',
        borderCollapse: 'collapse',
        captionSide: 'bottom',
        marginBottom: theme.spacing.md,

        '& caption': {
          marginTop: theme.spacing.xs,
          fontSize: theme.fontSizes.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        },

        '& th': {
          textAlign: 'left',
          fontWeight: 'bold',
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
          fontSize: 14,
          padding: `${rem(7)} ${rem(10)}`,
        },

        '& thead th': {
          borderBottom: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },

        '& tfoot th': {
          borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
        },

        '& td': {
          padding: `${rem(7)} ${rem(10)}`,
          borderBottom: `${rem(1)} solid ${
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
        margin: `${theme.spacing.md} 0`,
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        borderLeft: `${rem(6)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,

        '& cite': {
          display: 'block',
          fontSize: theme.fontSizes.sm,
          marginTop: theme.spacing.xs,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
  };
});
