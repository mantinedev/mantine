import { createStyles } from '@mantine/tss';
import { getFontStyles, getFocusStyles, getThemeColor, MantineColor } from '@mantine/theme';

interface TabControlStyles {
  reduceMotion: boolean;
  color: MantineColor;
  orientation: 'horizontal' | 'vertical';
}

export default createStyles(
  (theme, { reduceMotion, color, orientation }: TabControlStyles, getRef) => {
    const tabActive = { ref: getRef() } as const;
    return {
      tabActive,
      tabLabel: {},

      tabControl: {
        ...getFontStyles(theme),
        ...getFocusStyles(theme),
        WebkitTapHighlightColor: 'transparent',
        boxSizing: 'border-box',
        display: 'block',
        height: 40,
        backgroundColor: 'transparent',
        border: 0,
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        cursor: 'pointer',
        width: orientation === 'vertical' ? '100%' : 'auto',

        '&:disabled': {
          cursor: 'not-allowed',
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        },
      },

      default: {
        transition: reduceMotion ? 'none' : 'border-color 150ms ease, color 150ms ease',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: '2px solid transparent',

        [`&.${tabActive.ref}`]: {
          color: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 7 }),
          [orientation === 'horizontal' ? 'borderBottomColor' : 'borderRightColor']: getThemeColor({
            theme,
            color,
            shade: theme.colorScheme === 'dark' ? 4 : 7,
          }),
        },
      },

      outline: {
        borderBottomLeftRadius: orientation === 'vertical' ? theme.radius.sm : 0,
        borderTopRightRadius: orientation === 'horizontal' ? theme.radius.sm : 0,
        borderTopLeftRadius: theme.radius.sm,
        border: '1px solid transparent',
        borderBottom: orientation === 'horizontal' ? 0 : '1px solid transparent',
        borderRight: orientation === 'vertical' ? 0 : '1px solid transparent',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

        [`&.${tabActive.ref}`]: {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        },
      },

      pills: {
        borderRadius: 1000,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        fontSize: theme.fontSizes.md,

        [`&.${tabActive.ref}`]: {
          color: theme.white,
          background: getThemeColor({ theme, color, shade: 6 }),
        },
      },

      tabInner: {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: orientation === 'horizontal' ? 'center' : 'flex-start',
        lineHeight: 1,
        height: '100%',
      },

      tabIcon: {
        '&:not(:only-child)': {
          marginRight: theme.spacing.xs,
        },

        // this fixes alignment as by default images and svg are inline and will have extra space on the bottom
        '& *': {
          display: 'block',
        },
      },
    };
  }
);
