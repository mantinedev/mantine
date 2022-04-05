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
  if (variant === 'default') {
    return {
      tab: {
        borderBottom: orientation === 'horizontal' ? '2px solid transparent' : undefined,
        borderRight: orientation === 'vertical' ? '2px solid transparent' : undefined,
        marginBottom: -2,
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          borderBottomColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
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

  return { tab: {}, tabActive: {} };
}

export default createStyles((theme, params: TabStylesParams) => {
  const variantStyles = getVariantStyles(theme, params);

  return {
    tab: {
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      fontSize: theme.fontSizes.sm,

      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',

        '&:hover': {
          backgroundColor: 'transparent',
        },
      },

      ...variantStyles.tab,
    },

    tabActive: variantStyles.tabActive,
  };
});
