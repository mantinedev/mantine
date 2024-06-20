import { Fragment } from 'react';
import { useId } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  MantineSize,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import {
  InputDescription,
  InputDescriptionCssVariables,
  InputDescriptionStylesNames,
} from '../InputDescription/InputDescription';
import {
  InputError,
  InputErrorCssVariables,
  InputErrorStylesNames,
} from '../InputError/InputError';
import {
  InputLabel,
  InputLabelCssVariables,
  InputLabelStylesNames,
} from '../InputLabel/InputLabel';
import { InputWrapperProvider } from '../InputWrapper.context';
import { getInputOffsets } from './get-input-offsets/get-input-offsets';
import classes from '../Input.module.css';

export type InputWrapperCssVariables = InputLabelCssVariables &
  InputErrorCssVariables &
  InputDescriptionCssVariables;

export type InputWrapperStylesNames =
  | 'root'
  | InputLabelStylesNames
  | InputDescriptionStylesNames
  | InputErrorStylesNames;

export interface __InputWrapperProps {
  /** Contents of `Input.Label` component. If not set, label is not rendered. */
  label?: React.ReactNode;

  /** Contents of `Input.Description` component. If not set, description is not rendered. */
  description?: React.ReactNode;

  /** Contents of `Input.Error` component. If not set, error is not rendered. */
  error?: React.ReactNode;

  /** Adds required attribute to the input and a red asterisk on the right side of label, `false` by default */
  required?: boolean;

  /** Determines whether the required asterisk should be displayed. Overrides `required` prop. Does not add required attribute to the input. `false` by default */
  withAsterisk?: boolean;

  /** Props passed down to the `Input.Label` component */
  labelProps?: Record<string, any>;

  /** Props passed down to the `Input.Description` component */
  descriptionProps?: Record<string, any>;

  /** Props passed down to the `Input.Error` component */
  errorProps?: Record<string, any>;

  /** Input container component, `React.Fragment` by default */
  inputContainer?: (children: React.ReactNode) => React.ReactNode;

  /** Controls order of the elements, `['label', 'description', 'input', 'error']` by default */
  inputWrapperOrder?: ('label' | 'input' | 'description' | 'error')[];
}

export interface InputWrapperProps
  extends __InputWrapperProps,
    BoxProps,
    StylesApiProps<InputWrapperFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Props passed to Styles API context, replaces Input.Wrapper props */
  __stylesApiProps?: Record<string, any>;

  /** Static id used as base to generate `aria-` attributes, by default generates random id */
  id?: string;

  /** Controls size of `Input.Label`, `Input.Description` and `Input.Error` components */
  size?: MantineSize | (string & {});

  /** `Input.Label` root element, `'label'` by default */
  labelElement?: 'label' | 'div';
}

export type InputWrapperFactory = Factory<{
  props: InputWrapperProps;
  ref: HTMLDivElement;
  stylesNames: InputWrapperStylesNames;
  vars: InputWrapperCssVariables;
}>;

const defaultProps: Partial<InputWrapperProps> = {
  labelElement: 'label',
  inputContainer: (children) => children,
  inputWrapperOrder: ['label', 'description', 'input', 'error'],
};

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

export const InputWrapper = factory<InputWrapperFactory>((_props, ref) => {
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

  const _input = <Fragment key="input">{inputContainer!(children)}</Fragment>;

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

  const content = inputWrapperOrder!.map((part) => {
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
    <InputWrapperProvider
      value={{
        getStyles,
        describedBy,
        inputId,
        labelId,
        ...getInputOffsets(inputWrapperOrder!, { hasDescription, hasError }),
      }}
    >
      <Box
        ref={ref}
        variant={variant}
        size={size}
        mod={[{ error: !!error }, mod]}
        {...getStyles('root')}
        {...others}
      >
        {content}
      </Box>
    </InputWrapperProvider>
  );
});

InputWrapper.classes = classes;
InputWrapper.displayName = '@mantine/core/InputWrapper';
