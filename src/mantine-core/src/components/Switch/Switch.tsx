import React, { forwardRef } from 'react';
import {
  mergeStyles,
  DefaultProps,
  MantineNumberSize,
  MantineSize,
  MantineColor,
  ClassNames,
  useUuid,
  useExtractedMargins,
} from '@mantine/styles';
import useStyles from './Switch.styles';

export type SwitchStylesNames = ClassNames<typeof useStyles>;

export interface SwitchProps
  extends DefaultProps<SwitchStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Switch label */
  label?: React.ReactNode;

  /** Switch checked state color from theme.colors, defaults to theme.primaryColor */
  color?: MantineColor;

  /** Predefined size value */
  size?: MantineSize;

  /** Predefined border-radius value from theme.radius or number for border-radius in px */
  radius?: MantineNumberSize;

  /** Props spread to wrapper element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      color,
      label,
      id,
      style,
      size = 'sm',
      radius = 'xl',
      wrapperProps,
      children,
      classNames,
      styles,
      ...others
    }: SwitchProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ size, color, radius }, classNames, 'switch');
    const _styles = mergeStyles(classes, styles);
    const { mergedStyles, rest } = useExtractedMargins({ others, style, rootStyle: _styles.root });
    const uuid = useUuid(id);

    return (
      <div className={cx(classes.root, className)} style={mergedStyles} {...wrapperProps}>
        <input
          {...rest}
          id={uuid}
          ref={ref}
          type="checkbox"
          className={classes.input}
          style={_styles.input}
        />

        {label && (
          <label className={classes.label} htmlFor={uuid} style={_styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = '@mantine/core/Switch';
