import React from 'react';
import cx from 'clsx';
import { QuoteIcon } from '@modulz/radix-icons';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import useStyles from './Blockquote.styles';

interface BlockquoteProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'blockquote'>, 'cite'> {
  /** Border and icon color from theme */
  color?: string;

  /** Icon, defaults to QuoteIcon from @modulz/radix-icons */
  icon?: React.ReactNode;

  /** Describe a reference to a cited quote */
  cite?: React.ReactNode;
}

const defaultIcon = <QuoteIcon style={{ width: 20, height: 20 }} />;

export function Blockquote({
  className,
  color,
  icon = defaultIcon,
  cite,
  children,
  themeOverride,
  ...others
}: BlockquoteProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });
  return (
    <blockquote className={cx(classes.blockquote, className)} {...others}>
      <div className={classes.inner}>
        {icon && (
          <div data-mantine-icon className={classes.icon}>
            {icon}
          </div>
        )}

        <div className={classes.body}>
          {children}
          {cite && <cite className={classes.cite}>{cite}</cite>}
        </div>
      </div>
    </blockquote>
  );
}

Blockquote.displayName = '@mantine/core/Blockquote';
