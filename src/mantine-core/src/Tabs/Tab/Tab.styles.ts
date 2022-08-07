import { createStyles, CSSObject, MantineTheme } from '@mantine/styles';
import { TabsStylesParams } from '../Tabs.types';

interface TabStylesParams extends TabsStylesParams {
  withIcon: boolean;
  withRightSection: boolean;
}

function getVariantStyles(
  theme: MantineTheme,
  { variant, orientation, color, radius, inverted }: TabStylesParams
): CSSObject {
  const vertical = orientation === 'vertical';
  const filledScheme = theme.fn.variant({ color, variant: 'filled' });
  const radiusValue = theme.fn.radius(radius);
  const borderRadius =
    orientation === 'vertical'
      ? `${radiusValue}px 0 0 ${radiusValue}px`
      : inverted
      ? `0 0 ${radiusValue}px ${radiusValue}px`
      : `${radiusValue}px ${radiusValue}px 0 0`;

  if (variant === 'default') {
    return {
      [vertical ? 'borderRight' : inverted ? 'borderTop' : 'borderBottom']: '2px solid transparent',
      [vertical ? 'marginRight' : inverted ? 'marginTop' : 'marginBottom']: -2,
      borderRadius,

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
      }),

      '&[data-active]': {
        borderColor: filledScheme.background,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        ...theme.fn.hover({ borderColor: filledScheme.background }),
      },
    };
  }

  if (variant === 'outline') {
    return {
      borderRadius,
      border: '1px solid transparent',
      [vertical ? 'borderRight' : inverted ? 'borderTop' : 'borderBottom']: 'none',

      '&[data-active]': {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],

        '&::before': {
          content: '""',
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          position: 'absolute',
          bottom: vertical ? 0 : inverted ? 'unset' : -1,
          top: vertical ? 0 : inverted ? -1 : 'unset',
          [vertical ? 'width' : 'height']: 1,
          right: vertical ? -1 : 0,
          left: vertical ? 'unset' : 0,
        },
      },
    };
  }

  if (variant === 'pills') {
    return {
      borderRadius: theme.fn.radius(radius),
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      }),

      '&[data-active]': {
        backgroundColor: filledScheme.background,
        color: theme.white,
        ...theme.fn.hover({ backgroundColor: filledScheme.background }),
      },
    };
  }

  return {};
}

export default createStyles((theme, params: TabStylesParams) => ({
  tabLabel: {},

  tab: {
    position: 'relative',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: params.withIcon ? theme.spacing.xs : undefined,
    paddingRight: params.withRightSection ? theme.spacing.xs : undefined,
    fontSize: theme.fontSizes.sm,
    whiteSpace: 'nowrap',
    zIndex: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: params.orientation === 'horizontal' ? 'center' : undefined,
    lineHeight: 1,

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      ...theme.fn.hover({ backgroundColor: 'transparent' }),
    },

    '&:focus': {
      zIndex: 1,
    },

    ...getVariantStyles(theme, params),
  },

  tabRightSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:not(:only-child)': {
      marginLeft: 7,
    },
  },

  tabIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:not(:only-child)': {
      marginRight: 7,
    },
  },
}));
