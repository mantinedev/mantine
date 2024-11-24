import cx from 'clsx';
import { useId, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  ElementProps,
  extractStyleProps,
  factory,
  Factory,
  getSize,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { ActionIcon } from '../ActionIcon';
import { __BaseInputProps, __InputStylesNames, Input, InputVariant } from '../Input';
import { InputBase } from '../InputBase';
import { PasswordToggleIcon } from './PasswordToggleIcon';
import classes from './PasswordInput.module.css';

export type PasswordInputStylesNames =
  | 'root'
  | 'visibilityToggle'
  | 'innerInput'
  | __InputStylesNames;
export type PasswordInputCssVariables = {
  root: '--psi-icon-size' | '--psi-button-size';
};

export interface PasswordInputProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<PasswordInputFactory>,
    ElementProps<'input', 'size'> {
  /** A component to replace visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean }>;

  /** Props passed down to the visibility toggle button */
  visibilityToggleButtonProps?: Record<string, any>;

  /** Determines whether input content should be visible */
  visible?: boolean;

  /** Determines whether input content should be visible by default */
  defaultVisible?: boolean;

  /** Called when visibility changes */
  onVisibilityChange?: (visible: boolean) => void;
}

export type PasswordInputFactory = Factory<{
  props: PasswordInputProps;
  ref: HTMLInputElement;
  stylesNames: PasswordInputStylesNames;
  vars: PasswordInputCssVariables;
  variant: InputVariant;
}>;

const defaultProps: Partial<PasswordInputProps> = {
  visibilityToggleIcon: PasswordToggleIcon,
};

const varsResolver = createVarsResolver<PasswordInputFactory>((_, { size }) => ({
  root: {
    '--psi-icon-size': getSize(size, 'psi-icon-size'),
    '--psi-button-size': getSize(size, 'psi-button-size'),
  },
}));

export const PasswordInput = factory<PasswordInputFactory>((_props, ref) => {
  const props = useProps('PasswordInput', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    required,
    error,
    leftSection,
    disabled,
    id,
    variant,
    inputContainer,
    description,
    label,
    size,
    errorProps,
    descriptionProps,
    labelProps,
    withAsterisk,
    inputWrapperOrder,
    wrapperProps,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionWidth,
    visible,
    defaultVisible,
    onVisibilityChange,
    visibilityToggleIcon,
    visibilityToggleButtonProps,
    rightSectionProps,
    leftSectionProps,
    leftSectionPointerEvents,
    withErrorStyles,
    mod,
    ...others
  } = props;

  const uuid = useId(id);

  const [_visible, setVisibility] = useUncontrolled({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: false,
    onChange: onVisibilityChange,
  });

  const toggleVisibility = () => setVisibility(!_visible);

  const getStyles = useStyles<PasswordInputFactory>({
    name: 'PasswordInput',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PasswordInputFactory>({
    classNames,
    styles,
    props,
  });

  const { styleProps, rest } = extractStyleProps(others);
  const VisibilityToggleIcon = visibilityToggleIcon!;

  const visibilityToggleButton = (
    <ActionIcon<'button'>
      {...getStyles('visibilityToggle')}
      disabled={disabled}
      radius={radius}
      aria-hidden={!visibilityToggleButtonProps}
      tabIndex={-1}
      {...visibilityToggleButtonProps}
      variant={visibilityToggleButtonProps?.variant ?? 'subtle'}
      color="gray"
      unstyled={unstyled}
      onTouchEnd={(event) => {
        event.preventDefault();
        visibilityToggleButtonProps?.onTouchEnd?.(event);
        toggleVisibility();
      }}
      onMouseDown={(event) => {
        event.preventDefault();
        visibilityToggleButtonProps?.onMouseDown?.(event);
        toggleVisibility();
      }}
      onKeyDown={(event) => {
        visibilityToggleButtonProps?.onKeyDown?.(event);
        if (event.key === ' ') {
          event.preventDefault();
          toggleVisibility();
        }
      }}
    >
      <VisibilityToggleIcon reveal={_visible} />
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
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      __staticSelector="PasswordInput"
      errorProps={errorProps}
      descriptionProps={descriptionProps}
      unstyled={unstyled}
      withAsterisk={withAsterisk}
      inputWrapperOrder={inputWrapperOrder}
      inputContainer={inputContainer}
      variant={variant}
      labelProps={{ ...labelProps, htmlFor: uuid }}
      mod={mod}
      {...getStyles('root')}
      {...styleProps}
      {...wrapperProps}
    >
      <Input<'div'>
        component="div"
        error={error}
        leftSection={leftSection}
        size={size}
        classNames={{ ...resolvedClassNames, input: cx(classes.input, resolvedClassNames.input) }}
        styles={resolvedStyles}
        radius={radius}
        disabled={disabled}
        __staticSelector="PasswordInput"
        rightSectionWidth={rightSectionWidth}
        rightSection={rightSection ?? visibilityToggleButton}
        variant={variant}
        unstyled={unstyled}
        leftSectionWidth={leftSectionWidth}
        rightSectionPointerEvents={rightSectionPointerEvents || 'all'}
        rightSectionProps={rightSectionProps}
        leftSectionProps={leftSectionProps}
        leftSectionPointerEvents={leftSectionPointerEvents}
        withAria={false}
        withErrorStyles={withErrorStyles}
      >
        <input
          required={required}
          data-invalid={!!error || undefined}
          data-with-left-section={!!leftSection || undefined}
          {...getStyles('innerInput')}
          disabled={disabled}
          id={uuid}
          ref={ref}
          {...rest}
          autoComplete={rest.autoComplete || 'off'}
          type={_visible ? 'text' : 'password'}
        />
      </Input>
    </Input.Wrapper>
  );
});

PasswordInput.classes = { ...InputBase.classes, ...classes };
PasswordInput.displayName = '@mantine/core/PasswordInput';
