import React from 'react';
import {
  CloseButton,
  DefaultProps,
  MantineSize,
  MantineNumberSize,
  Selectors,
} from '@mantine/core';
import useStyles from './DefaultValue.styles';

export type DefaultValueStylesNames = Selectors<typeof useStyles>;

export interface TagInputValueProps
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
  onRemove,
  disabled,
  size,
  radius,
  ...others
}: TagInputValueProps) {
  const { classes, cx } = useStyles(
    { size, disabled, radius },
    { classNames, styles, name: 'TagInput' }
  );

  return (
    <div className={cx(classes.defaultValue, className)} {...others}>
      <span className={classes.label}>{label}</span>

      {!disabled && (
        <CloseButton
          aria-hidden
          onMouseDown={onRemove}
          size={buttonSizes[size]}
          radius={2}
          color="blue"
          variant="transparent"
          iconSize={buttonSizes[size] / 2}
          className={classes.defaultValueRemove}
          tabIndex={-1}
        />
      )}
    </div>
  );
}

DefaultValue.displayName = '@mantine/labs/TagInput/DefaultValue';
