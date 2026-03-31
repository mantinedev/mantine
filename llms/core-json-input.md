# JsonInput
Package: @mantine/core
Import: import { JsonInput } from '@mantine/core';
Description: Capture json data from user

## Usage

`JsonInput` is based on the [Textarea](https://mantine.dev/llms/core-textarea.md) component.
It includes JSON validation logic and an option to format the input value on blur:

```tsx
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
```


## Loading state

Set `loading` prop to display a loading indicator. By default, the loader is displayed on the right side of the input.
You can change the position with the `loadingPosition` prop to `'left'` or `'right'`. This is useful for async operations like API calls, searches, or validations:

```tsx
import { JsonInput } from '@mantine/core';

function Demo() {
  return <JsonInput placeholder="Enter JSON" formatOnBlur autosize minRows={4} loading />;
}
```


## Controlled

```tsx
import { useState } from 'react';
import { JsonInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <JsonInput value={value} onChange={setValue} />;
}
```

## Uncontrolled

`JsonInput` can be used with uncontrolled forms the same way as a native `textarea` element.
Set the `name` attribute to include json input value in `FormData` object on form submission.
To control the initial value in uncontrolled forms, use the `defaultValue` prop.

Example usage of uncontrolled `JsonInput` with `FormData`:

```tsx
import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log('JSON input value:', formData.get('data'));
      }}
    >
      <JsonInput
        label="Enter JSON"
        name="data"
        defaultValue="{}"
        formatOnBlur
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Custom serialization

You can provide custom `serialize` and `deserialize` functions to support data formats beyond standard JSON.
This is useful when you need to handle types like `Date`, `Map`, `Set`, `undefined`, or other non-JSON-serializable values.

The example below shows how to use [superjson](https://github.com/blitz-js/superjson) library to handle extended data types:

```tsx
import { useState } from 'react';
import { JsonInput } from '@mantine/core';
import superjson from 'superjson';

function Demo() {
  const [value, setValue] = useState(
    superjson.stringify(
      {
        name: 'John Doe',
        createdAt: new Date(),
        tags: new Set(['admin', 'user']),
        metadata: new Map([['role', 'developer']]),
      },
      null,
      2
    )
  );

  return (
    <JsonInput
      label="Extended JSON with superjson"
      description="Supports Date, Map, Set, BigInt, RegExp, and more"
      placeholder="Enter extended JSON"
      value={value}
      onChange={setValue}
      serialize={(val) => superjson.stringify(val, null, 2)}
      deserialize={superjson.parse}
      validationError="Invalid extended JSON format"
      formatOnBlur
      autosize
      minRows={6}
    />
  );
}
```

The `deserialize` function must throw an error when the input is invalid. Both `serialize` and `deserialize`
functions are used for formatting when `formatOnBlur` is enabled.

## Input props

JsonInput component supports [Input](https://mantine.dev/core/input) and [Input.Wrapper](https://mantine.dev/core/input) components features and all textarea element props. JsonInput documentation does not include all features supported by the component – see [Input](https://mantine.dev/core/input) documentation to learn about all available features.

```tsx
import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
       variant="default" size="sm" radius="md" label="Input label" withAsterisk={false} description="Input description" error=""
      placeholder="Input placeholder"
    />
  );
}
```



#### Props

**JsonInput props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| autosize | boolean | - | If set, enables textarea height growing with its content |
| defaultValue | string | - | Uncontrolled component default value |
| description | React.ReactNode | - | Contents of `Input.Description` component. If not set, description is not displayed. |
| descriptionProps | InputDescriptionProps | - | Props passed down to the `Input.Description` component |
| deserialize | ((text: string, reviver?: ((this: any, key: string, value: any) => any)) => any) \| undefined | - | Function to deserialize string value for formatting and validation. Must throw an error if the string is invalid JSON. |
| disabled | boolean | - | Sets `disabled` attribute on the `input` element |
| error | React.ReactNode | - | Contents of `Input.Error` component. If not set, error is not displayed. |
| errorProps | InputErrorProps | - | Props passed down to the `Input.Error` component |
| formatOnBlur | boolean | - | Determines whether the value should be formatted on blur |
| indentSpaces | number | - | Number of spaces to use as white space for formatting. Passed as the third argument to `serialize` function. |
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
| maxRows | number | - | Maximum rows for autosize textarea to grow, ignored if `autosize` prop is not set |
| minRows | number | - | Minimum rows of autosize textarea, ignored if `autosize` prop is not set |
| onChange | (value: string) => void | - | Called when value changes |
| pointer | boolean | - | Determines whether the input should have `cursor: pointer` style. Use when input acts as a button-like trigger (e.g., `component="button"` for Select/DatePicker). |
| radius | MantineRadius \| number | - | Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem |
| required | boolean | - | Adds required attribute to the input and a red asterisk on the right side of label |
| resize | Resize | - | Controls `resize` CSS property |
| rightSection | React.ReactNode | - | Content section displayed on the right side of the input |
| rightSectionPointerEvents | React.CSSProperties["pointerEvents"] | - | Sets `pointer-events` styles on the `rightSection` element. Use `'all'` when section contains interactive elements (buttons, links). |
| rightSectionProps | React.ComponentProps<"div"> | - | Props passed down to the `rightSection` element |
| rightSectionWidth | React.CSSProperties["width"] | - | Right section width, used to set `width` of the section and input `padding-right`, by default equals to the input height |
| serialize | { (value: any, replacer?: ((this: any, key: string, value: any) => any), space?: string \| number \| undefined): string; (value: any, replacer?: (string \| number)[] \| null \| undefined, space?: string \| ... 1 more ... \| undefined): string; } \| undefined | - | Function to serialize value into a string for formatting. Called with (value, null, 2) where 2 is the indentation level. |
| size | MantineSize | - | Controls input `height`, horizontal `padding`, and `font-size` |
| validationError | React.ReactNode | - | Error message shown when the input value is invalid JSON (checked on blur). If not provided, a generic error state is shown. Takes precedence over the `error` prop when validation fails. |
| value | string | - | Controlled component value |
| withAsterisk | boolean | - | If set, the required asterisk is displayed next to the label. Overrides `required` prop. Does not add required attribute to the input. |
| withErrorStyles | boolean | - | Determines whether the input should have red border and red text color when the `error` prop is set |
| wrapperProps | WrapperProps | - | Props passed down to the root element |


#### Styles API

JsonInput component supports Styles API. With Styles API, you can customize styles of any inner element. Follow the documentation to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles.

**JsonInput selectors**

| Selector | Static selector | Description |
|----------|----------------|-------------|
| wrapper | .mantine-JsonInput-wrapper | Root element of the Input |
| input | .mantine-JsonInput-input | Input element |
| section | .mantine-JsonInput-section | Left and right sections |
| root | .mantine-JsonInput-root | Root element |
| label | .mantine-JsonInput-label | Label element |
| required | .mantine-JsonInput-required | Required asterisk element, rendered inside label |
| description | .mantine-JsonInput-description | Description element |
| error | .mantine-JsonInput-error | Error element |
