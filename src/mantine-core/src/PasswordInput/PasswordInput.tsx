import React, { forwardRef } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import { Selectors, DefaultProps, useComponentDefaultProps, rem, getSize } from '@mantine/styles';
import { extractSystemStyles } from '../Box';
import { ActionIcon } from '../ActionIcon';
import { TextInputProps, TextInputStylesNames } from '../TextInput';
import { Input } from '../Input';
import { PasswordToggleIcon } from './PasswordToggleIcon';
import useStyles from './PasswordInput.styles';

export type PasswordInputStylesNames = Selectors<typeof useStyles> | TextInputStylesNames;

export interface PasswordInputProps
  extends DefaultProps<PasswordInputStylesNames>,
    Omit<
      TextInputProps,
      'classNames' | 'styles' | 'rightSection' | 'rightSectionWidth' | 'rightSectionProps'
    > {
  /** Toggle button tabIndex, set to 0 to make button focusable with tab key */
  toggleTabIndex?: -1 | 0;

  /** Provide your own visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean; size: number | string }>;

  /** aria-label for visibility toggle button */
  visibilityToggleLabel?: string;

  /** Determines whether input content should be visible (controlled) */
  visible?: boolean;

  /** Determines whether input content should be visible (uncontrolled) */
  defaultVisible?: boolean;

  /** Called when visibility changes */
  onVisibilityChange?(visible: boolean): void;
}

const buttonSizes = {
  xs: rem(22),
  sm: rem(26),
  md: rem(28),
  lg: rem(32),
  xl: rem(40),
};

const iconSizes = {
  xs: rem(12),
  sm: rem(15),
  md: rem(17),
  lg: rem(19),
  xl: rem(21),
};

const rightSectionSizes = {
  xs: rem(28),
  sm: rem(32),
  md: rem(34),
  lg: rem(44),
  xl: rem(54),
};

const defaultProps: Partial<PasswordInputProps> = {
  size: 'sm',
  toggleTabIndex: -1,
  visibilityToggleIcon: PasswordToggleIcon,
  __staticSelector: 'PasswordInput',
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
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
    sx,
    labelProps,
    descriptionProps,
    errorProps,
    unstyled,
    visibilityToggleLabel,
    withAsterisk,
    inputContainer,
    iconWidth,
    inputWrapperOrder,
    visible,
    defaultVisible,
    onVisibilityChange,
    ...others
  } = useComponentDefaultProps('PasswordInput', defaultProps, props);

  const rightSectionWidth = getSize({ size, sizes: rightSectionSizes });
  const { classes } = useStyles(
    { rightSectionWidth },
    { name: 'PasswordInput', classNames, styles, unstyled, size, variant }
  );
  const uuid = useId(id);
  const { systemStyles, rest } = extractSystemStyles(others);
  const [_visible, setVisibility] = useUncontrolled({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange,
  });

  const toggleVisibility = () => setVisibility(!_visible);

  const rightSection = (
    <ActionIcon<'button'>
      className={classes.visibilityToggle}
      tabIndex={toggleTabIndex}
      radius={radius}
      size={getSize({ size, sizes: buttonSizes })}
      aria-hidden={!visibilityToggleLabel}
      aria-label={visibilityToggleLabel}
      unstyled={unstyled}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleVisibility();
      }}
      onKeyDown={(event) => {
        if (event.key === ' ') {
          event.preventDefault();
          toggleVisibility();
        }
      }}
    >
      <VisibilityToggleIcon reveal={_visible} size={getSize({ size, sizes: iconSizes })} />
    </ActionIcon>
  );

  return (
    <Input.Wrapper
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
      unstyled={unstyled}
      withAsterisk={withAsterisk}
      inputWrapperOrder={inputWrapperOrder}
      inputContainer={inputContainer}
      variant={variant}
      {...systemStyles}
      {...wrapperProps}
    >
      <Input<'div'>
        component="div"
        error={error}
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
        unstyled={unstyled}
        iconWidth={iconWidth}
      >
        <input
          type={_visible ? 'text' : 'password'}
          required={required}
          data-invalid={!!error || undefined}
          data-with-icon={!!icon || undefined}
          className={classes.innerInput}
          disabled={disabled}
          id={uuid}
          ref={ref}
          {...rest}
        />
      </Input>
    </Input.Wrapper>
  );
});

PasswordInput.displayName = '@mantine/core/PasswordInput';
