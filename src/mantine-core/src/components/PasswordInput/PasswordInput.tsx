import React, { forwardRef } from 'react';
import { useBooleanToggle, useUuid } from '@mantine/hooks';
import {
  Selectors,
  DefaultProps,
  extractSystemStyles,
  useMantineTheme,
  useMantineDefaultProps,
} from '@mantine/styles';
import { ActionIcon } from '../ActionIcon';
import { TextInputProps, TextInputStylesNames } from '../TextInput';
import { Input } from '../Input';
import { InputWrapper } from '../InputWrapper';
import { PasswordToggleIcon } from './PasswordToggleIcon';
import useStyles from './PasswordInput.styles';

export type PasswordInputStylesNames = Selectors<typeof useStyles> | TextInputStylesNames;

export interface PasswordInputProps
  extends DefaultProps<PasswordInputStylesNames>,
    Omit<TextInputProps, 'classNames' | 'styles'> {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;

  /** Provide your own visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean; size: number }>;
}

const buttonSizes = {
  xs: 22,
  sm: 28,
  md: 26,
  lg: 32,
  xl: 40,
};

const iconSizes = {
  xs: 12,
  sm: 15,
  md: 17,
  lg: 19,
  xl: 21,
};

const rightSectionSizes = {
  xs: 28,
  sm: 34,
  md: 34,
  lg: 44,
  xl: 54,
};

const defaultProps: Partial<PasswordInputProps> = {
  size: 'sm',
  toggleTabIndex: -1,
  visibilityToggleIcon: PasswordToggleIcon,
  __staticSelector: 'PasswordInput',
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props: PasswordInputProps, ref) => {
    const {
      radius,
      disabled,
      size,
      toggleTabIndex,
      className,
      id,
      label,
      error,
      required,
      style,
      icon,
      description,
      wrapperProps,
      classNames,
      styles,
      variant,
      visibilityToggleIcon: VisibilityToggleIcon,
      __staticSelector,
      rightSection: _rightSection,
      rightSectionWidth: _rightSectionWidth,
      rightSectionProps: _rightSectionProps,
      sx,
      labelProps,
      descriptionProps,
      errorProps,
      ...others
    } = useMantineDefaultProps('PasswordInput', defaultProps, props);

    const theme = useMantineTheme();
    const rightSectionWidth = theme.fn.size({ size, sizes: rightSectionSizes });
    const { classes, cx } = useStyles(
      { size, rightSectionWidth },
      { name: 'PasswordInput', classNames, styles }
    );
    const uuid = useUuid(id);
    const { systemStyles, rest } = extractSystemStyles(others);
    const [reveal, toggle] = useBooleanToggle(false);

    const rightSection = (
      <ActionIcon<'button'>
        className={classes.visibilityToggle}
        tabIndex={toggleTabIndex}
        radius={radius}
        size={theme.fn.size({ size, sizes: buttonSizes })}
        aria-hidden
        onMouseDown={(event) => {
          event.preventDefault();
          toggle();
        }}
        onKeyDown={(event) => {
          if (event.nativeEvent.code === 'Space') {
            event.preventDefault();
            toggle();
          }
        }}
      >
        <VisibilityToggleIcon reveal={reveal} size={theme.fn.size({ size, sizes: iconSizes })} />
      </ActionIcon>
    );

    return (
      <InputWrapper
        required={required}
        id={uuid}
        label={label}
        error={error}
        description={description}
        size={size}
        className={className}
        style={style}
        classNames={classNames}
        styles={styles}
        __staticSelector={__staticSelector}
        sx={sx}
        errorProps={errorProps}
        descriptionProps={descriptionProps}
        labelProps={labelProps}
        {...systemStyles}
        {...wrapperProps}
      >
        <Input<'div'>
          component="div"
          invalid={!!error}
          icon={icon}
          size={size}
          classNames={{ ...classNames, input: classes.input }}
          styles={styles}
          radius={radius}
          disabled={disabled}
          __staticSelector={__staticSelector}
          rightSectionWidth={rightSectionWidth}
          rightSection={!disabled && rightSection}
          variant={variant}
        >
          <input
            type={reveal ? 'text' : 'password'}
            required={required}
            className={cx(classes.innerInput, {
              [classes.withIcon]: icon,
              [classes.invalid]: !!error,
            })}
            disabled={disabled}
            id={uuid}
            ref={ref}
            {...rest}
          />
        </Input>
      </InputWrapper>
    );
  }
);

PasswordInput.displayName = '@mantine/core/PasswordInput';
