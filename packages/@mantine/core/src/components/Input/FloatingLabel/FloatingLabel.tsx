import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../../core';
import { useInputWrapperContext } from '../InputWrapper.context';
import classes from '../Input.module.css';

export type InputFloatingLabelStylesNames = 'floatingLabel';
export type InputFloatingLabelCssVariables = {
  floatingLabel:
    | '--floating-label-top'
    | '--floating-label-left'
    | '--floating-label-size'
    | '--floating-label-floating-offset'
    | '--floating-label-color'
    | '--floating-label-floating-color';
};

export interface InputFloatingLabelProps
  extends BoxProps,
    StylesApiProps<InputFloatingLabelFactory>,
    ElementProps<'label'> {
  __staticSelector?: string;

  /** Controls label transform state */
  floating?: boolean;

  /** Root element of the floating label @default `'label'` */
  labelElement?: 'label' | 'div';
}

export type InputFloatingLabelFactory = Factory<{
  props: InputFloatingLabelProps;
  ref: HTMLLabelElement;
  stylesNames: InputFloatingLabelStylesNames;
  vars: InputFloatingLabelCssVariables;
}>;

const defaultProps = {
  labelElement: 'label',
} satisfies Partial<InputFloatingLabelProps>;

export const InputFloatingLabel = factory<InputFloatingLabelFactory>(
  (_props, ref) => {
    const props = useProps('InputFloatingLabel', defaultProps, _props);
    const {
      classNames,
      className,
      style,
      styles,
      unstyled,
      vars,
      __staticSelector,
      variant,
      labelElement,
      floating,
      children,
      mod,
      attributes,
      ...others
    } = props;

    const _getStyles = useStyles<InputFloatingLabelFactory>({
      name: ['InputFloatingLabel', __staticSelector],
      props,
      classes,
      className,
      style,
      classNames,
      styles,
      unstyled,
      attributes,
      rootSelector: 'floatingLabel',
      vars,
    });

    const ctx = useInputWrapperContext();
    const getStyles = ctx?.getStyles || _getStyles;

    return (
      <Box
        {...getStyles('floatingLabel', ctx?.getStyles ? { className, style } : undefined)}
        component={labelElement as 'label'}
        data-floating={floating || undefined}
        variant={variant}
        mod={[{ floating: !!floating }, mod]}
        ref={ref}
        id={ctx?.labelId}
        htmlFor={labelElement === 'label' ? ctx?.inputId : undefined}
        {...others}
      >
        {children}
      </Box>
    );
  }
);

InputFloatingLabel.classes = classes;
InputFloatingLabel.displayName = '@mantine/core/InputFloatingLabel';
