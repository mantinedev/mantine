import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getFontSize,
  MantineFontSize,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import classes from '../Input.module.css';
import { useInputWrapperContext } from '../InputWrapper.context';

export type InputLabelStylesNames = 'label' | 'required';
export type InputLabelCssVariables = {
  label: '--input-asterisk-color' | '--input-label-size';
};

export interface InputLabelProps
  extends BoxProps,
    StylesApiProps<InputLabelFactory>,
    ElementProps<'label'> {
  __staticSelector?: string;

  /** If set, the required asterisk is displayed next to the label */
  required?: boolean;

  /** Controls label `font-size` @default `'sm'` */
  size?: MantineFontSize;

  /** Root element of the label @default `'label'` */
  labelElement?: 'label' | 'div';
}

export type InputLabelFactory = Factory<{
  props: InputLabelProps;
  ref: HTMLLabelElement;
  stylesNames: InputLabelStylesNames;
  vars: InputLabelCssVariables;
}>;

const defaultProps = {
  labelElement: 'label',
} satisfies Partial<InputLabelProps>;

const varsResolver = createVarsResolver<InputLabelFactory>((_, { size }) => ({
  label: {
    '--input-label-size': getFontSize(size),
    '--input-asterisk-color': undefined,
  },
}));

export const InputLabel = factory<InputLabelFactory>((_props, ref) => {
  const props = useProps('InputLabel', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant,
    mod,
    attributes,
    ...others
  } = useProps('InputLabel', defaultProps, props);

  const _getStyles = useStyles<InputLabelFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    rootSelector: 'label',
    vars,
    varsResolver,
  });

  const ctx = useInputWrapperContext();
  const getStyles = ctx?.getStyles || _getStyles;

  return (
    <Box
      {...getStyles('label', ctx?.getStyles ? { className, style } : undefined)}
      component={labelElement as 'label'}
      variant={variant}
      size={size}
      ref={ref}
      htmlFor={labelElement === 'label' ? htmlFor : undefined}
      mod={[{ required }, mod]}
      onMouseDown={(event) => {
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      }}
      {...others}
    >
      {children}
      {required && (
        <span {...getStyles('required')} aria-hidden>
          {' *'}
        </span>
      )}
    </Box>
  );
});

InputLabel.classes = classes;
InputLabel.displayName = '@mantine/core/InputLabel';
