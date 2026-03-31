# UnstyledComponents

# Unstyled components

## Using Mantine as a headless UI library

You can use Mantine as a headless UI library. To do that, simply do not import `@mantine/*/styles.css`
in your application. Then you will be able to apply styles to Mantine components using the [Styles API](https://mantine.dev/llms/styles-styles-api.md)
with a styling solution of your choice.

## HeadlessMantineProvider

`HeadlessMantineProvider` is an alternative to [MantineProvider](https://mantine.dev/llms/theming-mantine-provider.md)
that should be used when you want to use Mantine as a headless UI library. It removes all
features that are related to Mantine styles:

* Mantine classes are not applied to components
* Inline CSS variables are not added with the `style` attribute
* All color scheme related features are removed
* Global styles are not generated

Limitations of `HeadlessMantineProvider`:

* [Color scheme switching](https://mantine.dev/llms/theming-color-schemes.md) will not work. If your application has a dark mode, you will need to implement it on your side.
* Props that are related to styles in all components (`color`, `radius`, `size`, etc.) will have no effect.
* Some components that rely on styles will become unusable ([Grid](https://mantine.dev/llms/core-grid.md), [SimpleGrid](https://mantine.dev/llms/core-simple-grid.md), [Container](https://mantine.dev/llms/core-container.md), etc.).
* `lightHidden`/`darkHidden`, `visibleFrom`/`hiddenFrom` props will not work.
* [Style props](https://mantine.dev/llms/styles-style-props.md) will work only with explicit values, for example `mt="xs"` will not work, but `mt={5}` will.

To use `HeadlessMantineProvider`, follow the [getting started guide](https://mantine.dev/llms/getting-started.md) and replace `MantineProvider` with `HeadlessMantineProvider`.
Note that you do not need to use [ColorSchemeScript](https://mantine.dev/llms/theming-color-schemes.md#colorschemescript) in your application; it will not have any effect,
so you can ignore this part of the guide.

```tsx
import { HeadlessMantineProvider } from '@mantine/core';

function App() {
  return (
    <HeadlessMantineProvider>
      {/* Your application */}
    </HeadlessMantineProvider>
  );
}
```

## unstyled prop

Most Mantine components support the `unstyled` prop that removes library styles from the component and allows you to style it
from scratch. Note that the `unstyled` prop is not supported by compound components (`Tabs.Tab`, `Menu.Dropdown`, `Accordion.Control`, etc.)
– it only works on the root component (`Tabs`, `Menu`, `Accordion`, etc.).

Unstyled [Tabs](https://mantine.dev/llms/core-tabs.md) component:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
  );
}
```


> **Choosing between unstyled prop and headless components**
>
> `unstyled` prop is useful when you want to remove library styles from a single component,
> but keep styles for other components. For example, if [Tabs](https://mantine.dev/llms/core-tabs.md) component does
> not meet your design system requirements, but all other components do, you can use `unstyled`
> prop to remove styles from Tabs and style it from scratch, while keeping all other components
> styled with Mantine styles.
>
> Note that `unstyled` prop does not remove Mantine library styles from your `.css` bundle –
> it only does not apply them to component with `unstyled` prop.
