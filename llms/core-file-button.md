# FileButton
Package: @mantine/core
Import: import { FileButton } from '@mantine/core';
Description: Open file picker with a button click

## Usage

```tsx
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
```


## Multiple files

Set the `multiple` prop to allow picking multiple files:

```tsx
import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
```


## Reset file

`resetRef` should be used to fix the issue with stale value on the hidden input element as input type file cannot be controlled.
Call `resetRef` when the user selection is cleared:

```tsx
import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <>
      <Group justify="center">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
```


## Server components

FileButton is not compatible with React Server Components as it uses useEffect and other client-side features. You can use it in client components only.


#### Props

**FileButton props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string | - | File input accept attribute, for example, `"image/png,image/jpeg"` |
| capture | boolean \| "user" \| "environment" | - | Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. |
| children | (props: { onClick: () => void; }) => ReactNode | required | Function that receives button props and returns react node that should be rendered |
| disabled | boolean | - | Disables file picker |
| form | string | - | Input form attribute |
| inputProps | React.ComponentProps<"input"> | - | Passes down props to the input element used to capture files |
| multiple | boolean | - | If set, user can pick more than one file |
| name | string | - | Input name attribute |
| onChange | (payload: Multiple extends true ? File[] : File \| null) => void | required | Called when files are picked |
| resetRef | Ref<() => void> | - | Reference of the function that should be called when value changes to null or empty array |