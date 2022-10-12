import React, { forwardRef } from 'react';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  Selectors,
  DefaultProps,
  extractSystemStyles,
  useMantineTheme,
  useComponentDefaultProps,
} from '@mantine/styles';
import { ActionIcon } from '../ActionIcon';
import { TextInputProps, TextInputStylesNames } from '../TextInput';
import { Input } from '../Input';
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
  xs: 22,
  sm: 26,
  md: 28,
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
  sm: 32,
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
    rightSection: _rightSection,
    rightSectionWidth: _rightSectionWidth,
    rightSectionProps: _rightSectionProps,
    sx,
    labelProps,
    descriptionProps,
    errorProps,
    unstyled,
    visibilityToggleLabel,
    withAsterisk,
    inputWrapperOrder,
    visible,
    defaultVisible,
    onVisibilityChange,
    ...others
  } = useComponentDefaultProps('PasswordInput', defaultProps, props);

  const theme = useMantineTheme();
  const rightSectionWidth = theme.fn.size({ size, sizes: rightSectionSizes });
  const { classes, cx } = useStyles(
    { size, rightSectionWidth },
    { name: 'PasswordInput', classNames, styles, unstyled }
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
      size={theme.fn.size({ size, sizes: buttonSizes })}
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
      <VisibilityToggleIcon reveal={_visible} size={theme.fn.size({ size, sizes: iconSizes })} />
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
        unstyled={unstyled}
      >
        <input
          type={_visible ? 'text' : 'password'}
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
    </Input.Wrapper>
  );
});

PasswordInput.displayName = '@mantine/core/PasswordInput';
