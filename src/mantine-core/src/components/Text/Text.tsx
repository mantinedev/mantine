import React, { forwardRef } from 'react';
import {
  DefaultProps,
  MantineSize,
  MantineGradient,
  MantineColor,
  PolymorphicComponentProps,
  PolymorphicRef,
  useMantineDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Text.styles';

export interface SharedTextProps extends DefaultProps {
  /** Predefined font-size from theme.fontSizes */
  size?: MantineSize;

  /** Text color from theme */
  color?: MantineColor;

  /** Sets font-weight css property */
  weight?: React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right' | 'justify';

  /** Link or text variant */
  variant?: 'text' | 'link' | 'gradient';

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** Sets line-height to 1 for centering */
  inline?: boolean;

  /** Underline the text */
  underline?: boolean;

  /** Inherit font properties from parent element */
  inherit?: boolean;

  /** Controls gradient settings in gradient variant only */
  gradient?: MantineGradient;
}

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedTextProps>;

type TextComponent = (<C extends React.ElementType = 'div'>(
  props: TextProps<C>
) => React.ReactElement) & { displayName?: string };

const defaultProps: Partial<TextProps<any>> = {
  size: 'md',
  variant: 'text',
  gradient: { from: 'blue', to: 'cyan', deg: 45 },
  inline: false,
  inherit: false,
};

export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'div'>(props: TextProps<C>, ref: PolymorphicRef<C>) => {
    const {
      className,
      component,
      size = 'md',
      weight,
      transform,
      color,
      align,
      variant = 'text',
      lineClamp,
      gradient = { from: 'blue', to: 'cyan', deg: 45 },
      inline = false,
      inherit = false,
      underline,
      classNames,
      styles,
      ...others
    } = useMantineDefaultProps('Text', defaultProps, props);

    const { classes, cx } = useStyles(
      {
        variant,
        color,
        size,
        lineClamp,
        inline,
        inherit,
        underline,
        weight,
        transform,
        align,
        gradientFrom: gradient.from,
        gradientTo: gradient.to,
        gradientDeg: gradient.deg,
      },
      { classNames, styles, name: 'Text' }
    );

    return (
      <Box<any>
        ref={ref}
        component={component || 'div'}
        className={cx(classes.root, { [classes.gradient]: variant === 'gradient' }, className)}
        {...others}
      />
    );
  }
);

Text.displayName = '@mantine/core/Text';
