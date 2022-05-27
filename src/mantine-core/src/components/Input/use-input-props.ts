import { useMantineDefaultProps, DefaultProps, extractSystemStyles } from '@mantine/styles';
import { useId } from '@mantine/hooks';
import { InputWrapperBaseProps } from './InputWrapper/InputWrapper';
import { InputBaseProps } from './Input';

interface BaseProps extends InputWrapperBaseProps, InputBaseProps, DefaultProps {
  __staticSelector?: string;
  id?: string;
}

export function useInputProps<T extends BaseProps>(
  component: string,
  defaultProps: Partial<T>,
  props: T
) {
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
    ...others
  } = useMantineDefaultProps(component, defaultProps, props);

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
