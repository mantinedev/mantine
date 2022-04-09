import { createStyles, CSSObject, getSharedColorScheme, MantineTheme } from '@mantine/styles';
import { TabsStylesParams } from '../Tabs.types';

interface TabStylesParams extends TabsStylesParams {
  withIcon: boolean;
  withRightSection: boolean;
}

interface GetVariantReturnType {
  tab: CSSObject;
  tabActive: CSSObject;
}

function getVariantStyles(
  theme: MantineTheme,
  { variant, orientation, color, radius, inverted }: TabStylesParams
): GetVariantReturnType {
  const vertical = orientation === 'vertical';
  const filledScheme = getSharedColorScheme({ color, theme, variant: 'filled' });
  const radiusValue = theme.fn.radius(radius);
  const borderRadius =
    orientation === 'vertical'
      ? `${radiusValue}px 0 0 ${radiusValue}px`
      : inverted
      ? `0 0 ${radiusValue}px ${radiusValue}px`
      : `${radiusValue}px ${radiusValue}px 0 0`;

  if (variant === 'default') {
    return {
      tab: {
        [vertical ? 'borderRight' : inverted ? 'borderTop' : 'borderBottom']:
          '2px solid transparent',
        [vertical ? 'marginRight' : inverted ? 'marginTop' : 'marginBottom']: -2,
        borderRadius,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        },
      },

      tabActive: {
        borderColor: filledScheme.background,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        '&:hover': {
          borderColor: filledScheme.background,
        },
      },
    };
  }

  if (variant === 'outline') {
    return {
      tab: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        borderRadius,
        border: '1px solid transparent',
        [vertical ? 'borderRight' : inverted ? 'borderTop' : 'borderBottom']: 'none',
      },

      tabActive: {
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
      tab: {
        borderRadius: theme.fn.radius(radius),

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      },

      tabActive: {
        backgroundColor: filledScheme.background,
        color: theme.white,

        '&:hover': {
          backgroundColor: filledScheme.background,
        },
      },
    };
  }

  return { tab: {}, tabActive: {} };
}

export default createStyles((theme, params: TabStylesParams) => {
  const variantStyles = getVariantStyles(theme, params);

  return {
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

        '&:hover': {
          backgroundColor: 'transparent',
        },
      },

      '&:focus': {
        zIndex: 1,
      },

      ...variantStyles.tab,
    },

    tabActive: variantStyles.tabActive,

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
  };
});
