import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineGradient,
  MantineColor,
  useExtractedMargins,
  PolymorphicComponentProps,
  PolymorphicRef,
} from '@mantine/styles';
import useStyles from './Text.styles';

export interface SharedTextProps extends DefaultProps {
  /** Predefined font-size from theme.fontSizes */
  size?: MantineSize;

  /** Text color from theme */
  color?: MantineColor;

  /** Sets font-weight css property */
  weight?: React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase';

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right';

  /** Link or text variant */
  variant?: 'text' | 'link' | 'gradient';

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** Sets line-height to 1 for centering */
  inline?: boolean;

  /** Inherit font properties from parent element */
  inherit?: boolean;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;
}

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedTextProps>;

type TextComponent = <C extends React.ElementType = 'div'>(
  props: TextProps<C>
) => React.ReactElement;

export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
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
      elementRef,
      gradient = { from: 'blue', to: 'cyan', deg: 45 },
      inline = false,
      inherit = false,
      ...others
    }: TextProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles(
      {
        variant,
        color,
        size,
        lineClamp,
        inline,
        inherit,
        gradientFrom: gradient.from,
        gradientTo: gradient.to,
        gradientDeg: gradient.deg,
      },
      null,
      'text'
    );
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const Element = component || 'div';

    return React.createElement(
      Element,
      {
        ref,
        className: cx(classes.root, { [classes.gradient]: variant === 'gradient' }, className),
        style: {
          fontWeight: inherit ? 'inherit' : weight,
          textTransform: transform,
          textAlign: align,
          ...mergedStyles,
        },
        ...rest,
      },
      children
    );
  }
);

(Text as any).displayName = '@mantine/core/Text';
