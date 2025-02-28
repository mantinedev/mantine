import { useCallback, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export interface UseFileDialogOptions {
  /** Determines whether multiple files are allowed, `true` by default */
  multiple?: boolean;

  /** `accept` attribute of the file input, '*' by default */
  accept?: string;

  /** `capture` attribute of the file input */
  capture?: string;

  /** Determines whether the user can pick a directory instead of file, `false` by default */
  directory?: boolean;

  /** Determines whether the file input state should be reset when the file dialog is opened, `false` by default */
  resetOnOpen?: boolean;

  /** Initial selected files */
  initialFiles?: FileList | File[];

  /** Called when files are selected */
  onChange?: (files: FileList | null) => void;

  /** Called when file dialog is canceled */
  onCancel?: () => void;
}

const defaultOptions: UseFileDialogOptions = {
  multiple: true,
  accept: '*',
};

function getInitialFilesList(files: UseFileDialogOptions['initialFiles']): FileList | null {
  if (!files) {
    return null;
  }

  if (files instanceof FileList) {
    return files;
  }

  const result = new DataTransfer();
  for (const file of files) {
    result.items.add(file);
  }

  return result.files;
}

function createInput(options: UseFileDialogOptions) {
  if (typeof document === 'undefined') {
    return null;
  }

  const input = document.createElement('input');
  input.type = 'file';

  if (options.accept) {
    input.accept = options.accept;
  }

  if (options.multiple) {
    input.multiple = options.multiple;
  }

  if (options.capture) {
    input.capture = options.capture;
  }

  if (options.directory) {
    input.webkitdirectory = options.directory;
  }

  input.style.display = 'none';
  return input;
}

export function useFileDialog(input: UseFileDialogOptions = {}) {
  const options: UseFileDialogOptions = { ...defaultOptions, ...input };
  const [files, setFiles] = useState<FileList | null>(getInitialFilesList(options.initialFiles));
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = useCallback(
    (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target?.files) {
        setFiles(target.files);
        options.onChange?.(target.files);
      }
    },
    [options.onChange]
  );

  const createAndSetupInput = useCallback(() => {
    inputRef.current?.remove();
    inputRef.current = createInput(options);

    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChange, { once: true });
      document.body.appendChild(inputRef.current);
    }
  }, [options, handleChange]);

  useIsomorphicEffect(() => {
    createAndSetupInput();
    return () => inputRef.current?.remove();
  }, []);

  const reset = useCallback(() => {
    setFiles(null);
    options.onChange?.(null);
  }, [options.onChange]);

  const open = useCallback(() => {
    if (options.resetOnOpen) {
      reset();
    }

    createAndSetupInput();
    inputRef.current?.click();
  }, [options.resetOnOpen, reset, createAndSetupInput]);

  return { files, open, reset };
}
