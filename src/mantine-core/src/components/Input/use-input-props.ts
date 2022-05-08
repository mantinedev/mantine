import { useMantineDefaultProps, DefaultProps, extractSystemStyles } from '@mantine/styles';
import { useUuid } from '@mantine/hooks';
import { InputWrapperBaseProps } from '../InputWrapper';
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
    ...others
  } = useMantineDefaultProps(component, defaultProps, props);

  const uid = useUuid(id);

  const { systemStyles, rest } = extractSystemStyles(others);

  return {
    ...rest,
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
