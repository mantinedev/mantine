import React from 'react';
import { DefaultProps, MantineSize, MantineNumberSize, Selectors, rem } from '@mantine/styles';
import { CloseButton } from '../../CloseButton';
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
  xs: rem(16),
  sm: rem(22),
  md: rem(24),
  lg: rem(26),
  xl: rem(30),
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
          iconSize={`calc(${buttonSizes[size]} / 2)`}
          className={classes.defaultValueRemove}
          tabIndex={-1}
        />
      )}
    </div>
  );
}

DefaultValue.displayName = '@mantine/core/TagInput/DefaultValue';
