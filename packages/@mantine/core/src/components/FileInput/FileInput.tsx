import React, { useEffect, useRef } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { BoxProps, ElementProps, factory, Factory, StylesApiProps, useProps } from '../../core';
import { CloseButton } from '../CloseButton';
import { FileButton } from '../FileButton';
import { __BaseInputProps, __InputStylesNames, Input, InputVariant } from '../Input';
import { InputBase } from '../InputBase/InputBase';

export interface FileInputProps<Multiple = false>
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<FileInputFactory>,
    ElementProps<'button', 'value' | 'defaultValue' | 'onChange' | 'placeholder'> {
  /** Called when value changes */
  onChange?: (payload: Multiple extends true ? File[] : File | null) => void;

  /** Controlled component value */
  value?: Multiple extends true ? File[] : File | null;

  /** Uncontrolled component default value */
  defaultValue?: Multiple extends true ? File[] : File | null;

  /** Determines whether user can pick more than one file, `false` by default */
  multiple?: Multiple;

  /** File input accept attribute, for example, `"image/png,image/jpeg"` */
  accept?: string;

  /** Input name attribute */
  name?: string;

  /** Input form attribute */
  form?: string;

  /** Value renderer. By default, file name is displayed. */
  valueComponent?: React.FC<{ value: null | File | File[] }>;

  /** Determines whether clear button should be displayed in the right section, `false` by default */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: React.ComponentPropsWithoutRef<'button'>;

  /** If set, the input value cannot be changed  */
  readOnly?: boolean;

  /** Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. */
  capture?: boolean | 'user' | 'environment';

  /** Props passed down to the hidden input element which is used to capture files */
  fileInputProps?: React.ComponentPropsWithoutRef<'input'>;

  /** Input placeholder */
  placeholder?: React.ReactNode;
}

export type FileInputFactory = Factory<{
  props: FileInputProps;
  ref: HTMLButtonElement;
  stylesNames: __InputStylesNames;
  variant: InputVariant;
}>;

const DefaultValue: FileInputProps['valueComponent'] = ({ value }) => (
  <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
    {Array.isArray(value) ? value.map((file) => file.name).join(', ') : value?.name}
  </div>
);

const defaultProps: Partial<FileInputProps> = {
  valueComponent: DefaultValue,
};

const _FileInput = factory<FileInputFactory>((_props, ref) => {
  const props = useProps('FileInput', defaultProps, _props);
  const {
    unstyled,
    vars,
    onChange,
    value,
    defaultValue,
    multiple,
    accept,
    name,
    form,
    valueComponent,
    clearable,
    clearButtonProps,
    readOnly,
    capture,
    fileInputProps,
    rightSection,
    size,
    placeholder,
    ...others
  } = props;

  const resetRef = useRef<() => void>(null);

  const [_value, setValue] = useUncontrolled<null | File | File[]>({
    value,
    defaultValue,
    onChange: onChange as any,
    finalValue: multiple ? [] : null,
  });

  const hasValue = Array.isArray(_value) ? _value.length !== 0 : _value !== null;

  const _rightSection =
    rightSection ||
    (clearable && hasValue && !readOnly ? (
      <CloseButton
        {...clearButtonProps}
        variant="subtle"
        onClick={() => setValue(multiple ? [] : null)}
        size={size}
        unstyled={unstyled}
      />
    ) : null);

  useEffect(() => {
    if ((Array.isArray(_value) && _value.length === 0) || _value === null) {
      resetRef.current?.();
    }
  }, [_value]);

  const ValueComponent = valueComponent!;

  return (
    <FileButton
      onChange={setValue}
      multiple={multiple}
      accept={accept}
      name={name}
      form={form}
      resetRef={resetRef}
      disabled={readOnly}
      capture={capture}
      inputProps={fileInputProps}
    >
      {(fileButtonProps) => (
        <InputBase
          component="button"
          ref={ref}
          rightSection={_rightSection}
          {...fileButtonProps}
          {...others}
          __staticSelector="FileInput"
          multiline
          type="button"
          pointer
          __stylesApiProps={props}
          unstyled={unstyled}
          size={size}
        >
          {!hasValue ? (
            <Input.Placeholder>{placeholder}</Input.Placeholder>
          ) : (
            <ValueComponent value={_value} />
          )}
        </InputBase>
      )}
    </FileButton>
  );
});

_FileInput.classes = InputBase.classes;
_FileInput.displayName = '@mantine/core/FileInput';

type FileInputComponent = (<Multiple extends boolean = false>(
  props: FileInputProps<Multiple> & {
    ref?: React.ForwardedRef<HTMLButtonElement>;
  }
) => JSX.Element) & { extend: typeof _FileInput.extend };

export const FileInput: FileInputComponent = _FileInput as any;
