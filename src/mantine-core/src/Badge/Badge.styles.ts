import OpenColor from 'open-color';
import { OpenColorTheme, OPEN_COLOR_THEMES } from '@mantine/types';
import { createUseStyles } from 'react-jss';

export type BadgeVariant = 'badge' | 'pill' | 'outline';

function getVariantStyle(variant: BadgeVariant, theme: OpenColorTheme) {
  const ocTheme = OpenColor[OPEN_COLOR_THEMES.includes(theme) ? theme : 'gray'];

  switch (variant) {
    case 'badge':
      return {
        backgroundColor: ocTheme[0],
        color: ocTheme[9],
        lineHeight: '23px',
        height: 22,
        paddingLeft: 10,
        paddingRight: 10,
      };

    case 'pill':
      return {
        backgroundColor: ocTheme[6],
        textShadow: `1px 1px 0 ${ocTheme[8]}`,
        color: OpenColor.white,
        paddingLeft: 8,
        paddingRight: 8,
        height: 19,
        lineHeight: '19px',
      };

    case 'outline':
      return {
        borderColor: ocTheme[6],
        color: ocTheme[6],
        backgroundColor: OpenColor.white,
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
  badge: (props) => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    display: 'inline-block',
    textTransform: 'uppercase',
    fontSize: 11,
    borderRadius: 100,
    fontWeight: 'bold',
    letterSpacing: 0.25,

    ...getVariantStyle(props.variant, props.color),
  }),
});
