import { createStyles } from '@mantine/core';
import { CSSObject, MantineTheme } from '@mantine/styles';
import { TabsOrientation, TabsVariant } from '../Tabs.types';

interface TabsListStylesParams {
  orientation: TabsOrientation;
  variant: TabsVariant;
  grow: boolean;
}

function getVariantStyles(
  { variant, orientation }: TabsListStylesParams,
  theme: MantineTheme
): CSSObject {
  const vertical = orientation === 'vertical';

  if (variant === 'default') {
    return {
      [vertical ? 'borderRight' : 'borderBottom']: `2px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    };
  }

  if (variant === 'outline') {
    return {
      [vertical ? 'borderRight' : 'borderBottom']: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    };
  }

  return {};
}

export default createStyles((theme, params: TabsListStylesParams) => {
  const vertical = params.orientation === 'vertical';

  return {
    tabsList: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',

      '& [role="tab"]': {
        flex: params.grow ? 1 : undefined,
      },

      ...getVariantStyles(params, theme),
    },
  };
});
