import { createStyles, CSSObject, MantineColor, MantineTheme } from '@mantine/styles';
import { TabsVariant, TabsOrientation } from '../Tabs.types';

interface TabStylesParams {
  variant: TabsVariant;
  color: MantineColor;
  orientation: TabsOrientation;
}

interface GetVariantReturnType {
  tab: CSSObject;
  tabActive: CSSObject;
}

function getVariantStyles(
  theme: MantineTheme,
  { variant, orientation, color }: TabStylesParams
): GetVariantReturnType {
  const vertical = orientation === 'vertical';

  if (variant === 'default') {
    return {
      tab: {
        [vertical ? 'borderRight' : 'borderBottom']: '2px solid transparent',
        [vertical ? 'marginRight' : 'marginBottom']: -2,
        [vertical ? 'borderBottomLeftRadius' : 'borderTopRightRadius']: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],
        },
      },

      tabActive: {
        borderColor: theme.fn.themeColor(color, 6),

        '&:hover': {
          borderColor: theme.fn.themeColor(color, 6),
        },
      },
    };
  }

  if (variant === 'outline') {
    return {
      tab: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,
        border: '1px solid transparent',
        borderBottom: 'none',
      },

      tabActive: {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3],

        '&::before': {
          content: '""',
          backgroundColor: theme.white,
          position: 'absolute',
          bottom: -1,
          height: 1,
          right: 0,
          left: 0,
        },
      },
    };
  }

  return { tab: {}, tabActive: {} };
}

export default createStyles((theme, params: TabStylesParams) => {
  const variantStyles = getVariantStyles(theme, params);

  return {
    tab: {
      position: 'relative',
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      fontSize: theme.fontSizes.sm,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      zIndex: 0,

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
  };
});
