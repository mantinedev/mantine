# Icons

# Icons libraries with Mantine

You can use any icons library with Mantine components, most popular options are:

* [Tabler icons](https://tabler-icons.io/)
* [Feather icons](https://feathericons.com/)
* [Radix icons](https://icons.radix-ui.com/)
* [react-icons](https://react-icons.github.io/react-icons/)
* [Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)

## Tabler icons

[Tabler icons](https://tabler-icons.io/) are used in Mantine demos, documentation
and some `@mantine/` packages depend on them. If you do not know which icons library
to use, we recommend [Tabler icons](https://tabler-icons.io/).

## Icons size

Most of the icons libraries support `size` prop (or similar `width` and `height` props) which allows changing
icon width and height. Usually, it is a number in pixels.

#### Example: icon

```tsx
import { IconBrandMantine } from '@tabler/icons-react';

function Demo() {
  return (
    <IconBrandMantine
      size={80}
      stroke={1.5}
      color="var(--mantine-color-blue-filled)"
    />
  );
}
```


> **rem units in size prop**
>
> Icons `size` prop is usually converted to `width` and `height` props under the hood.
> If you set `size={16}` it will be converted to `width="16"` and `height="16"` attributes
> on svg element.
>
> You can use rem units in `size` prop: `size="1rem"` will be converted to `width="1rem"` and `height="1rem"`,
> but it is not recommended as it is prohibited by SVG standard – some browsers (Firefox) will show a warning in the console.

## Custom icons

It is recommended to use icons as React components. In this case, you will be able to use
`currentColor` in the `fill` and `stroke` prop. This will change icon color based on the context
it is used in.

#### Example: customIcon

```tsx
// AddressBookIcon.tsx
interface AddressBookIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function AddressBookIcon({ size, style, ...others }: AddressBookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      style={{ width: size, height: size, ...style }}
      {...others}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M20 6v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2zM10 16h6" />
      <path d="M11 11a2 2 0 104 0 2 2 0 10-4 0M4 8h3M4 12h3M4 16h3" />
    </svg>
  );
}

// Demo.tsx
import { Button } from '@mantine/core';
import { AddressBookIcon } from './AddressBookIcon';

function Demo() {
  return <Button leftSection={<AddressBookIcon size={18} />}>Demo</Button>;
}
```

