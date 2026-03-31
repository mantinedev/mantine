# How can I change Tabs border color?
Learn how to use Styles API with Tabs component

[Tabs](https://mantine.dev/core/tabs) border is added with `::before` on the `list`
element. You can use the [Styles API](https://mantine.dev/styles/styles-api) to change
the styles of inner elements:

#### Example: TabsBorderColor

```tsx
import { Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs defaultValue="gallery" classNames={classes}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

