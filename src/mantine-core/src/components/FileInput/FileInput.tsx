import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize } from '@mantine/styles';
import { useUncontrolled } from '@mantine/hooks';
import {
  Input,
  InputSharedProps,
  InputStylesNames,
  useInputProps,
  InputWrapperBaseProps,
  InputWrapperStylesNames,
} from '../Input';
import { FileButton } from '../FileButton';

export type FileInputStylesNames = InputStylesNames | InputWrapperStylesNames;

export interface FileInputProps<Multiple extends boolean = false>
  extends DefaultProps<FileInputStylesNames>,
    InputSharedProps,
    InputWrapperBaseProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, 'size' | 'onChange' | 'value' | 'defaultValue'> {
  /** Props passed to root element (InputWrapper component) */
  wrapperProps?: Record<string, any>;

  /** Called when user picks files */
  onChange?(payload: Multiple extends true ? File[] : File): void;

  /** Controlled input value */
  value?: Multiple extends true ? File[] : File;

  /** Uncontrolled input default value */
  defaultValue?: Multiple extends true ? File[] : File;

  /** Input size */
  size?: MantineSize;

  /** Determines whether user can pick more than one file */
  multiple?: Multiple;

  /** File input accept attribute, for example, "image/png,image/jpeg" */
  accept?: string;

  /** Input name attribute */
  name?: string;

  /** Input form attribute */
  form?: string;

  __staticSelector?: string;
}

const defaultProps: Partial<FileInputProps> = {
  size: 'sm',
  __staticSelector: 'FileInput',
};

export const _FileInput = forwardRef<HTMLButtonElement, FileInputProps>((props, ref) => {
  const {
    inputProps,
    wrapperProps,
    placeholder,
    value,
    defaultValue,
    onChange,
    multiple,
    accept,
    name,
    form,
    ...others
  } = useInputProps('FileInput', defaultProps, props);

  const [_value, setValue] = useUncontrolled<File | File[]>({
    value,
    defaultValue,
    onChange,
    finalValue: multiple ? [] : null,
  });

  console.log(_value);

  return (
    <Input.Wrapper {...wrapperProps}>
      <FileButton onChange={setValue} multiple={multiple} accept={accept} name={name} form={form}>
        {(fileButtonProps) => (
          <Input component="button" {...fileButtonProps} {...inputProps} {...others} ref={ref}>
            {placeholder}
          </Input>
        )}
      </FileButton>
    </Input.Wrapper>
  );
});

_FileInput.displayName = '@mantine/core/FileInput';

type FileInputComponent = <Multiple extends boolean = false>(
  props: FileInputProps<Multiple> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
  }
) => JSX.Element;

export const FileInput: FileInputComponent = _FileInput as any;
