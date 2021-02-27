import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/theme';

export type BadgeVariant = 'badge' | 'pill' | 'outline';

function getVariantStyle(variant: BadgeVariant, color: string, theme: MantineTheme) {
  const colors = Array.isArray(theme.colors[color])
    ? theme.colors[color]
    : theme.colors[theme.primaryColor];

  switch (variant) {
    case 'badge':
      return {
        backgroundColor: colors[0],
        color: colors[9],
        lineHeight: '23px',
        height: 22,
        paddingLeft: 10,
        paddingRight: 10,
      };

    case 'pill':
      return {
        backgroundColor: colors[6],
        textShadow: `1px 1px 0 ${colors[8]}`,
        color: theme.white,
        paddingLeft: 8,
        paddingRight: 8,
        height: 19,
        lineHeight: '19px',
      };

    case 'outline':
      return {
        borderColor: colors[6],
        color: colors[6],
        backgroundColor: theme.white,
        lineHeight: '22px',
        height: 22,
        paddingLeft: 10,
        paddingRight: 10,
        border: '1px solid transparent',
      };

    default:
      return {};
  }
}

export default createUseStyles({
  badge: ({
    variant,
    color,
    theme,
  }: {
    variant: BadgeVariant;
    color: string;
    theme: MantineTheme;
  }) => ({
    ...getFontStyles(theme),
    boxSizing: 'border-box',
    display: 'inline-block',
    textTransform: 'uppercase',
    fontSize: 11,
    borderRadius: 100,
    fontWeight: 700,
    letterSpacing: 0.25,

    ...getVariantStyle(variant, color, theme),
  }),
});
