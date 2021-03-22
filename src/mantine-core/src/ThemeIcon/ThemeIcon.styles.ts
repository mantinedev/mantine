import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue, getThemeColor } from '@mantine/theme';

export type ThemeIconVariant = 'filled' | 'light' | 'gradient';

interface ThemeIconStylesProps {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
  radius: MantineNumberSize;
  variant: ThemeIconVariant;
}

export const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 32,
  xl: 40,
};

export default createUseStyles({
  themeIcon: ({ theme, color, size, radius, variant }: ThemeIconStylesProps) => {
    const iconSize = getSizeValue({ size, sizes });

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      backgroundColor: getThemeColor({ theme, color, shade: variant === 'filled' ? 5 : 1 }),
      backgroundImage:
        variant === 'gradient'
          ? `linear-gradient(135deg, ${getThemeColor({
              theme,
              color,
              shade: 3,
            })} 0%, ${getThemeColor({ theme, color, shade: 6 })} 60%, ${getThemeColor({
              theme,
              color,
              shade: 6,
            })} 100%)`
          : undefined,
      color:
        variant === 'filled' || variant === 'gradient'
          ? theme.white
          : getThemeColor({ theme, color, shade: 7 }),
      width: iconSize,
      height: iconSize,
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),

      '& svg': {
        filter:
          variant === 'gradient'
            ? `drop-shadow(1px 1px 0px ${getThemeColor({
                theme,
                color,
                shade: 7,
              })})`
            : undefined,
      },
    };
  },
});
