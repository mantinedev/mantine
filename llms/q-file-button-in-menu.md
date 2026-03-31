# Why does FileButton not work in Menu?
Learn how to use FileButton in Menu component

## Example of the issue

In the following example, the `onChange` callback will never be called
even though the `FileButton` is rendered inside the `Menu` component and
the file dialog is opened when the second `Menu.Item` is clicked.

#### Example: FileButtonMenuBroken

```tsx
import { Button, FileButton, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => <Menu.Item {...props}>Upload Image</Menu.Item>}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}
```


## Source of the issue

The `onChange` callback is not triggered in the example above because, by default,
the `Menu` component is closed automatically when an item is clicked. When the `Menu` is
closed, the `FileButton` is unmounted from the DOM with the underlying `input[type="file"]`
element. When the file is selected, the `input[type="file"]` element is not in the DOM,
and the `onChange` callback is not triggered.

## How to fix the issue

There are two solutions to this issue. The first one is to set the `keepMounted` prop
on the `Menu` component. This way, the `FileButton` will not be unmounted when the
`Menu` is closed:

#### Example: FileButtonMenuFix

```tsx
import { Button, FileButton, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu keepMounted>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => <Menu.Item {...props}>Upload Image</Menu.Item>}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}
```


The other solution is to prevent the `Menu` from closing when the `Menu.Item` that contains
the `FileButton` is clicked. This can be done by setting the `closeOnItemClick={false}` prop
on the `Menu.Item` component:

#### Example: FileButtonMenuFix2

```tsx
import { Button, FileButton, Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Fist item</Menu.Item>
        <FileButton onChange={(file) => console.log(file)} accept="image/png,image/jpeg">
          {(props) => (
            <Menu.Item {...props} closeMenuOnClick={false}>
              Upload Image
            </Menu.Item>
          )}
        </FileButton>
      </Menu.Dropdown>
    </Menu>
  );
}
```

