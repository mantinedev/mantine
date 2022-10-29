import React from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
import { Box } from '../Box';
import { Input } from '../Input';
import useStyles from './InlineInput.styles';

export type InlineInputStylesNames = Selectors<typeof useStyles>;

export interface InlineInputProps
  extends DefaultProps<InlineInputStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  __staticSelector: string;
  label: React.ReactNode;
  description: React.ReactNode;
  id: string;
  disabled: boolean;
  error: React.ReactNode;
  size: MantineSize;
  labelPosition: 'left' | 'right';
}

export function InlineInput({
  __staticSelector,
  className,
  classNames,
  styles,
  unstyled,
  children,
  label,
  description,
  id,
  disabled,
  error,
  size,
  labelPosition,
  ...others
}: InlineInputProps) {
  const { classes, cx } = useStyles(
    { size, labelPosition },
    { name: __staticSelector, styles, classNames, unstyled }
  );

  return (
    <Box className={cx(classes.root, className)} {...others}>
      <div className={cx(classes.body)}>
        {children}

        <div className={classes.labelWrapper}>
          {label && (
            <label className={classes.label} data-disabled={disabled || undefined} htmlFor={id}>
              {label}
            </label>
          )}

          {description && (
            <Input.Description className={classes.description}>{description}</Input.Description>
          )}

          {error && error !== 'boolean' && (
            <Input.Error className={classes.error}>{error}</Input.Error>
          )}
        </div>
      </div>
    </Box>
  );
}

InlineInput.displayName = '@mantine/core/InlineInput';
