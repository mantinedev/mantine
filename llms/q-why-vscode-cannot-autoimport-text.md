# Why can VSCode not autoimport the Text component?
It is confused by the native Text constructor

## Why is the Text component not automatically imported?

VSCode cannot automatically import the [Text](https://mantine.dev/core/text) component
because it confuses it with the native [Text](https://developer.mozilla.org/en-US/docs/Web/API/Text/Text) constructor,
which always appears as the first type reference in the editor.

<Image src={textConstructorImage.src} maw={800} />

## How can I import the Text component with VSCode?

To import the Mantine `Text` component, you need to manually select it from the list of suggestions
(usually, it appears as the second option):

<Image src={textComponentImage.src} maw={800} />

To learn more about VSCode IntelliSense and autoimport, visit the [official documentation](https://code.visualstudio.com/docs/editor/intellisense).
