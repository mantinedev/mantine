import { createUseStyles } from 'react-jss';
import { OpenColorTheme, OPEN_COLOR_THEMES } from '@mantine/types';
import { theming, MantineTheme } from '@mantine/theme';

export type BadgeVariant = 'badge' | 'pill' | 'outline';

function getVariantStyle(variant: BadgeVariant, color: OpenColorTheme, theme: MantineTheme) {
  const colors = theme.colors[OPEN_COLOR_THEMES.includes(color) ? color : 'gray'];

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
        color: theme.colors.white,
        paddingLeft: 8,
        paddingRight: 8,
        height: 19,
        lineHeight: '19px',
      };

    case 'outline':
      return {
        borderColor: colors[6],
        color: colors[6],
        backgroundColor: theme.colors.white,
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

export default createUseStyles(
  (theme: MantineTheme) => ({
    badge: (props) => ({
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
      fontFamily: theme.fontFamily,
      display: 'inline-block',
      textTransform: 'uppercase',
      fontSize: 11,
      borderRadius: 100,
      fontWeight: 'bold',
      letterSpacing: 0.25,

      ...getVariantStyle(props.variant, props.color, theme),
    }),
  }),
  { theming }
);
