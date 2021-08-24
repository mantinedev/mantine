import React from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme } from '../../theme';
import useStyles from './Paper.styles';

interface _PaperProps<C extends React.ElementType, R extends HTMLElement> extends DefaultProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;

  /** Predefined padding value from theme.spacing or number for padding in px */
  padding?: MantineNumberSize;

  /** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
  shadow?: string;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;
}

export type PaperProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _PaperProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof _PaperProps<C, R>>;

export function Paper<C extends React.ElementType = 'div', R extends HTMLElement = HTMLDivElement>({
  component,
  className,
  children,
  padding = 0,
  radius = 'sm',
  shadow,
  themeOverride,
  elementRef,
  ...others
}: PaperProps<C, R>) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ radius, shadow, padding, theme }, null, 'paper');
  const Element = component || 'div';

  return (
    <Element className={cx(classes.paper, className)} ref={elementRef as any} {...others}>
      {children}
    </Element>
  );
}

Paper.displayName = '@mantine/core/Paper';
