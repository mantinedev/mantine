import { createStyles, MantineNumberSize } from '@mantine/core';

export interface RichTextEditorStylesParams {
  saveLabel: string;
  editLabel: string;
  removeLabel: string;
  radius: MantineNumberSize;
  readOnly: boolean;
}

export default createStyles(
  (theme, { saveLabel, removeLabel, editLabel, radius, readOnly }: RichTextEditorStylesParams) => ({
    toolbar: {
      display: readOnly ? 'none' : undefined,
    },

    root: {
      ...theme.fn.fontStyles(),
      fontSize: theme.fontSizes.sm,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      borderRadius: theme.fn.radius(radius),
      position: 'relative',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '& .ql-toolbar': {
        borderTopRightRadius: theme.fn.radius(radius),
        borderTopLeftRadius: theme.fn.radius(radius),
      },

      '& .ql-container': {
        position: 'relative',
        boxSizing: 'border-box',
        height: '100%',
        margin: 0,
        lineHeight: theme.lineHeight,
      },

      '& .ql-editor': {
        whiteSpace: 'pre-wrap',
        outline: 'none',
        padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
      },

      '& .ql-container.ql-disabled .ql-tooltip': {
        display: 'none',
      },

      '& .ql-tooltip': {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
        boxShadow: theme.shadows.sm,
        borderRadius: theme.radius.sm,
        display: 'flex',
        alignItems: 'center',
      },

      '& .ql-action::before': {
        content: `"${editLabel}"`,
        cursor: 'pointer',
        display: 'block',
        whiteSpace: 'nowrap',
        height: 32,
        lineHeight: '32px',
        backgroundColor: theme.fn.variant({ variant: 'filled' }).background,
        color: theme.white,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        padding: `0 ${theme.spacing.md}px`,
        marginRight: theme.spacing.sm,
        fontSize: theme.fontSizes.sm,
      },

      '& .ql-remove::before': {
        content: `"${removeLabel}"`,
        cursor: 'pointer',
        color: theme.colors.red[theme.colorScheme === 'dark' ? 5 : 7],
        fontSize: theme.fontSizes.sm,
        display: 'block',
        height: 32,
        lineHeight: '32px',
      },

      '& .ql-hidden': {
        display: 'none',
      },

      '& .ql-preview': {
        display: 'inline-block',
        whiteSpace: 'nowrap',
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
        content: `"${saveLabel}"`,
        marginRight: 0,
      },

      '& .ql-tooltip.ql-editing input': {
        display: 'block',
      },

      '& .ql-tooltip input': {
        display: 'none',
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
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

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
        left: '-100000px',
        height: '1px',
        overflowY: 'hidden',
        position: 'fixed',
        top: '50%',
      },

      '& .ql-align-center': {
        textAlign: 'center',
      },

      '& .ql-align-right': {
        textAlign: 'right',
      },

      '& .ql-mention-list-container': {
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4]
        }`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        borderRadius: theme.radius.sm,
        overflow: 'hidden',

        '& .ql-mention-list': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
          paddingLeft: 0,
          marginTop: 0,
          margin: 0,
          listStyleType: 'none',

          '& .ql-mention-list-item': {
            padding: theme.spacing.xs,
            textDecoration: 'none',
            cursor: 'pointer',
          },

          '& .selected': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
          },
        },
      },

      '& .mention': {
        display: 'inline-block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors[theme.primaryColor][0],
        padding: '3px 5px',
        marginRight: 2,
        borderRadius: theme.radius.sm,
        userSelect: 'all',
        pointerEvents: 'none',
      },

      '& iframe.ql-video': {
        width: '100%',
        height: 400,

        '@media (max-width: 755px)': {
          height: 220,
        },
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

      '& ol, & ul': {
        marginTop: theme.spacing.sm,
        paddingLeft: `calc(${theme.spacing.md}px * 2)`,
        listStylePosition: 'outside',
      },

      '& h1': {
        fontSize: theme.headings.sizes.h1.fontSize,
        marginBottom: `calc(${theme.spacing.sm}px * ${theme.headings.sizes.h1.lineHeight})`,
      },

      '& h2': {
        fontSize: theme.headings.sizes.h2.fontSize,
        marginBottom: `calc(${theme.spacing.sm}px * ${theme.headings.sizes.h2.lineHeight})`,
      },

      '& h3': {
        fontSize: theme.headings.sizes.h3.fontSize,
        marginBottom: `calc(${theme.spacing.sm}px * ${theme.headings.sizes.h3.lineHeight})`,
      },

      '& h4': {
        fontSize: theme.headings.sizes.h4.fontSize,
        marginBottom: `calc(${theme.spacing.sm}px * ${theme.headings.sizes.h4.lineHeight})`,
      },

      '& h5': {
        fontSize: theme.headings.sizes.h5.fontSize,
        marginBottom: `calc(${theme.spacing.sm}px * ${theme.headings.sizes.h5.lineHeight})`,
      },

      '& h6': {
        fontSize: theme.headings.sizes.h6.fontSize,
        marginBottom: `calc(${theme.spacing.sm}px * ${theme.headings.sizes.h6.lineHeight})`,
      },

      '& p': {
        marginTop: 0,
        marginBottom: theme.spacing.sm,
      },

      '& pre': {
        ...theme.fn.fontStyles(),
        lineHeight: theme.lineHeight,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: theme.fn.rgba(
          theme.fn.themeColor('gray', theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
        fontFamily: theme.fontFamilyMonospace,
        fontSize: theme.fontSizes.xs,
        padding: theme.spacing.xs,
        margin: 0,
        overflowX: 'auto',
      },

      '& code': {
        ...theme.fn.fontStyles(),
        lineHeight: theme.lineHeight,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: theme.fn.rgba(
          theme.fn.themeColor('gray', theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
        fontFamily: theme.fontFamilyMonospace,
        fontSize: theme.fontSizes.xs,
        padding: `2px calc(${theme.spacing.xs}px / 2)`,
      },

      '& blockquote': {
        marginTop: 0,
        marginLeft: 0,
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
        borderLeft: `4px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
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

      '& .ql-blank': {
        '&::before': {
          content: 'attr(data-placeholder)',
          position: 'absolute',
          left: theme.spacing.md,
          right: theme.spacing.md,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        },
      },
    },
  })
);
