import { createStyles } from '@mantine/styles';

interface TableStyles {
  captionSide: 'top' | 'bottom';
}

export default createStyles((theme, { captionSide }: TableStyles, getRef) => {
  const striped = { ref: getRef('striped') };
  const hover = { ref: getRef('hover') };

  return {
    striped,
    hover,

    root: {
      ...theme.fn.fontStyles(),
      width: '100%',
      borderCollapse: 'collapse',
      captionSide,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      lineHeight: theme.lineHeight,

      '& caption': {
        marginTop: captionSide === 'top' ? 0 : theme.spacing.xs,
        marginBottom: captionSide === 'bottom' ? 0 : theme.spacing.xs,
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      },

      '& thead tr th, & tfoot tr th': {
        textAlign: 'left',
        fontWeight: 'bold',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: 14,
        padding: '7px 10px',
      },

      '& thead tr th': {
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },

      '& tfoot tr th': {
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
      },

      '& tbody tr td': {
        padding: '7px 10px',
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
        fontSize: 14,
      },

      '& tbody tr:last-of-type td': {
        borderBottom: 'none',
      },

      [`&.${striped.ref} tbody tr:nth-of-type(odd)`]: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },

      [`&.${hover.ref} tbody tr:hover`]: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      },
    },
  };
});
