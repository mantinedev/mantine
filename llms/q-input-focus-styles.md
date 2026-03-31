# How can I change input focus styles?
Learn how to use Styles API with Mantine inputs

## Change focus styles of a single input

To change the focus styles of a single input, use [Styles API](https://mantine.dev/styles/styles-api).
Note that in order for this to work correctly with all inputs, you need to use the
`:focus-within` pseudo-class instead of `:focus`:

#### Example: InputFocusStyles

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      classNames={classes}
      label="TextInput with custom focus styles"
      placeholder="TextInput with custom focus styles"
    />
  );
}
```


## Change focus styles of all inputs

To change the focus styles of all inputs, use [Styles API](https://mantine.dev/styles/styles-api) with the `Input` component
in the [theme object](https://mantine.dev/theming/theme-object):

#### Example: InputThemeFocusStyles

```tsx
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />
      <NativeSelect mt="md" label="Native select" data={['React', 'Angular', 'Vue', 'Svelte']} />
    </MantineProvider>
  );
}
```

