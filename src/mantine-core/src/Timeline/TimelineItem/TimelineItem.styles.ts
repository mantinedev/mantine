import { createStyles, MantineColor, MantineNumberSize, rem } from '@mantine/styles';

interface TimelineItemStyles {
  bulletSize: number;
  color: MantineColor;
  radius: MantineNumberSize;
  align: 'right' | 'left';
  lineVariant: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
}

export default createStyles(
  (theme, { bulletSize, color, radius, align, lineVariant, lineWidth }: TimelineItemStyles) => {
    const colors = theme.fn.variant({ variant: 'filled', color });
    const _bulletSize = rem(bulletSize);
    const _lineWidth = rem(lineWidth);

    return {
      itemBody: {},
      itemContent: {},

      itemBullet: {
        boxSizing: 'border-box',
        width: _bulletSize,
        height: _bulletSize,
        borderRadius: theme.fn.radius(radius),
        border: `${_lineWidth} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        position: 'absolute',
        top: 0,
        left: align === 'left' ? `calc(-${_bulletSize} / 2 - ${_lineWidth} / 2)` : 'auto',
        right: align === 'right' ? `calc(-${_bulletSize} / 2 - ${_lineWidth} / 2)` : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,

        '&[data-with-child]': {
          borderWidth: rem(1),
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        },

        '&[data-active]': {
          borderColor: colors.background,
          backgroundColor: theme.white,

          '&[data-with-child]': {
            backgroundColor: colors.background,
            color: theme.white,
          },
        },
      },

      item: {
        position: 'relative',
        boxSizing: 'border-box',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        paddingLeft: align === 'left' ? theme.spacing.xl : 0,
        paddingRight: align === 'right' ? theme.spacing.xl : 0,
        textAlign: align,

        '&:not(:last-of-type)::before': {
          display: 'block',
        },

        '&:not(:first-of-type)': {
          marginTop: theme.spacing.xl,
        },

        '&::before': {
          boxSizing: 'border-box',
          position: 'absolute',
          top: 0,
          left: align === 'left' ? `calc(${_lineWidth} * -1)` : 'auto',
          right: align === 'right' ? `calc(${_lineWidth} * -1)` : 'auto',
          bottom: `calc(${theme.spacing.xl} * -1)`,
          borderLeft: `${_lineWidth} ${lineVariant} ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
          content: '""',
          display: 'none',
        },

        '&[data-line-active]': {
          '&::before': {
            borderLeftColor: colors.background,
          },
        },
      },

      itemTitle: {
        fontWeight: 500,
        lineHeight: 1,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        textAlign: align,
      },
    };
  }
);
