import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineGradient,
  useComponentDefaultProps,
  MantineColor,
  MantineNumberSize,
} from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { Box } from '../Box';
import useStyles from './Text.styles';

export interface TextProps extends DefaultProps {
  /** Text content */
  children?: React.ReactNode;

  /** Key of theme.fontSizes or number to set font-size in px */
  size?: MantineNumberSize;

  /** Key of theme.colors or any valid CSS color */
  color?: 'dimmed' | MantineColor;

  /** Sets font-weight css property */
  weight?: React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: React.CSSProperties['textTransform'];

  /** Sets text-align css property */
  align?: React.CSSProperties['textAlign'];

  /** Link or text variant */
  variant?: 'text' | 'link' | 'gradient';

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** CSS truncate overflowing text with an ellipsis */
  truncate?: 'end' | 'start' | true;

  /** Sets line-height to 1 for centering */
  inline?: boolean;

  /** Underline the text */
  underline?: boolean;

  /** Add strikethrough styles */
  strikethrough?: boolean;

  /** Adds font-style: italic style */
  italic?: boolean;

  /** Inherit font properties from parent element */
  inherit?: boolean;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;

  /** Shorthand for component="span" */
  span?: boolean;
}

const defaultProps: Partial<TextProps> = {
  variant: 'text',
};

export const _Text = forwardRef<HTMLDivElement, TextProps>((props, ref) => {
  const {
    className,
    size,
    weight,
    transform,
    color,
    align,
    variant,
    lineClamp,
    truncate,
    gradient,
    inline,
    inherit,
    underline,
    strikethrough,
    italic,
    classNames,
    styles,
    unstyled,
    span,
    ...others
  } = useComponentDefaultProps('Text', defaultProps, props);

  const { classes, cx } = useStyles(
    {
      variant,
      color,
      size,
      lineClamp,
      truncate,
      inline,
      inherit,
      underline,
      strikethrough,
      italic,
      weight,
      transform,
      align,
      gradient,
    },
    { unstyled, name: 'Text' }
  );

  return (
    <Box
      ref={ref}
      className={cx(classes.root, { [classes.gradient]: variant === 'gradient' }, className)}
      component={span ? 'span' : 'div'}
      {...others}
    />
  );
});

_Text.displayName = '@mantine/core/Text';

export const Text = createPolymorphicComponent<'div', TextProps>(_Text);
