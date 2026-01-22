import { use } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  extractStyleProps,
  getFontSize,
  getRadius,
  getSize,
  MantineRadius,
  MantineSize,
  polymorphicFactory,
  PolymorphicFactory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Loader } from '../Loader/Loader';
import { InputContext } from './Input.context';
import classes from './Input.module.css';
import { InputClearButton } from './InputClearButton/InputClearButton';
import { InputClearSection } from './InputClearSection/InputClearSection';
import { InputDescription } from './InputDescription/InputDescription';
import { InputError } from './InputError/InputError';
import { InputLabel } from './InputLabel/InputLabel';
import { InputPlaceholder } from './InputPlaceholder/InputPlaceholder';
import { InputWrapperContext } from './InputWrapper.context';
import {
  __InputWrapperProps,
  InputWrapper,
  InputWrapperStylesNames,
} from './InputWrapper/InputWrapper';

// Required to be a separate type for docgen script
type WrapperProps = React.ComponentProps<'div'> & DataAttributes;

export interface __BaseInputProps extends __InputWrapperProps, __InputProps {
  /** Props passed down to the root element */
  wrapperProps?: WrapperProps;
}

export type __InputStylesNames = InputStylesNames | InputWrapperStylesNames;

export type InputStylesNames = 'input' | 'wrapper' | 'section';
export type InputVariant = 'default' | 'filled' | 'unstyled';
export type InputCssVariables = {
  wrapper:
    | '--input-height'
    | '--input-fz'
    | '--input-radius'
    | '--input-left-section-width'
    | '--input-right-section-width'
    | '--input-left-section-pointer-events'
    | '--input-right-section-pointer-events'
    | '--input-padding-y'
    | '--input-margin-top'
    | '--input-margin-bottom';
};

export interface InputStylesCtx {
  offsetTop: boolean | undefined;
  offsetBottom: boolean | undefined;
}

export interface __InputProps {
  /** Content section displayed on the left side of the input */
  leftSection?: React.ReactNode;

  /** Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height */
  leftSectionWidth?: React.CSSProperties['width'];

  /** Props passed down to the `leftSection` element */
  leftSectionProps?: React.ComponentProps<'div'>;

  /** Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). @default `'none'` */
  leftSectionPointerEvents?: React.CSSProperties['pointerEvents'];

  /** Content section displayed on the right side of the input */
  rightSection?: React.ReactNode;

  /** Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height */
  rightSectionWidth?: React.CSSProperties['width'];

  /** Props passed down to the `rightSection` element */
  rightSectionProps?: React.ComponentProps<'div'>;

  /** Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). @default `'none'` */
  rightSectionPointerEvents?: React.CSSProperties['pointerEvents'];

  /** Sets `required` attribute on the `input` element */
  required?: boolean;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default `theme.defaultRadius` */
  radius?: MantineRadius;

  /** Sets `disabled` attribute on the `input` element */
  disabled?: boolean;

  /** Controls input `height`, horizontal `padding`, and `font-size` @default `'sm'` */
  size?: MantineSize | (string & {});

  /** Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). @default `false` */
  pointer?: boolean;

  /** Determines whether the input should have red border and red text color when the `error` prop is set @default `true` */
  withErrorStyles?: boolean;

  /** HTML `size` attribute for the input element (number of visible characters) */
  inputSize?: string;

  /** Section to be displayed when the input is `__clearable` and `rightSection` is not defined */
  __clearSection?: React.ReactNode;

  /** Determines whether the `__clearSection` should be displayed if it is passed to the component, has no effect if `rightSection` is defined */
  __clearable?: boolean;

  /** Right section displayed when both `__clearSection` and `rightSection` are not defined */
  __defaultRightSection?: React.ReactNode;

  /** Displays loading indicator in the left or right section @default `false` */
  loading?: boolean;

  /** Position of the loading indicator @default `'right'` */
  loadingPosition?: 'left' | 'right';
}

export interface InputProps extends BoxProps, __InputProps, StylesApiProps<InputFactory> {
  __staticSelector?: string;

  /** Props passed to Styles API context, replaces `Input.Wrapper` props */
  __stylesApiProps?: Record<string, any>;

  /** Determines whether the input should have error styles and `aria-invalid` attribute */
  error?: React.ReactNode;

  /** Adjusts padding and sizing calculations for multiline inputs (use with `component="textarea"`). Does not make the input multiline by itself. @default `false` */
  multiline?: boolean;

  /** Input element id */
  id?: string;

  /** Determines whether `aria-` and other accessibility attributes should be added to the input. Only disable when implementing custom accessibility handling. @default `true` */
  withAria?: boolean;

  /** Props passed down to the root element of the `Input` component */
  wrapperProps?: WrapperProps;
}

export type InputFactory = PolymorphicFactory<{
  props: InputProps;
  defaultRef: HTMLInputElement;
  defaultComponent: 'input';
  stylesNames: InputStylesNames;
  variant: InputVariant;
  vars: InputCssVariables;
  ctx: InputStylesCtx;
  staticComponents: {
    Label: typeof InputLabel;
    Error: typeof InputError;
    Description: typeof InputDescription;
    Placeholder: typeof InputPlaceholder;
    Wrapper: typeof InputWrapper;
    ClearButton: typeof InputClearButton;
  };
}>;

const defaultProps = {
  variant: 'default',
  leftSectionPointerEvents: 'none',
  rightSectionPointerEvents: 'none',
  withAria: true,
  withErrorStyles: true,
  size: 'sm',
  loading: false,
  loadingPosition: 'right',
} satisfies Partial<InputProps>;

const varsResolver = createVarsResolver<InputFactory>((_, props, ctx) => ({
  wrapper: {
    '--input-margin-top': ctx.offsetTop ? 'calc(var(--mantine-spacing-xs) / 2)' : undefined,
    '--input-margin-bottom': ctx.offsetBottom ? 'calc(var(--mantine-spacing-xs) / 2)' : undefined,
    '--input-height': getSize(props.size, 'input-height'),
    '--input-fz': getFontSize(props.size),
    '--input-radius': props.radius === undefined ? undefined : getRadius(props.radius),
    '--input-left-section-width':
      props.leftSectionWidth !== undefined ? rem(props.leftSectionWidth) : undefined,
    '--input-right-section-width':
      props.rightSectionWidth !== undefined ? rem(props.rightSectionWidth) : undefined,
    '--input-padding-y': props.multiline ? getSize(props.size, 'input-padding-y') : undefined,
    '--input-left-section-pointer-events': props.leftSectionPointerEvents,
    '--input-right-section-pointer-events': props.rightSectionPointerEvents,
  },
}));

export const Input = polymorphicFactory<InputFactory>((_props) => {
  const props = useProps('Input', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles,
    mod,
    inputSize,
    attributes,
    __clearSection,
    __clearable,
    __defaultRightSection,
    loading,
    loadingPosition,
    ...others
  } = props;

  const { styleProps, rest } = extractStyleProps(others);
  const ctx = use(InputWrapperContext);
  const stylesCtx: InputStylesCtx = { offsetBottom: ctx?.offsetBottom, offsetTop: ctx?.offsetTop };

  const getStyles = useStyles<InputFactory>({
    name: ['Input', __staticSelector],
    props: __stylesApiProps || props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    stylesCtx,
    rootSelector: 'wrapper',
    vars,
    varsResolver,
  });

  const ariaAttributes = withAria
    ? {
        required,
        disabled,
        'aria-invalid': !!error,
        'aria-describedby': ctx?.describedBy,
        id: ctx?.inputId || id,
      }
    : {};

  const loadingIndicator = loading ? (
    <Loader
      size={
        loadingPosition === 'left'
          ? 'calc(var(--input-left-section-size) / 2)'
          : 'calc(var(--input-right-section-size) / 2)'
      }
    />
  ) : null;

  const _leftSection = loading && loadingPosition === 'left' ? loadingIndicator : leftSection;
  const _rightSection: React.ReactNode = InputClearSection({
    __clearable,
    __clearSection,
    rightSection: loading && loadingPosition === 'right' ? loadingIndicator : rightSection,
    __defaultRightSection,
    size,
  });

  return (
    <InputContext value={{ size: size || 'sm' }}>
      <Box
        {...getStyles('wrapper')}
        {...styleProps}
        {...wrapperProps}
        mod={[
          {
            error: !!error && withErrorStyles,
            pointer,
            disabled,
            multiline,
            'data-with-right-section': !!_rightSection,
            'data-with-left-section': !!_leftSection,
          },
          mod,
        ]}
        variant={variant}
        size={size}
      >
        {_leftSection && (
          <div
            {...leftSectionProps}
            data-position="left"
            {...getStyles('section', {
              className: leftSectionProps?.className,
              style: leftSectionProps?.style,
            })}
          >
            {_leftSection}
          </div>
        )}

        <Box
          component="input"
          {...rest}
          {...ariaAttributes}
          required={required}
          mod={{ disabled, error: !!error && withErrorStyles }}
          variant={variant}
          __size={inputSize}
          {...getStyles('input')}
        />

        {_rightSection && (
          <div
            {...rightSectionProps}
            data-position="right"
            {...getStyles('section', {
              className: rightSectionProps?.className,
              style: rightSectionProps?.style,
            })}
          >
            {_rightSection}
          </div>
        )}
      </Box>
    </InputContext>
  );
});

Input.classes = classes;
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.ClearButton = InputClearButton;
Input.displayName = '@mantine/core/Input';
