/* eslint-disable react/no-unused-prop-types */
import React, { useRef, forwardRef } from 'react';
import { useMantineDefaultProps } from '@mantine/styles';
import { useMergedRef } from '@mantine/hooks';

export interface FileButtonProps<Multiple extends boolean = false> {
  /** Called when files are picked */
  onChange(event: Multiple extends true ? File[] : File): void;

  /** Function that receives button props and returns react node that should be rendered */
  children(props: { onClick(): void }): React.ReactNode;

  /** Determines whether user can pick more than one file */
  multiple?: Multiple;

  /** File input accept attribute, for example, "image/png,image/jpeg" */
  accept?: string;

  /** Input name attribute */
  name?: string;
}

const defaultProps: Partial<FileButtonProps> = {
  multiple: false,
};

type FileButtonComponent = (<Multiple extends boolean = false>(
  props: FileButtonProps<Multiple>
) => React.ReactElement) & { displayName?: string };

export const FileButton: FileButtonComponent = forwardRef<HTMLInputElement, FileButtonProps>(
  (props, ref) => {
    const { onChange, children, multiple, accept, name, ...others } = useMantineDefaultProps(
      'FileButton',
      defaultProps,
      props
    );

    const inputRef = useRef<HTMLInputElement>();

    const onClick = () => {
      inputRef.current.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (multiple) {
        onChange(Array.from(event.currentTarget.files) as any);
      } else {
        onChange(event.currentTarget.files[0]);
      }
    };

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
        />
      </>
    );
  }
) as any;

FileButton.displayName = '@mantine/core/FileButton';
