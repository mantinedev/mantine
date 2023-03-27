import React from 'react';
import { DefaultProps, MantineSize, MantineNumberSize, Selectors } from '@mantine/styles';
import { CloseButton } from '../../CloseButton';
import useStyles from './DefaultValue.styles';

export type DefaultValueStylesNames = Selectors<typeof useStyles>;

export interface MultiSelectValueProps
  extends DefaultProps<DefaultValueStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  label: string;
  onRemove(): void;
  disabled: boolean;
  readOnly: boolean;
  size: MantineSize;
  radius: MantineNumberSize;
  variant: string;
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
  readOnly,
  size,
  radius = 'sm',
  variant,
  unstyled,
  ...others
}: MultiSelectValueProps) {
  const { classes, cx } = useStyles(
    { disabled, readOnly, radius },
    { name: 'MultiSelect', classNames, styles, unstyled, size, variant }
  );

  return (
    <div className={cx(classes.defaultValue, className)} {...others}>
      <span className={classes.defaultValueLabel}>{label}</span>

      {!disabled && !readOnly && (
        <CloseButton
          aria-hidden
          onMouseDown={onRemove}
          size={buttonSizes[size]}
          radius={2}
          color="blue"
          variant="transparent"
          iconSize="70%"
          className={classes.defaultValueRemove}
          tabIndex={-1}
          unstyled={unstyled}
        />
      )}
    </div>
  );
}

DefaultValue.displayName = '@mantine/core/MultiSelect/DefaultValue';
