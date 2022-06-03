import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

export interface NavLinkStylesParams {
  color: MantineColor;
  variant: 'filled' | 'light' | 'subtle';
  noWrap: boolean;
  childrenOffset: MantineNumberSize;
  alignIcon: 'top' | 'center';
}

export default createStyles(
  (theme, { color, variant, noWrap, childrenOffset, alignIcon }: NavLinkStylesParams) => {
    const colors = theme.fn.variant({ variant, color });
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: `8px ${theme.spacing.sm}px`,
        userSelect: 'none',

        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),

        '&[data-active]': {
          backgroundColor: colors.background,
          color: colors.color,
          ...theme.fn.hover({ backgroundColor: colors.hover }),
        },

        '&[data-disabled]': {
          opacity: 0.4,
          pointerEvents: 'none',
        },
      },

      icon: {
        marginRight: theme.spacing.sm,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: alignIcon === 'center' ? 'center' : 'flex-start',
        paddingTop: alignIcon === 'center' ? undefined : 4,
      },

      rightSection: {
        marginLeft: theme.spacing.sm,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: `transform 150ms ${theme.transitionTimingFunction}`,

        '&[data-rotate]': {
          transform: 'rotate(90deg)',
        },
      },

      body: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: noWrap ? 'nowrap' : undefined,
      },

      label: {},

      description: {
        display: 'block',

        '&[data-active]': {
          color: 'inherit',
        },
      },

      children: {
        paddingLeft: theme.fn.size({ size: childrenOffset, sizes: theme.spacing }),
      },
    };
  }
);
