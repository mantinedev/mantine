import { createStyles, CSSObject, MantineTheme, rem } from '@mantine/styles';
import { GROUP_POSITIONS } from '../../Group/Group.styles';
import { TabsStylesParams, TabsPosition } from '../Tabs.types';

interface TabsListStylesParams extends TabsStylesParams {
  grow: boolean;
  position: TabsPosition;
}

function getVariantStyles(
  { orientation, inverted, placement }: TabsListStylesParams,
  theme: MantineTheme,
  variant: string
): CSSObject {
  const vertical = orientation === 'vertical';

  if (variant === 'default') {
    return {
      [vertical
        ? placement === 'left'
          ? 'borderRight'
          : 'borderLeft'
        : inverted
        ? 'borderTop'
        : 'borderBottom']: `${rem(2)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    };
  }

  if (variant === 'outline') {
    return {
      [vertical
        ? placement === 'left'
          ? 'borderRight'
          : 'borderLeft'
        : inverted
        ? 'borderTop'
        : 'borderBottom']: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    };
  }

  if (variant === 'pills') {
    return {
      gap: `calc(${theme.spacing.sm} / 2)`,
    };
  }

  return {};
}

export default createStyles((theme, params: TabsListStylesParams, { variant }) => {
  const vertical = params.orientation === 'vertical';

  return {
    tabsList: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: vertical ? 'column' : 'row',
      justifyContent: GROUP_POSITIONS[params.position],

      '& [role="tab"]': {
        flex: params.grow ? 1 : undefined,
      },

      ...getVariantStyles(params, theme, variant),
    },
  };
});
