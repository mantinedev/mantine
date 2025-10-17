import { useEffect, useRef } from 'react';
import { useMergedRef, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  ElementProps,
  Factory,
  genericFactory,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '../../core';
import { CloseButton } from '../CloseButton';
import { FileButton } from '../FileButton';
import { __BaseInputProps, __InputStylesNames, Input, InputVariant } from '../Input';
import { InputBase } from '../InputBase/InputBase';

export interface FileInputProps<Multiple = false>
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<FileInputFactory>,
    ElementProps<'button', 'value' | 'defaultValue' | 'onChange' | 'placeholder'> {
  component?: any;

  /** Called when value changes */
  onChange?: (payload: Multiple extends true ? File[] : File | null) => void;

  /** Controlled component value */
  value?: Multiple extends true ? File[] : File | null;

  /** Uncontrolled component default value */
  defaultValue?: Multiple extends true ? File[] : File | null;

  /** If set, user can pick more than one file @default `false` */
  multiple?: Multiple;

  /** File input accept attribute, for example, `"image/png,image/jpeg"` */
  accept?: string;

  /** Input name attribute */
  name?: string;

  /** Input form attribute */
  form?: string;

  /** Value renderer. By default, displays file name. */
  valueComponent?: React.FC<{ value: null | File | File[] }>;

  /** If set, the clear button is displayed in the right section @default `false` */
  clearable?: boolean;

  /** Props passed down to the clear button */
  clearButtonProps?: React.ComponentProps<'button'>;

  /** If set, the input value cannot be changed  */
  readOnly?: boolean;

  /** Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. */
  capture?: boolean | 'user' | 'environment';

  /** Props passed down to the hidden input element which is used to capture files */
  fileInputProps?: React.ComponentProps<'input'>;

  /** Input placeholder */
  placeholder?: React.ReactNode;

  /** Reference of the function that should be called when value changes to null or empty array */
  resetRef?: React.Ref<() => void>;
}

export type FileInputFactory = Factory<{
  props: FileInputProps;
  ref: HTMLButtonElement;
  stylesNames: __InputStylesNames | 'placeholder';
  variant: InputVariant;
  signature: <Multiple extends boolean = false>(
    props: FileInputProps<Multiple>
  ) => React.JSX.Element;
}>;

const DefaultValue: FileInputProps['valueComponent'] = ({ value }) => (
  <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
    {Array.isArray(value) ? value.map((file) => file.name).join(', ') : value?.name}
  </div>
);

const defaultProps = {
  valueComponent: DefaultValue,
} satisfies Partial<FileInputProps>;

export const FileInput = genericFactory<FileInputFactory>((_props) => {
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
    valueComponent: ValueComponent,
    clearable,
    clearButtonProps,
    readOnly,
    capture,
    fileInputProps,
    rightSection,
    size,
    placeholder,
    component,
    resetRef: resetRefProp,
    classNames,
    styles,
    attributes,
    ...others
  } = props;

  const resetRef = useRef<() => void>(null);
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<FileInputFactory>({
    classNames,
    styles,
    props,
  });

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

  return (
    <FileButton
      onChange={setValue}
      multiple={multiple}
      accept={accept}
      name={name}
      form={form}
      resetRef={useMergedRef(resetRef, resetRefProp)}
      disabled={readOnly}
      capture={capture}
      inputProps={fileInputProps}
    >
      {(fileButtonProps) => (
        <InputBase
          component={component || 'button'}
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
          classNames={classNames}
          styles={styles}
          attributes={attributes}
        >
          {!hasValue ? (
            <Input.Placeholder
              __staticSelector="FileInput"
              classNames={resolvedClassNames}
              styles={resolvedStyles}
              attributes={attributes}
            >
              {placeholder}
            </Input.Placeholder>
          ) : (
            <ValueComponent value={_value} />
          )}
        </InputBase>
      )}
    </FileButton>
  );
});

FileInput.classes = InputBase.classes;
FileInput.displayName = '@mantine/core/FileInput';
