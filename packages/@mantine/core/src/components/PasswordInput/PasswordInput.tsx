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
    Omit<__BaseInputProps, 'pointer'>,
    StylesApiProps<PasswordInputFactory>,
    ElementProps<'input', 'size'> {
  /** A component to replace the visibility toggle icon */
  visibilityToggleIcon?: React.FC<{ reveal: boolean }>;

  /** Props passed down to the visibility toggle button */
  visibilityToggleButtonProps?: Record<string, any>;

  /** If set, the input value is visible visible */
  visible?: boolean;

  /** If set, the input value is visible by default */
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

const defaultProps = {
  visibilityToggleIcon: PasswordToggleIcon,
} satisfies Partial<PasswordInputProps>;

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
    visibilityToggleIcon: VisibilityToggleIcon,
    visibilityToggleButtonProps,
    rightSectionProps,
    leftSectionProps,
    leftSectionPointerEvents,
    withErrorStyles,
    mod,
    attributes,
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
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PasswordInputFactory>({
    classNames,
    styles,
    props,
  });

  const { styleProps, rest } = extractStyleProps(others);
  const errorId = errorProps?.id || `${uuid}-error`;
  const descriptionId = descriptionProps?.id || `${uuid}-description`;
  const hasError = !!error && typeof error !== 'boolean';
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ''} ${hasDescription ? descriptionId : ''}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : undefined;

  const visibilityToggleButton = (
    <ActionIcon<'button'>
      {...getStyles('visibilityToggle')}
      disabled={disabled}
      radius={radius}
      aria-hidden={!visibilityToggleButtonProps}
      aria-pressed={_visible}
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
      unstyled={unstyled}
      withAsterisk={withAsterisk}
      inputWrapperOrder={inputWrapperOrder}
      inputContainer={inputContainer}
      variant={variant}
      labelProps={{ ...labelProps, htmlFor: uuid }}
      descriptionProps={{ ...descriptionProps, id: descriptionId }}
      errorProps={{ ...errorProps, id: errorId }}
      mod={mod}
      attributes={attributes}
      {...getStyles('root')}
      {...styleProps}
      {...wrapperProps}
    >
      <Input
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
        attributes={attributes}
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
          aria-describedby={describedBy}
          autoComplete={rest.autoComplete || 'off'}
          type={_visible ? 'text' : 'password'}
        />
      </Input>
    </Input.Wrapper>
  );
});

PasswordInput.classes = { ...InputBase.classes, ...classes };
PasswordInput.displayName = '@mantine/core/PasswordInput';
