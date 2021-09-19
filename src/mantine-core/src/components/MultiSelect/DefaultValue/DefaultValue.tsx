import React from 'react';
import { mergeStyles } from '@mantine/tss';
import { DefaultProps, MantineSize, MantineNumberSize } from '@mantine/theme';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import useStyles from './DefaultValue.styles';

export type DefaultValueStylesNames = keyof ReturnType<typeof useStyles>['classes'];

export interface MultiSelectValueProps
  extends DefaultProps<DefaultValueStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  label: string;
  onRemove(): void;
  disabled: boolean;
  size: MantineSize;
  radius: MantineNumberSize;
}

const buttonSizes = {
  xs: 16,
  sm: 22,
  md: 24,
  lg: 26,
  xl: 30,
};

export function DefaultValue({
  label,
  classNames,
  styles,
  className,
  style,
  onRemove,
  disabled,
  size,
  radius,
  ...others
}: MultiSelectValueProps) {
  const { classes, cx } = useStyles({ size, disabled, radius }, classNames, 'multi-select');
  const _styles = mergeStyles(classes, styles);

  return (
    <div
      className={cx(classes.defaultValue, className)}
      style={{ ...style, ..._styles.defaultValue }}
      {...others}
    >
      <span>{label}</span>

      {!disabled && (
        <CloseButton
          aria-hidden
          onClick={onRemove}
          size={buttonSizes[size]}
          radius={2}
          color="blue"
          variant="transparent"
          iconSize={buttonSizes[size] / 2}
          className={classes.defaultValueRemove}
          style={_styles.defaultValueRemove}
          tabIndex={-1}
        />
      )}
    </div>
  );
}

DefaultValue.displayName = '@mantine/core/MultiSelect/DefaultValue';
