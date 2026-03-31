# useFileDialog
Package: @mantine/hooks
Import: import { UseFileDialog } from '@mantine/hooks';

## Usage

The `use-file-dialog` hook allows you to capture one or more files from the user without a file input element:

```tsx
import { Button, Group, List } from '@mantine/core';
import { useFileDialog } from '@mantine/hooks';

function Demo() {
  const fileDialog = useFileDialog();

  const pickedFiles = Array.from(fileDialog.files || []).map((file) => (
    <List.Item key={file.name}>{file.name}</List.Item>
  ));

  return (
    <div>
      <Group>
        <Button onClick={fileDialog.open}>Pick files</Button>
        {pickedFiles.length > 0 && (
          <Button variant="default" onClick={fileDialog.reset}>
            Reset
          </Button>
        )}
      </Group>
      {pickedFiles.length > 0 && <List mt="lg">{pickedFiles}</List>}
    </div>
  );
}
```


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

`UseFileDialogOptions` and `UseFileDialogReturnValue` types are exported from the `@mantine/hooks` package;
you can import them in your application:

```tsx
import type { UseFileDialogOptions, UseFileDialogReturnValue } from '@mantine/hooks';
```
