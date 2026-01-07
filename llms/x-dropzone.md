# Dropzone
Package: @mantine/dropzone
Import: import { Dropzone } from '@mantine/dropzone';
Description: Capture files from user with drag and drop

## Installation

```bash
yarn add @mantine/dropzone
```

```bash
npm install @mantine/dropzone
```

After installation import package styles at the root of your application:

```tsx
import '@mantine/core/styles.css';
// ‼️ import dropzone styles after core package styles
import '@mantine/dropzone/styles.css';
```

## Usage

`Dropzone` lets you capture one or more files from user.
Component is based on [react-dropzone](https://react-dropzone.js.org/) and support all of its core features:

* Accepts/rejects files based on provided mime types
* Limits individual file size
* Renders given children and provides context based component to display elements based on current status

#### Example: usage

```tsx
import { Group, Text } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';

export function BaseDemo(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  );
}
```


## Dropzone.Accept, Dropzone.Reject and Dropzone.Idle

`Dropzone.Accept`, `Dropzone.Reject` and `Dropzone.Idle` components are visible only when the user performs certain action:

* `Dropzone.Accept` is visible only when the user drags file that can be accepted over the dropzone
* `Dropzone.Reject` is visible only when the user drags file that cannot be accepted over the dropzone
* `Dropzone.Idle` is visible when the user does not drag anything over dropzone

## Loading state

Set `loading` prop to indicate loading state with [LoadingOverlay](https://mantine.dev/core/loading-overlay/) component.
When `loading` props is true user cannot drop or select new files (`Dropzone` becomes disabled):

#### Example: loading

```tsx
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone loading onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
```


## Disabled state

If you want to implement your own loading state you can disable `Dropzone` without `LoadingOverlay`.
Same as with `loading`, when `Dropzone` is disabled user cannot drop or select new files:

#### Example: disabled

```tsx
// Demo.tsx
import { Dropzone } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone disabled className={classes.disabled} onDrop={() => {}}>
      {/* children... */}
    </Dropzone>
  );
}

// Demo.module.css
.disabled {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-5));
  cursor: not-allowed;

  & * {
    color: light-dark(var(--mantine-color-gray-5), var(--mantine-color-dark-3));
  }
}
```


## Open file browser manually

To open files browser from outside of component use `openRef` prop to get function that will trigger file browser:

#### Example: manual

```tsx
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <>
      <Dropzone openRef={openRef} onDrop={() => {}}>
        {/* children */}
      </Dropzone>

      <Group justify="center" mt="md">
        <Button onClick={() => openRef.current?.()}>Select files</Button>
      </Group>
    </>
  );
}
```


## Enable child pointer event

By default, Dropzone disables pointer events on its children for dragging events to work. When `activateOnClick={false}`,
clicking on any children inside Dropzone will not do anything.
However, you can set style `pointerEvents: 'all'` to make children clickable.
Note that you need to set these styles only on interactive elements, such as buttons or links.

#### Example: enableChildPointerEvent

```tsx
import { useRef } from 'react';
import { Button, Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const openRef = useRef<() => void>(null);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}
```


## Mime types

To specify file types provide an object with the keys set to the [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
and the values as an array of file extensions. Find more examples of accepting specific file types
in the [react-dropzone documentation](https://react-dropzone.js.org/#section-accepting-specific-file-types).

```tsx
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone
      accept={{
        'image/*': [], // All images
        'text/html': ['.html', '.htm'],
      }}
      onDrop={() => {}}
    >
      {/* children */}
    </Dropzone>
  );
}
```

You can also specify file types by providing an array of mime types to `accept` prop:

```tsx
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone
      accept={[
        'image/png',
        'image/jpeg',
        'image/svg+xml',
        'image/gif',
      ]}
      onDrop={() => {}}
    >
      {/* children */}
    </Dropzone>
  );
}
```

To save some research time you can use `MIME_TYPES` variable exported from `@mantine/dropzone`:

```tsx
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone
      accept={[
        MIME_TYPES.png,
        MIME_TYPES.jpeg,
        MIME_TYPES.svg,
        MIME_TYPES.gif,
      ]}
      onDrop={() => {}}
    >
      {/* children */}
    </Dropzone>
  );
}
```

`MIME_TYPES` includes following data:

Additionally you can use grouped mime types:

```tsx
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  return (
    <Dropzone accept={IMAGE_MIME_TYPE} onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
```

## Styles API

`Dropzone` root element has the following data attributes to change styles based on current status:

* `data-loading` – when `loading` prop is `true`
* `data-accept` – when user drags files that can be accepted over the dropzone
* `data-reject` – when user drags files that cannot be accepted over the dropzone
* `data-idle` – default state – user does not drag any files over dropzone

#### Example: stylesApi

```tsx
// Demo.tsx
import { Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Dropzone onDrop={() => {}} accept={IMAGE_MIME_TYPE} className={classes.root}>
      <Text ta="center">Drop images here</Text>
    </Dropzone>
  );
}

// Demo.module.css
.root {
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));

  &[data-accept] {
    color: var(--mantine-color-white);
    background-color: var(--mantine-color-blue-6);
  }

  &[data-reject] {
    color: var(--mantine-color-white);
    background-color: var(--mantine-color-red-6);
  }
}
```


## Images previews

#### Example: preview

```tsx
import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';

function Demo() {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
  });

  return (
    <div>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Text ta="center">Drop images here</Text>
      </Dropzone>

      <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
        {previews}
      </SimpleGrid>
    </div>
  );
}
```


## Get ref

```tsx
import { useEffect, useRef } from 'react';
import { Dropzone } from '@mantine/dropzone';

function Demo() {
  const dropzoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dropzoneRef.current?.focus();
  }, []);

  return (
    <Dropzone ref={dropzoneRef} onDrop={() => {}}>
      {/* children */}
    </Dropzone>
  );
}
```

## Dropzone.FullScreen component

`Dropzone.FullScreen` lets you capture files dropped to browser window instead of specific area.
It supports the same props as `Dropzone` component.

To preview component click button and drop images to browser window:

#### Example: fullScreen

```tsx
import { useState } from 'react';
import { Group, Text, Button } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

function Demo() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Group justify="center">
        <Button color={active ? 'red' : 'blue'} onClick={() => setActive((d) => !d)}>
          {active ? 'Deactivate' : 'Activate'} full screen dropzone
        </Button>
      </Group>

      <Dropzone.FullScreen
        active={active}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          console.log(files);
          setActive(false);
        }}
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload size={52} color="var(--mantine-color-blue-6)" stroke={1.5} />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX size={52} color="var(--mantine-color-red-6)" stroke={1.5} />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={52} color="var(--mantine-color-dimmed)" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone.FullScreen>
    </>
  );
}
```



#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string[] | Accept | - | Mime types of the files that dropzone can accepts. By default, dropzone accepts all file types. |
| acceptColor | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to set colors of <code>Dropzone.Accept</code> |
| activateOnClick | boolean | - | If <code>false</code>, disables click to open the native file selection dialog |
| activateOnDrag | boolean | - | If <code>false</code>, disables drag 'n' drop |
| activateOnKeyboard | boolean | - | If <code>false</code>, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state. |
| autoFocus | boolean | - | Set to autofocus the root element |
| disabled | boolean | - | Determines whether files capturing should be disabled |
| dragEventsBubbling | boolean | - | If <code>false</code>, stops drag event propagation to parents |
| enablePointerEvents | boolean | - | Determines whether pointer events should be enabled on the inner element |
| getFilesFromEvent | (event: DropEvent) => Promise<(File | DataTransferItem)[]> | - | Use this to provide a custom file aggregator |
| inputProps | InputHTMLAttributes<HTMLInputElement> | - | Props passed down to the internal Input component |
| loaderProps | LoaderProps | - | Props passed down to the Loader component |
| loading | boolean | - | Determines whether a loading overlay should be displayed over the dropzone |
| maxFiles | number | - | Maximum number of files that can be picked at once |
| maxSize | number | - | Maximum file size in bytes |
| multiple | boolean | - | Determines whether multiple files can be dropped to the dropzone or selected from file system picker |
| name | string | - | Name of the form control. Submitted with the form as part of a name/value pair. |
| onDragEnter | (event: DragEvent<HTMLElement>) => void | - | Called when the <code>dragenter</code> event occurs |
| onDragLeave | (event: DragEvent<HTMLElement>) => void | - | Called when the <code>dragleave</code> event occurs |
| onDragOver | (event: DragEvent<HTMLElement>) => void | - | Called when the <code>dragover</code> event occurs |
| onDrop | (files: FileWithPath[]) => void | required | Called when valid files are dropped to the dropzone |
| onDropAny | (files: FileWithPath[], fileRejections: FileRejection[]) => void | - | Called when any files are dropped to the dropzone |
| onFileDialogCancel | () => void | - | Called when user closes the file selection dialog with no selection |
| onFileDialogOpen | () => void | - | Called when user opens the file selection dialog |
| onReject | (fileRejections: FileRejection[]) => void | - | Called when dropped files do not meet file restrictions |
| openRef | ForwardedRef<() => void> | undefined | - | A ref function which when called opens the file system file picker |
| preventDropOnDocument | boolean | - | If <code>false</code>, allow dropped items to take over the current browser window |
| radius | MantineRadius | number | - | Key of <code>theme.radius</code> or any valid CSS value to set <code>border-radius</code>, numbers are converted to rem |
| rejectColor | MantineColor | - | Key of <code>theme.colors</code> or any valid CSS color to set colors of <code>Dropzone.Reject</code> |
| useFsAccessApi | boolean | - | Set to true to use the File System Access API to open the file picker instead of using an <code>input type="file"</code> click event |
| validator | <T extends File>(file: T) => FileError | FileError[] | null | - | Custom validation function. It must return null if there's no errors. |


#### Styles API

Dropzone component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**Dropzone selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Dropzone-root | Dropzone root element |
| inner | .mantine-Dropzone-inner | Dropzone inner element (wraps children) |

**Dropzone CSS variables**

| Selector | Variable | Description |
|----------|----------|-------------|
| root | --dropzone-accept-bg | Controls `background-color` when file is accepted |
| root | --dropzone-reject-bg | Controls `background-color` when file is rejected |
| root | --dropzone-accept-color | Controls `color` when file is accepted |
| root | --dropzone-reject-color | Controls `color` when file is rejected |
| root | --dropzone-radius | Controls `border-radius` |

**Dropzone data attributes**

| Selector | Attribute | Condition | Value |
|----------|-----------|-----------|-------|
| root | data-accept | Files that are dragged over the dropzone are accepted | - |
| root | data-reject | Files that are dragged over the dropzone are rejected | - |
| root | data-idle | Dropzone is idle | - |
| root | data-loading | - | - |
| root | data-disabled | - | - |
| root | data-activate-on-click | - | - |

**Dropzonefullscreen selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| root | .mantine-Dropzonefullscreen-root | Dropzone root element |
| inner | .mantine-Dropzonefullscreen-inner | Dropzone inner element (wraps children) |
| fullScreen | .mantine-Dropzonefullscreen-fullScreen | Dropzone.Fullscreen root element |