import React, { forwardRef } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  Factory,
  getFontSize,
  getSize,
  MantineSize,
  StylesApiProps,
  useStyles,
} from '../../core';
import { Input } from '../Input';
import classes from './InlineInput.module.css';

export const InlineInputClasses = classes;

export type InlineInputStylesNames =
  | 'root'
  | 'body'
  | 'labelWrapper'
  | 'label'
  | 'description'
  | 'error';

export interface InlineInputProps
  extends BoxProps,
    StylesApiProps<InlineInputFactory>,
    ElementProps<'div'> {
  __staticSelector: string;
  __stylesApiProps: Record<string, any>;
  label: React.ReactNode;
  description: React.ReactNode;
  id: string;
  disabled: boolean | undefined;
  error: React.ReactNode;
  size: MantineSize | (string & {}) | undefined;
  labelPosition?: 'left' | 'right';
}

export type InlineInputFactory = Factory<{
  props: any;
  stylesNames: InlineInputStylesNames;
}>;

export const InlineInput = forwardRef<HTMLDivElement, InlineInputProps>(
  (
    {
      __staticSelector,
      __stylesApiProps,
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
      labelPosition = 'left',
      variant,
      style,
      vars,
      mod,
      ...others
    },
    ref
  ) => {
    const getStyles = useStyles<InlineInputFactory>({
      name: __staticSelector,
      props: __stylesApiProps,
      className,
      style,
      classes,
      classNames,
      styles,
      unstyled,
    });

    return (
      <Box
        {...getStyles('root')}
        ref={ref}
        __vars={{
          '--label-fz': getFontSize(size),
          '--label-lh': getSize(size, 'label-lh'),
        }}
        mod={[{ 'label-position': labelPosition }, mod]}
        variant={variant}
        size={size}
        {...others}
      >
        <div {...getStyles('body')}>
          {children}

          <div {...getStyles('labelWrapper')} data-disabled={disabled || undefined}>
            {label && (
              <label {...getStyles('label')} data-disabled={disabled || undefined} htmlFor={id}>
                {label}
              </label>
            )}

            {description && (
              <Input.Description size={size} __inheritStyles={false} {...getStyles('description')}>
                {description}
              </Input.Description>
            )}

            {error && error !== 'boolean' && (
              <Input.Error size={size} __inheritStyles={false} {...getStyles('error')}>
                {error}
              </Input.Error>
            )}
          </div>
        </div>
      </Box>
    );
  }
);

InlineInput.displayName = '@mantine/core/InlineInput';
