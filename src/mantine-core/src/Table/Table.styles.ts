import { createStyles, MantineNumberSize, rem, getSize } from '@mantine/styles';

export interface TableStylesParams {
  captionSide: 'top' | 'bottom';
  horizontalSpacing: MantineNumberSize;
  verticalSpacing: MantineNumberSize;
  fontSize: MantineNumberSize;
  withBorder: boolean;
  withColumnBorders: boolean;
}

export default createStyles(
  (
    theme,
    {
      captionSide,
      horizontalSpacing,
      verticalSpacing,
      fontSize,
      withBorder,
      withColumnBorders,
    }: TableStylesParams
  ) => {
    const border = `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`;

    return {
      root: {
        ...theme.fn.fontStyles(),
        width: '100%',
        borderCollapse: 'collapse',
        captionSide,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        lineHeight: theme.lineHeight,
        border: withBorder ? border : undefined,

        '& > caption': {
          marginTop: captionSide === 'top' ? 0 : theme.spacing.xs,
          marginBottom: captionSide === 'bottom' ? 0 : theme.spacing.xs,
          fontSize: theme.fontSizes.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        },

        '& > thead > tr > th, & > tfoot > tr > th, & > tbody > tr > th': {
          textAlign: 'left',
          fontWeight: 'bold',
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
          fontSize: getSize({ size: fontSize, sizes: theme.fontSizes }),
          padding: `${getSize({ size: verticalSpacing, sizes: theme.spacing })} ${getSize({
            size: horizontalSpacing,
            sizes: theme.spacing,
          })}`,
        },

        '& > thead > tr > th': {
          borderBottom: border,
        },

        '& > tfoot > tr > th, & > tbody > tr > th': {
          borderTop: border,
        },

        '& > tbody > tr > td': {
          padding: `${getSize({
            size: verticalSpacing,
            sizes: theme.spacing,
          })} ${getSize({ size: horizontalSpacing, sizes: theme.spacing })}`,
          borderTop: border,
          fontSize: getSize({ size: fontSize, sizes: theme.fontSizes }),
        },

        '& > tbody > tr:first-of-type > td, & > tbody > tr:first-of-type > th': {
          borderTop: 'none',
        },

        '& > thead > tr > th, & > tbody > tr > td': {
          borderRight: withColumnBorders ? border : 'none',

          '&:last-of-type': {
            borderRight: 'none',
            borderLeft: withColumnBorders ? border : 'none',
          },
        },

        '& > tbody > tr > th': {
          borderRight: withColumnBorders ? border : 'none',
        },

        '&[data-striped] > tbody > tr:nth-of-type(odd)': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        '&[data-hover] > tbody > tr': theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),
      },
    };
  }
);
