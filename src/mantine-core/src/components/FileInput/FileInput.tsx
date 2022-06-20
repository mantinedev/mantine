import React, { forwardRef } from 'react';
import { DefaultProps, MantineSize, Selectors } from '@mantine/styles';
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
import useStyles from './FileInput.styles';

export type FileInputStylesNames =
  | InputStylesNames
  | InputWrapperStylesNames
  | Selectors<typeof useStyles>;

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

  /** Current value renderer */
  valueComponent?: React.FC<{ value: File | File[] }>;
}

const DefaultValue: FileInputProps['valueComponent'] = ({ value }) => (
  <span>{Array.isArray(value) ? value.map((file) => file.name).join(', ') : value.name}</span>
);

const defaultProps: Partial<FileInputProps> = {
  size: 'sm',
  valueComponent: DefaultValue,
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
    classNames,
    styles,
    unstyled,
    valueComponent: ValueComponent,
    ...others
  } = useInputProps('FileInput', defaultProps, props);
  const { classes } = useStyles(null, { name: 'FileInput', classNames, styles, unstyled });

  const [_value, setValue] = useUncontrolled<File | File[]>({
    value,
    defaultValue,
    onChange,
    finalValue: multiple ? [] : null,
  });

  const isPlaceholder = Array.isArray(_value) ? _value.length === 0 : _value === null;

  return (
    <Input.Wrapper {...wrapperProps} __staticSelector="FileInput">
      <FileButton onChange={setValue} multiple={multiple} accept={accept} name={name} form={form}>
        {(fileButtonProps) => (
          <Input
            multiline
            {...fileButtonProps}
            {...inputProps}
            {...others}
            component="button"
            ref={ref}
            __staticSelector="FileInput"
          >
            {isPlaceholder ? (
              <span className={classes.placeholder}>{placeholder}</span>
            ) : (
              <ValueComponent value={_value} />
            )}
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
