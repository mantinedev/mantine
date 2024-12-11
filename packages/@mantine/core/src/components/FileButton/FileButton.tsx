import { forwardRef, useRef } from 'react';
import { assignRef, useMergedRef } from '@mantine/hooks';
import { useProps } from '../../core';

export interface FileButtonProps<Multiple extends boolean = false> {
  /** Called when files are picked */
  onChange: (payload: Multiple extends true ? File[] : File | null) => void;

  /** Function that receives button props and returns react node that should be rendered */
  children: (props: { onClick: () => void }) => React.ReactNode;

  /** Determines whether user can pick more than one file */
  multiple?: Multiple;

  /** File input accept attribute, for example, `"image/png,image/jpeg"` */
  accept?: string;

  /** Input name attribute */
  name?: string;

  /** Input form attribute */
  form?: string;

  /** Reference of the function that should be called when value changes to null or empty array */
  resetRef?: React.ForwardedRef<() => void>;

  /** Disables file picker */
  disabled?: boolean;

  /** Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. */
  capture?: boolean | 'user' | 'environment';

  /** Passes down props to the input element used to capture files */
  inputProps?: React.ComponentPropsWithoutRef<'input'>;
}

const defaultProps: Partial<FileButtonProps> = {
  multiple: false,
};

type FileButtonComponent = (<Multiple extends boolean = false>(
  props: FileButtonProps<Multiple>
) => React.ReactElement) & { displayName?: string };

export const FileButton: FileButtonComponent = forwardRef<HTMLInputElement, FileButtonProps>(
  (props, ref) => {
    const {
      onChange,
      children,
      multiple,
      accept,
      name,
      form,
      resetRef,
      disabled,
      capture,
      inputProps,
      ...others
    } = useProps('FileButton', defaultProps, props);

    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
      !disabled && inputRef.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (multiple) {
        onChange(Array.from(event.currentTarget!.files!) as any);
      } else {
        onChange(event.currentTarget!.files![0] || null);
      }
    };

    const reset = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    assignRef(resetRef!, reset);

    return (
      <>
        {children({ onClick, ...others })}

        <input
          style={{ display: 'none' }}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          ref={useMergedRef(ref, inputRef)}
          name={name}
          form={form}
          capture={capture}
          {...inputProps}
        />
      </>
    );
  }
) as any;

FileButton.displayName = '@mantine/core/FileButton';
