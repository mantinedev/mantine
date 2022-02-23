import React from 'react';
import { UnstyledButton, UnstyledButtonProps, Tooltip } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import useStyles from './HeaderControl.styles';

interface HeaderControlProps extends UnstyledButtonProps {
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
      <Tooltip
        label={tooltip}
        disabled={isMobile}
        className={cx(classes.container, className)}
        transitionDuration={0}
        openDelay={500}
      >
        <a className={cx(classes.control, classes[variant])} href={link} {...(others as any)}>
          {others.children}
        </a>
      </Tooltip>
    );
  }

  return (
    <Tooltip
      label={tooltip}
      disabled={isMobile}
      className={cx(classes.container, className)}
      transitionDuration={0}
      openDelay={500}
    >
      <UnstyledButton className={cx(classes.control, classes[variant])} {...others} />
    </Tooltip>
  );
}
