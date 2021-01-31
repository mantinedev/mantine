import React from 'react';
import cx from 'clsx';
import OpenColor from 'open-color';
import { DefaultProps, OpenColorTheme, OPEN_COLOR_THEMES } from '@mantine/types';
import useStyles from './Badge.styles';

type BadgeVariant = 'badge' | 'pill' | 'outline';

interface BadgeProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  theme?: OpenColorTheme;
  variant?: BadgeVariant;
}

function getVariantStyle(variant: BadgeVariant, theme: OpenColorTheme) {
  const ocTheme = OpenColor[OPEN_COLOR_THEMES.includes(theme) ? theme : 'gray'];

  switch (variant) {
    case 'badge':
      return { backgroundColor: ocTheme[0], color: ocTheme[9] };

    case 'pill':
      return { backgroundColor: ocTheme[6], textShadow: `1px 1px 0 ${ocTheme[8]}` };

    case 'outline':
      return { borderColor: ocTheme[6], color: ocTheme[6] };

    default:
      return {};
  }
}

export default function Badge({
  className,
  theme = 'gray',
  variant = 'badge',
  children,
  style,
  ...others
}: BadgeProps) {
  const classes = useStyles();

  return (
    <div
      {...others}
      data-composable
      className={cx(classes.badge, classes[`variant-${variant}`], className)}
      style={{ ...style, ...getVariantStyle(variant, theme) }}
    >
      {children}
    </div>
  );
}

Badge.displayName = '@mantine/core/Badge';
