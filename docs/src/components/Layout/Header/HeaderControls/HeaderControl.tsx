import React from 'react';
import { UnstyledButton, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import useStyles from './HeaderControl.styles';

interface HeaderControlProps extends React.ComponentPropsWithoutRef<'button'> {
  tooltip: string;
  link?: string;
  variant?: 'default' | 'discord' | 'twitter';
  hideOnMobile?: boolean;
}

export function HeaderControl({
  className,
  tooltip,
  link,
  variant,
  hideOnMobile,
  ...others
}: HeaderControlProps) {
  const { classes, cx, theme } = useStyles({ hideOnMobile });
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  if (link) {
    return (
      <Tooltip label={tooltip} disabled={isMobile}>
        <a
          className={cx(classes.control, classes[variant], className)}
          href={link}
          {...(others as any)}
        >
          {others.children}
        </a>
      </Tooltip>
    );
  }

  return (
    <Tooltip label={tooltip} disabled={isMobile}>
      <UnstyledButton className={cx(classes.control, classes[variant], className)} {...others} />
    </Tooltip>
  );
}
