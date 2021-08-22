import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '../../theme';
import { ComponentPassThrough } from '../../types';
import useStyles from './Paper.styles';

export interface PaperProps extends DefaultProps {
  /** Predefined padding value from theme.spacing or number for padding in px */
  padding?: MantineNumberSize;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: string;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;
}

export function Paper<T extends React.ElementType = 'div', U extends HTMLElement = HTMLDivElement>({
  component: Element = 'div',
  className,
  children,
  padding = 0,
  radius = 'sm',
  shadow,
  themeOverride,
  elementRef,
  ...others
}: ComponentPassThrough<T, PaperProps> & {
  /** Get element ref */
  elementRef?: React.ForwardedRef<U>;
}) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ radius, shadow, padding, theme }, null, 'paper');

  return (
    <Element className={cx(classes.paper, className)} ref={elementRef} {...others}>
      {children}
    </Element>
  );
}

Paper.displayName = '@mantine/core/Paper';
