import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles, getThemeColor } from '@mantine/theme';

export type BadgeVariant = 'light' | 'filled' | 'outline';

interface BadgeStylesProps {
  variant: BadgeVariant;
  color: string;
  theme: MantineTheme;
  fullWidth: boolean;
}

export default createUseStyles({
  badge: ({ theme, variant, fullWidth, color }: BadgeStylesProps) => ({
    ...getFontStyles(theme),
    backgroundColor:
      variant === 'outline'
        ? 'transparent'
        : getThemeColor({ theme, color, shade: variant === 'light' ? 0 : 6 }),
    textShadow:
      variant === 'filled' ? `1px 1px 0 ${getThemeColor({ theme, color, shade: 8 })}` : 'none',
    color:
      variant === 'filled'
        ? theme.white
        : getThemeColor({ theme, color, shade: variant === 'outline' ? 6 : 9 }),
    border: `1px solid ${
      variant === 'outline' ? getThemeColor({ theme, color, shade: 6 }) : 'transparent'
    }`,
    textAlign: 'center',
    padding: [3, theme.spacing.xs],
    boxSizing: 'border-box',
    display: fullWidth ? 'block' : 'inline-block',
    width: fullWidth ? '100%' : 'auto',
    textTransform: 'uppercase',
    fontSize: 11,
    borderRadius: 100,
    fontWeight: 700,
    letterSpacing: 0.25,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
});
