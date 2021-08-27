import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineSize } from '../../theme';
import useStyles from './Text.styles';

export interface SharedTextProps extends DefaultProps {
  /** Predefined font-size from theme.fontSizes */
  size?: MantineSize;

  /** Text color from theme */
  color?: string;

  /** Sets font-weight css property */
  weight?: React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase';

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right';

  /** Link or text variant */
  variant?: 'text' | 'link';

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** Sets line-height to 1 for centering */
  inline?: boolean;
}

interface _TextProps<C extends React.ElementType, R extends HTMLElement> extends SharedTextProps {
  /** Root element or custom component */
  component?: C;

  /** Get element ref */
  elementRef?: React.ForwardedRef<R>;
}

export type TextProps<
  C extends React.ElementType = 'div',
  R extends HTMLElement = HTMLDivElement
> = _TextProps<C, R> & Omit<React.ComponentPropsWithoutRef<C>, keyof SharedTextProps>;

export function Text<C extends React.ElementType = 'div', R extends HTMLElement = HTMLDivElement>({
  className,
  component,
  children,
  size = 'md',
  weight,
  transform,
  style,
  color,
  align,
  variant = 'text',
  lineClamp,
  themeOverride,
  elementRef,
  inline = false,
  ...others
}: TextProps<C, R>): JSX.Element {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ variant, color, size, theme, lineClamp, inline }, null, 'text');
  const Element = component || 'div';

  return React.createElement(
    Element,
    {
      className: cx(classes.root, className),
      style: { fontWeight: weight, textTransform: transform, textAlign: align, ...style },
      ref: elementRef,
      ...others,
    },
    children
  );
}

Text.displayName = '@mantine/core/Text';
