import { useComponentDefaultProps, DefaultProps } from '@mantine/styles';
import { useId } from '@mantine/hooks';
import { extractSystemStyles } from '../Box';
import { InputWrapperBaseProps } from './InputWrapper/InputWrapper';
import { InputSharedProps } from './Input';

interface BaseProps extends InputWrapperBaseProps, InputSharedProps, DefaultProps {
  __staticSelector?: string;
  id?: string;
}

interface UseInputPropsReturnType extends Record<string, any> {
  wrapperProps: Record<string, any>;
  inputProps: Record<string, any>;
}

export function useInputProps<T extends BaseProps, U extends Partial<T>>(
  component: string,
  defaultProps: U,
  props: T
): UseInputPropsReturnType {
  const {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    sx,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps,
    id,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    ...others
  } = useComponentDefaultProps<T>(component, defaultProps, props);

  const uid = useId(id);

  const { systemStyles, rest } = extractSystemStyles(others);

  return {
    ...rest,
    classNames,
    styles,
    unstyled,

    wrapperProps: {
      label,
      description,
      error,
      required,
      classNames,
      className,
      __staticSelector,
      sx,
      errorProps,
      labelProps,
      descriptionProps,
      unstyled,
      styles,
      id: uid,
      size,
      style,
      inputContainer,
      inputWrapperOrder,
      withAsterisk,
      ...wrapperProps,
      ...systemStyles,
    },
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      id: uid,
      size,
      __staticSelector,
      invalid: !!error,
    },
  };
}
