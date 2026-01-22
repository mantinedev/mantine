import { Fragment } from 'react';
import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  MantineFontSize,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import classes from '../Input.module.css';
import {
  InputDescription,
  InputDescriptionCssVariables,
  InputDescriptionProps,
  InputDescriptionStylesNames,
} from '../InputDescription/InputDescription';
import {
  InputError,
  InputErrorCssVariables,
  InputErrorProps,
  InputErrorStylesNames,
} from '../InputError/InputError';
import {
  InputLabel,
  InputLabelCssVariables,
  InputLabelProps,
  InputLabelStylesNames,
} from '../InputLabel/InputLabel';
import { InputWrapperContext } from '../InputWrapper.context';
import { getInputOffsets } from './get-input-offsets/get-input-offsets';

export type InputWrapperCssVariables = InputLabelCssVariables &
  InputErrorCssVariables &
  InputDescriptionCssVariables;

export type InputWrapperStylesNames =
  | 'root'
  | InputLabelStylesNames
  | InputDescriptionStylesNames
  | InputErrorStylesNames;

export interface __InputWrapperProps {
  /** Contents of `Input.Label` component. If not set, label is not displayed. */
  label?: React.ReactNode;

  /** Contents of `Input.Description` component. If not set, description is not displayed. */
  description?: React.ReactNode;

  /** Contents of `Input.Error` component. If not set, error is not displayed. */
  error?: React.ReactNode;

  /** Adds required attribute to the input and a red asterisk on the right side of label @default `false` */
  required?: boolean;

  /** If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. @default `false` */
  withAsterisk?: boolean;

  /** Props passed down to the `Input.Label` component */
  labelProps?: InputLabelProps & DataAttributes;

  /** Props passed down to the `Input.Description` component */
  descriptionProps?: InputDescriptionProps & DataAttributes;

  /** Props passed down to the `Input.Error` component */
  errorProps?: InputErrorProps & DataAttributes;

  /** Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. @default `React.Fragment` */
  inputContainer?: (children: React.ReactNode) => React.ReactNode;

  /** Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. @default `['label', 'description', 'input', 'error']` */
  inputWrapperOrder?: ('label' | 'input' | 'description' | 'error')[];
}

export interface InputWrapperProps
  extends __InputWrapperProps, BoxProps, StylesApiProps<InputWrapperFactory>, ElementProps<'div'> {
  __staticSelector?: string;

  /** Props passed to Styles API context, replaces Input.Wrapper props */
  __stylesApiProps?: Record<string, any>;

  /** Static id used as base to generate `aria-` attributes, by default generates random id */
  id?: string;

  /** Controls size of `Input.Label`, `Input.Description` and `Input.Error` components */
  size?: MantineFontSize;

  /** Root element for the label. Use `'div'` when wrapper contains multiple input elements and you need to handle `htmlFor` manually. @default `'label'` */
  labelElement?: 'label' | 'div';
}

export type InputWrapperFactory = Factory<{
  props: InputWrapperProps;
  ref: HTMLDivElement;
  stylesNames: InputWrapperStylesNames;
  vars: InputWrapperCssVariables;
}>;

const defaultProps = {
  labelElement: 'label',
  inputContainer: (children) => children,
  inputWrapperOrder: ['label', 'description', 'input', 'error'],
} satisfies Partial<InputWrapperProps>;

const varsResolver = createVarsResolver<InputWrapperFactory>((_, { size }) => ({
  label: {
    '--input-label-size': getFontSize(size),
    '--input-asterisk-color': undefined,
  },

  error: {
    '--input-error-size': size === undefined ? undefined : `calc(${getFontSize(size)} - ${rem(2)})`,
  },

  description: {
    '--input-description-size':
      size === undefined ? undefined : `calc(${getFontSize(size)} - ${rem(2)})`,
  },
}));

export const InputWrapper = factory<InputWrapperFactory>((_props) => {
  const props = useProps('InputWrapper', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps,
    mod,
    attributes,
    ...others
  } = props;

  const getStyles = useStyles<InputWrapperFactory>({
    name: ['InputWrapper', __staticSelector],
    props: __stylesApiProps || props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const sharedProps = {
    size,
    variant,
    __staticSelector,
  };

  const idBase = useId(id);
  const isRequired = typeof withAsterisk === 'boolean' ? withAsterisk : required;
  const errorId = errorProps?.id || `${idBase}-error`;
  const descriptionId = descriptionProps?.id || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== 'boolean';
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ''} ${hasDescription ? descriptionId : ''}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : undefined;
  const labelId = labelProps?.id || `${idBase}-label`;

  const _label = label && (
    <InputLabel
      key="label"
      labelElement={labelElement}
      id={labelId}
      htmlFor={inputId}
      required={isRequired}
      {...sharedProps}
      {...labelProps}
    >
      {label}
    </InputLabel>
  );

  const _description = hasDescription && (
    <InputDescription
      key="description"
      {...descriptionProps}
      {...sharedProps}
      size={descriptionProps?.size || sharedProps.size}
      id={descriptionProps?.id || descriptionId}
    >
      {description}
    </InputDescription>
  );

  const _input = <Fragment key="input">{inputContainer(children)}</Fragment>;

  const _error = hasError && (
    <InputError
      {...errorProps}
      {...sharedProps}
      size={errorProps?.size || sharedProps.size}
      key="error"
      id={errorProps?.id || errorId}
    >
      {error}
    </InputError>
  );

  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case 'label':
        return _label;
      case 'input':
        return _input;
      case 'description':
        return _description;
      case 'error':
        return _error;
      default:
        return null;
    }
  });

  return (
    <InputWrapperContext
      value={{
        getStyles,
        describedBy,
        inputId,
        labelId,
        ...getInputOffsets(inputWrapperOrder, { hasDescription, hasError }),
      }}
    >
      <Box
        variant={variant}
        size={size}
        mod={[{ error: !!error }, mod]}
        id={labelElement === 'label' ? undefined : id}
        {...getStyles('root')}
        {...others}
      >
        {content}
      </Box>
    </InputWrapperContext>
  );
});

InputWrapper.classes = classes;
InputWrapper.displayName = '@mantine/core/InputWrapper';
