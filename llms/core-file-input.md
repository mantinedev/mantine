# FileInput
Package: @mantine/core
Import: import { FileInput } from '@mantine/core';
Description: Capture files from user

## Usage

FileInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all input element props. FileInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Input placeholder"
    />
  );
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput placeholder="Upload file" loading />;
}
```


## Controlled

When `multiple` is `false`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File | null>(null);
  return <FileInput value={value} onChange={setValue} />;
}
```

When `multiple` is `true`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File[]>([]);
  return <FileInput multiple value={value} onChange={setValue} />;
}
```

## Uncontrolled

`FileInput` can be used with uncontrolled forms the same way as a native `input[type="file"]`.
Set the `name` attribute to include file input value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `FileInput` with `FormData`:

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const files = formData.getAll('file');
        console.log('File input value:', files);
      }}
    >
      <FileInput label="Upload your file" name="file" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Multiple

Set `multiple` to allow the user to pick more than one file:

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
```


## Accept

Set the `accept` prop to restrict file selection to specific mime types:

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
```


## Clearable

Set the `clearable` prop to display a clear button in the right section of the input
when a file is selected. Note that if you define a custom right section, the clear button
will not be rendered.

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
```


```tsx
import { CaretDownIcon } from '@phosphor-icons/react';
import { FileInput, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <FileInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick file"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <FileInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick file"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <FileInput
        label="clearSectionMode='clear'"
        placeholder="Pick file"
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
```


## Custom value component

```tsx
import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
```


## Error state

```tsx
import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```


## FileInputProps type

`FileInputProps` type is a generic interface which accepts a single type argument:
the `multiple` value.

```tsx
import type { FileInputProps } from '@mantine/core';

type SingleInputProps = FileInputProps<false>;
type MultipleInputProps = FileInputProps<true>;
```


#### Props

**FileInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accept | string | - | File input accept attribute, for example, `"image/png,image/jpeg"` |
| capture | boolean \| "user" \| "environment" | - | Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute. |
| clearButtonProps | React.ComponentProps<"button"> | - | Props passed down to the clear button |
| clearSectionMode | ClearSectionMode | - | Determines how the clear button and rightSection are rendered |
| clearable | boolean | - | If set, the clear button is displayed in the right section |
| defaultValue | File \| File[] \| null | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| fileInputProps | React.ComponentProps<"input"> | - | Props passed down to the hidden `input[type="file"]` |
| form | string | - | Input form attribute |
| inputContainer | (children: ReactNode) => ReactNode | - | Render function to wrap the input element. Useful for adding tooltips, popovers, or other wrappers around the input. |
| inputSize | string | - | HTML `size` attribute for the input element (number of visible characters) |
| inputWrapperOrder | ("input" \| "label" \| "description" \| "error")[] | - | Controls order and visibility of wrapper elements. Only elements included in this array will be rendered. |
| label | React.ReactNode | - | Contents of `Input.Label` component. If not set, label is not displayed. |
| labelProps | InputLabelProps | - | Props passed down to the `Input.Label` component |
| leftSection | React.ReactNode | - | Content section displayed on the left side of the input |
| leftSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `leftSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| leftSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `leftSection` element |
| leftSectionWidth | React.CSSProperties["width"] | - | Left section width, used to set `width` of the section and input `padding-left`, by default equals to the input height |
| loading | boolean | - | Displays loading indicator in the left or right section |
| loadingPosition | "left" \| "right" | - | Position of the loading indicator |
| multiple | boolean | - | If set, user can pick more than one file |
| name | string | - | Input name attribute |
| onChange | (payload: Multiple extends true ? File[] : File \| null) => void | - | Called when value changes |
| placeholder | React.ReactNode | - | Input placeholder |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| readOnly | boolean | - | If set, the input value cannot be changed |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resetRef | Ref<() => void> | - | Reference of the function that should be called when value changes to null or empty array |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| value | File \| File[] \| null | - | Controlled component value |
| valueComponent | FC<{ value: File \| File[] \| null; }> | - | Value renderer. By default, displays file name. |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

FileInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**FileInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-FileInput-wrapper | Root element of the Input |
| input | .mantine-FileInput-input | Input element |
| section | .mantine-FileInput-section | Left and right sections |
| root | .mantine-FileInput-root | Root element |
| label | .mantine-FileInput-label | Label element |
| required | .mantine-FileInput-required | Required asterisk element, rendered inside label |
| description | .mantine-FileInput-description | Description element |
| error | .mantine-FileInput-error | Error element |
| placeholder | .mantine-FileInput-placeholder | Placeholder text |
