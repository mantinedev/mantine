import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor, getFontStyles } from '@mantine/theme';

interface TooltipStylesProps {
  theme: MantineTheme;
  color: string;
  gutter: number;
  arrowSize: number;
}

const verticalPlacement = {
  '&$center': {
    left: '50%',
    transform: 'translateX(-50%)',
  },

  '&$end': {
    right: 0,
  },

  '&$start': {
    left: 0,
  },
};

const horizontalPlacement = {
  '&$center': {
    top: '50%',
    transform: 'translateY(-50%)',
  },

  '&$end': {
    bottom: 0,
  },

  '&$start': {
    top: 0,
  },
};

export default createUseStyles(
  {
    withArrow: {},
    center: {},
    start: {},
    end: {},

    wrapper: {
      position: 'relative',
      display: 'inline-block',
    },

    tooltipInner: ({ theme, color }: TooltipStylesProps) => ({
      ...getFontStyles(theme),
      backgroundColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 3 : 9 }),
      lineHeight: theme.lineHeight,
      fontSize: theme.fontSizes.sm,
      borderRadius: theme.radius.sm,
      padding: [theme.spacing.xs / 2, theme.spacing.xs],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
      position: 'relative',

      '&$withArrow::before': {
        display: 'block',
        position: 'absolute',
        content: '""',
        width: 0,
        height: 0,
        borderStyle: 'solid',
      },
    }),

    tooltip: {
      display: 'inline-block',
      position: 'absolute',
    },

    top: ({ gutter, theme, color, arrowSize }: TooltipStylesProps) => ({
      ...verticalPlacement,
      bottom: `calc(100% + ${gutter}px)`,

      '& $tooltipInner$withArrow::before': {
        top: '100%',
        borderWidth: `${arrowSize}px ${arrowSize}px 0 ${arrowSize}px`,
        borderColor: `${getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 3 : 9,
        })} transparent transparent transparent`,
      },

      '&$center $tooltipInner$withArrow::before': {
        left: `calc(50% - ${arrowSize}px)`,
      },

      '&$start $tooltipInner$withArrow::before': {
        left: arrowSize,
      },

      '&$end $tooltipInner$withArrow::before': {
        right: arrowSize,
      },
    }),

    bottom: ({ gutter, theme, color, arrowSize }: TooltipStylesProps) => ({
      ...verticalPlacement,
      top: `calc(100% + ${gutter}px)`,

      '& $tooltipInner$withArrow::before': {
        bottom: '100%',
        borderWidth: `0 ${arrowSize}px ${arrowSize}px ${arrowSize}px`,
        borderColor: `transparent transparent ${getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 3 : 9,
        })} transparent`,
      },

      '&$center $tooltipInner$withArrow::before': {
        left: `calc(50% - ${arrowSize}px)`,
      },

      '&$start $tooltipInner$withArrow::before': {
        left: arrowSize,
      },

      '&$end $tooltipInner$withArrow::before': {
        right: arrowSize,
      },
    }),

    right: ({ gutter, theme, color, arrowSize }: TooltipStylesProps) => ({
      ...horizontalPlacement,
      left: `calc(100% + ${gutter}px)`,

      '& $tooltipInner$withArrow::before': {
        right: '100%',
        borderWidth: `${arrowSize}px ${arrowSize}px ${arrowSize}px 0`,
        borderColor: `transparent ${getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 3 : 9,
        })} transparent transparent`,
      },

      '&$center $tooltipInner$withArrow::before': {
        top: `calc(50% - ${arrowSize}px)`,
      },

      '&$start $tooltipInner$withArrow::before': {
        top: arrowSize,
      },

      '&$end $tooltipInner$withArrow::before': {
        bottom: arrowSize,
      },
    }),

    left: ({ gutter, theme, color, arrowSize }: TooltipStylesProps) => ({
      ...horizontalPlacement,
      right: `calc(100% + ${gutter}px)`,

      '& $tooltipInner$withArrow::before': {
        left: '100%',
        borderWidth: `${arrowSize}px 0 ${arrowSize}px ${arrowSize}px`,
        borderColor: `transparent transparent transparent ${getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 3 : 9,
        })}`,
      },

      '&$center $tooltipInner$withArrow::before': {
        top: `calc(50% - ${arrowSize}px)`,
      },

      '&$start $tooltipInner$withArrow::before': {
        top: arrowSize,
      },

      '&$end $tooltipInner$withArrow::before': {
        bottom: arrowSize,
      },
    }),
  },
  { link: true }
);
