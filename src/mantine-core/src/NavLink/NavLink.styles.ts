import {
  createStyles,
  MantineColor,
  MantineNumberSize,
  MantineTheme,
  rem,
  getSize,
} from '@mantine/styles';

export interface NavLinkStylesParams {
  color: MantineColor;
  noWrap: boolean;
  childrenOffset: MantineNumberSize;
  alignIcon: 'top' | 'center';
}

const NAV_LINK_VARIANTS = ['filled', 'light', 'subtle'];

interface GetVariantStylesInput {
  theme: MantineTheme;
  variant: string;
  color: MantineColor;
}

function getVariantStyles({ theme, variant, color }: GetVariantStylesInput) {
  if (!NAV_LINK_VARIANTS.includes(variant)) {
    return null;
  }

  const colors = theme.fn.variant({ variant, color });

  return {
    '&[data-active]': {
      backgroundColor: colors.background,
      color: colors.color,
      ...theme.fn.hover({ backgroundColor: colors.hover }),
    },
  };
}

export default createStyles(
  (theme, { noWrap, childrenOffset, alignIcon, color }: NavLinkStylesParams, { variant }) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: `${rem(8)} ${theme.spacing.sm}`,
      userSelect: 'none',
      ...getVariantStyles({ theme, variant, color }),

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),

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
      paddingTop: alignIcon === 'center' ? undefined : rem(4),
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
      paddingLeft: getSize({ size: childrenOffset, sizes: theme.spacing }),
    },
  })
);
