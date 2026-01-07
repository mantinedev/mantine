# useFileDialog
Package: @mantine/hooks
Import: import { UseFileDialog } from '@mantine/hooks';

## Usage

`use-file-dialog` allows capturing one or more files from the user without file input element:



## Definition

```tsx
interface UseFileDialogOptions {
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

interface UseFileDialogReturnValue {
  files: FileList | null;
  open: () => void;
  reset: () => void;
}

function useFileDialog(input?: UseFileDialogOptions): UseFileDialogReturnValue;
```

## Exported types

`UseFileDialogOptions` and `UseFileDialogReturnValue` types are exported from `@mantine/hooks` package,
you can import them in your application:

```tsx
import type { UseFileDialogOptions, UseFileDialogReturnValue } from '@mantine/hooks';
```
