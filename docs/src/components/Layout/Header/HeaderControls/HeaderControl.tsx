import React from 'react';
import { UnstyledButton, UnstyledButtonProps, Tooltip } from '@mantine/core';
import useStyles from './HeaderControl.styles';

interface HeaderControlProps extends UnstyledButtonProps {
  tooltip: string;
  link?: string;
  variant?: 'default' | 'discord' | 'twitter';
}

export function HeaderControl({
  className,
  tooltip,
  link,
  variant,
  ...others
}: HeaderControlProps) {
  const { classes, cx } = useStyles();

  if (link) {
    return (
      <Tooltip label={tooltip} className={className} transitionDuration={0} openDelay={500}>
        <a className={cx(classes.control, classes[variant])} href={link} {...(others as any)}>
          {others.children}
        </a>
      </Tooltip>
    );
  }

  return (
    <Tooltip label={tooltip} className={className} transitionDuration={0} openDelay={500}>
      <UnstyledButton className={cx(classes.control, classes[variant])} {...others} />
    </Tooltip>
  );
}
