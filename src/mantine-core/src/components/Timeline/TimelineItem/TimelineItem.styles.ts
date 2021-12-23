import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

interface TimelineItemStyles {
  bulletSize: number;
  color: MantineColor;
  radius: MantineNumberSize;
  align: 'right' | 'left';
  lineVariant: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
}

export default createStyles(
  (
    theme,
    { bulletSize, color, radius, align, lineVariant, lineWidth }: TimelineItemStyles,
    getRef
  ) => {
    const itemBulletWithChild = getRef('itemBulletWithChild');
    const itemBullet = getRef('itemBullet');

    return {
      itemBody: {},
      itemContent: {},

      itemBulletWithChild: {
        ref: itemBulletWithChild,
        borderWidth: 1,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      },

      itemBullet: {
        ref: itemBullet,
        boxSizing: 'border-box',
        width: bulletSize,
        height: bulletSize,
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        border: `${lineWidth}px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        position: 'absolute',
        top: 0,
        left: align === 'left' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
        right: align === 'right' ? -bulletSize / 2 - lineWidth / 2 : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
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
          left: align === 'left' ? -lineWidth : 'auto',
          right: align === 'right' ? -lineWidth : 'auto',
          bottom: -theme.spacing.xl,
          borderLeft: `${lineWidth}px ${lineVariant} ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
          }`,
          content: '""',
          display: 'none',
        },
      },

      itemLineActive: {
        '&::before': {
          borderLeftColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 6 : 7),
        },
      },

      itemActive: {
        [`& .${itemBullet}`]: {
          borderColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 6 : 7),
          backgroundColor: theme.white,
        },

        [`& .${itemBulletWithChild}`]: {
          backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 6 : 7),
          color: theme.white,
        },
      },

      itemTitle: {
        fontWeight: 500,
        lineHeight: 1,
        marginBottom: theme.spacing.xs / 2,
        textAlign: align,
      },
    };
  }
);
