import {
  createStyles,
  getThemeColor,
  MantineSize,
  MantineSizes,
  MantineTheme,
} from '@mantine/styles';

export const ACTIONS_HEIGHTS: MantineSizes = {
  xs: 20,
  sm: 25,
  md: 30,
  lg: 35,
  xl: 40,
};

export const LIST_SIZES: MantineSizes = {
  xs: 200,
  sm: 250,
  md: 300,
  lg: 400,
  xl: 500,
};

interface GetSizesProps {
  theme: MantineTheme;
  size: MantineSize;
}

export const getIconSize = ({ size, theme }: GetSizesProps): number => theme.fontSizes[size] + 2;

interface DualListStylesProps {
  size: MantineSize;
}

export default createStyles((theme, { size }: DualListStylesProps) => {
  const border = `1px solid ${theme.colors.gray[3]}`;

  return {
    root: {
      display: 'flex',
    },
    actions: {
      display: 'flex',
    },
    listRoot: {},
    listContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      width: LIST_SIZES[size],
      height: LIST_SIZES[size],
      border,
      borderRadius: theme.radius.sm,
      marginRight: theme.spacing[size],
    },
    listTitle: {},
    list: {
      overflowY: 'auto',
    },
    action: {
      width: '100%',
      height: ACTIONS_HEIGHTS[size],

      borderBottom: border,
      '&:first-of-type': {
        borderRight: border,
      },
    },
    item: {
      padding: `0 ${theme.spacing.sm}px`,
      userSelect: 'none',
    },
    searchBar: {},
    selectedItem: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : getThemeColor({ theme, color: theme.primaryColor, shade: 0 }),
    },
    disabled: {
      color: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 4],
    },
  };
});
